// Dependencies
const JIFFServer = require('../../jiff/lib/jiff-server.js');
const jiffServerBigNumber = require('../../jiff/lib/ext/jiff-server-bignumber.js');
const jiffServerRestAPI = require('../../jiff/lib/ext/jiff-server-restful.js');

const { config } = require('../config/config.js');
const mpc = require('../../client/app/helper/mpc.js');

const mailbox_hooks = require('./mailbox.js');
const authentication_hooks = require('./auth.js');

const modelWrappers = require('../models/modelWrappers.js')

const MAX_SIZE = config.MAX_SIZE;

// Crypto hooks
const cryptoHooks =  {
  generateKeyPair: function () {
    return { public_key: 's1', secret_key: 's1' };
  },
  parseKey: function (jiff, key) {
    return key;
  },
  dumpKey: function (jiff, key) {
    return key;
  }
};

// Options and Hooks
const options = { logs: true, sodium: false, hooks: {} };
const computeOptions = {
  sodium: false,
  safemod: false,
  logs: true,
  Zp: '618970019642690137449562111',  // 2^89-1
  crypto_provider : "http://localhost:4321",
  hooks: {
    createSecretShare: [function (jiff, share) {
      share.refresh = function () {
        return share;
      };
      return share;
    }]
  }
};
options.hooks = Object.assign(options.hooks, mailbox_hooks, authentication_hooks, cryptoHooks);

// In particular, load session keys and public keys, and use initializeSession below
// to initialize the sessions.
function JIFFWrapper(server, app) {
  this.serverInstance = new JIFFServer(server, options);
  this.serverInstance.apply_extension(jiffServerBigNumber);
  this.serverInstance.apply_extension(jiffServerRestAPI, { app: app, maxBatchSize: Infinity });
  this.serverInstance._wrapper = this;
  this.serverInstance.mailbox_hooks = mailbox_hooks;

  // Unsupported/insecure operations
  this.serverInstance.request_number_share = function () {
    throw new Error('Generating numbers using the server is not supported!');
  };
  this.serverInstance.request_triplet_share = function () {
    throw new Error('Generating beaver triplets using the server is not supported!');
  };

  // Load some volatile state from DB that may have been lost on shutdown/startup.
  this.ready = this.loadVolatile();
}

// Add volatile state management
require('./volatile.js')(JIFFWrapper);
require('./tracker.js')(JIFFWrapper);

// Initializing a JIFF computation when a session is created.
JIFFWrapper.prototype.initializeSession = async function (session_key, public_key, password) {
  // Initialize
  var msg = { public_key: public_key, party_id: 1, party_count: MAX_SIZE, password: password };
  await this.serverInstance.handlers.initializeParty(session_key, 1, MAX_SIZE, msg);
};

// Setting up a listener for the session, to start computing when analyst requests.
JIFFWrapper.prototype.computeSession = async function (session_key) {
  console.log('Perform server side computation', session_key);

  var copy = Object.assign({}, computeOptions);
  copy.hooks = Object.assign({}, computeOptions.hooks, cryptoHooks);
  const computationInstance = this.serverInstance.compute(session_key, computeOptions);
  
  var self = this;
  // Wait for the analyst to tell us to compute.
  computationInstance.listen("compute", async function (party_id, msg) {
    console.log('Analyst indicates time to compute');

    // Reset the instance state as if it's fresh for every time the analyst
    // invokes compute.
    computationInstance.counters.reset();
    // Re-initializes the computation instace and re-reads its mailbox.
    computationInstance.socket.connect();

    // Send submitters ids to analyst
    var submitters = await self.getTrackerParties(session_key);
    // console.log(submitters);

    submitters["cohorts"] = {};

    var promise = modelWrappers.UserKey.query(session_key);

    promise.then(function (data) {

      var userKeysAlreadyLoaded = data;

      for (var d of data) {
        if(submitters["cohorts"][d.cohort] == undefined) {
          submitters["cohorts"][d.cohort] = [];
        }
        submitters["cohorts"][d.cohort].push(""+d.jiff_party_id)
      }

      // console.log(submitters);
      computationInstance.emit('compute', [ 1 ], JSON.stringify(submitters), false);

      // Perform server-side MPC
      var table_template = require('../../client/app/' + config.client.table_template + '.js');
      var ordering = mpc.consistentOrdering(table_template);
      mpc.compute(computationInstance, submitters, ordering, table_template).then(function(result) {

        console.log("Finished Computation");

        updates = [];
        for (var d of userKeysAlreadyLoaded) {
          userKey = userKeysAlreadyLoaded.find(o => o.pseudonymn === d.pseudonymn);
          console.log(userKey);

          let filter = {_id: d._id, session:d.session, userkey:d.userkey, pseudonymn:d.pseudonymn};
          updates.push(modelWrappers.ResultMessage.server.update(filter,d.serverMessage));
        }

        Promise.all(updates).then(function(values) {
          console.log('Server update of result messages');
        }).catch(function(err) {
          console.log('Error in server update of results messages', err);
        });
      });
    });
  });
};

module.exports = JIFFWrapper;
