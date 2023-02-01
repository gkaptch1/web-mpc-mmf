/**
 * Route endpoints for managing and retreiving user keys and associated urls.
 * The endpoints are executed AFTER payload validation and authentication are successful.
 */

// DB Operation Wrappers
const modelWrappers = require('../models/modelWrappers.js');
const { config } = require('../config/config.js');
const helpers = require('./helpers.js');
const table_template = require('../../client/app/' + config.client.table_template + '.js');

const MAX_SIZE = config.MAX_SIZE;

// Export route handlers
module.exports = {};

// end point for setting the number of cohorts in a session
module.exports.createNewCohort = function (context, body, response, sessionInfoObj) {
  // Password verified already by authentication!
  if (sessionInfoObj.status !== 'PAUSE') {
    response.status(500).send('Session status is ' + sessionInfoObj.status);
    return;
  }
  const oldCohortNum = sessionInfoObj.cohort_mapping.length;
  const cohortMapping = sessionInfoObj.cohort_mapping;

  const validateNames = module.exports.checkCohortNames(body.cohorts, cohortMapping);
  if (!validateNames.valid) {
    response.status(500).send(`Cohort "${validateNames.name}" already exists.`);
    return;
  }

  const cohortNames = module.exports.createDefaultCohortNames(body.cohorts, cohortMapping);
  const cohortNum = cohortMapping.length + cohortNames.length;
  // Do not need to verify since joi already did it
  for (let i = 0; i < cohortNames.length; i++) {
    sessionInfoObj.cohort_mapping.push({id: oldCohortNum+i+1, name: cohortNames[i]});
  }
  sessionInfoObj.cohorts = cohortNum;

  // Update sessionInfo in database
  var promise = modelWrappers.SessionInfo.update(sessionInfoObj);
  promise.then(function () {
    console.log('Updated cohorts:', body.session, sessionInfoObj.cohorts);
    response.json({oldCohortId: oldCohortNum, cohortId: cohortNum, cohortMapping: sessionInfoObj.cohort_mapping});
  }).catch(function (err) {
    console.log('Error creating new cohort', err);
    response.status(500).send('Error during session cohorts update.');
  });
};

module.exports.checkCohortNames = function (cohortNames, cohortMapping) {
  for (let name of cohortNames) {
    for (var c of cohortMapping) {
      if (name != null && c.name === name) {
        return {valid: false, name: name};
      }
    }
  }
  return {valid: true, name: ''}
};

module.exports.createDefaultCohortNames = function (cohortNames, cohortMapping) {
  const currentLen = cohortMapping.length;
  const newNames = [];
  for (let i = 0; i < cohortNames.length; i++) {
    if (cohortNames[i] == null) {
      newNames.push(`${config.client.cohort} ${i+1+currentLen}`); // i.e. "Cohort 1" or "Industry 1"
    } else {
      newNames.push(cohortNames[i]);
    }
  }
  return newNames;
};


// Need to get cohorts from multiple locations
module.exports.getCohorts = function (context, body, res) {
  var promise = modelWrappers.SessionInfo.get(body.session);

  promise.then(function (data) {
    res.json({cohorts: data.cohort_mapping});

  }).catch(function (err) {
    console.log('Error getting cohorts', err);
    res.status(500).send('Error getting cohorts.');
  });
};

// Need to get cohorts from multiple locations
module.exports.getUser = function (context, body, res) {
  var promise = modelWrappers.UserKey.get(body.session, body.userkey);

  promise.then(function (data) {
    res.json({session: data.session, userkey: data.userkey, cohort: data.cohort});

  }).catch(function (err) {
    console.log('Error getting user', err);
    res.status(500).send('Error getting user.');
  });
};

// endpoint for returning previously created client urls
module.exports.getClientUrls = function (context, body, res) {
  // Password verified already by authentication!
  var promise = modelWrappers.UserKey.query(body.session);

  promise.then(function (data) {
    var urls = {};
    for (var d of data) {
      var cohort = table_template.cohort_selection === true ? 0 : d.cohort;
      var arr = urls[cohort] == null ? [] : urls[cohort];
      if (d.subscriber) {
        arr.push('subscribe?session=' + body.session + '&participationCode=' + d.userkey);
      } else {
        arr.push('?session=' + body.session + '&participationCode=' + d.userkey);
      }
      urls[cohort] = arr;
    }

    console.log('URLs fetched:', body.session);
    res.json({ result: urls });
  }).catch(function (err) {
    console.log('Error in getting client urls', err);
    res.status(500).send('Error getting participation codes.')
  });
};

// endpoint for creating new client urls
module.exports.createClientUrls = function (context, body, response, sessionInfoObj) {
  var cohortId = body.cohort;

  var promise = modelWrappers.UserKey.query(body.session);
  promise.then(function (data) {
    var count = 1 + data.length; // starts at 1, because the first party is the analyst
    if (body.count + count > MAX_SIZE) {
      response.status(500).send('Maximum size exceeded by query, only ' + (MAX_SIZE - count) + ' parties can be added.');
      return;
    }

    var userKeys = {}; // fast lookup
    var jiffIds = {}; // fast lookup

    for (var d of data) {
      userKeys[d.userkey] = true;
      jiffIds[d.jiff_party_id] = true;
    }

    // Create count many unique (per session) user keys.
    var urls = [], dbObjs = [];

    for (var i = 0; i < Math.min(body.count, MAX_SIZE - count);) {
      var userkey = helpers.generateRandomBase32();
      var pseudonymn = helpers.generateRandomBase32();

      var jiff_party_id = context.jiff.serverInstance.helpers.random(MAX_SIZE - 1);
      jiff_party_id = parseInt(jiff_party_id.toString(), 10) + 2;  // in case of BigNumber objects

      // If user key already exists, repeat.
      if (userKeys[userkey] || jiffIds[jiff_party_id]) {
        continue;
      }

      // Mark as used
      userKeys[userkey] = true;
      jiffIds[jiff_party_id] = true;

      // Generate URL and add dbObject
      i++;
      urls.push('?session=' + body.session + '&participationCode=' + userkey);

      dbObjs.push({
        session: body.session,
        userkey: userkey,
        jiff_party_id: jiff_party_id,
        cohort: cohortId,
        pseudonymn:pseudonymn,
        subscriber: body.subscriber
      });
    }

    // Save the userKeys into the db.
    var promise = modelWrappers.UserKey.insertMany(dbObjs);
    promise.then(function () {
      console.log('URLs generated:', body.session, urls);
      response.json({ result: urls, cohort: cohortId });
    }).catch(function (err) {
      console.log('Error in inserting client urls', err);
      response.status(500).send('Error during storing keys.');
    });
  }).catch(function (err) {
    console.log('Error getting client urls in createClientUrls', err);
    response.status(500).send('Error getting participation codes.');
  });
};

module.exports.registerKeyToUser = function (context, body, response) {
  var promise = modelWrappers.UserKey.registerKeyToUser(body.session, body.userkey, body.key);

  promise.then(function (registerdata) {
    promisetwo = modelWrappers.History.insert(body.session, registerdata.jiff_party_id, true, body.userkey);
    promisetwo.then( function(insertdata) {
      response.json({session: registerdata.session, userkey: registerdata.userkey, key: body.key});
    }).catch(function (err) {
      console.log('Error getting user', err);
      response.status(500).send('Error getting user or operation forbidden.');
    });
  }).catch(function (err) {
    console.log('Error inserting event into history', err);
    response.status(500).send('Error inserting event into history.');
  });
};


// endpoint for returning previously created client urls
module.exports.getClientKeys = function (context, body, res) {
  // Password verified already by authentication!
  var promise = modelWrappers.UserKey.query(body.session);

  promise.then(function (data) {
    var pseudonymnsAndKeys = {};
    for (var d of data) {
      // pseudonymnsAndKeys[d.cohort].push({pseudonymn: d.pseudonymn, key:d.pub_key});
      // var cohort = table_template.cohort_selection === true ? 0 : d.cohort;
      var arr = pseudonymnsAndKeys[d.cohort] == null ? [] : pseudonymnsAndKeys[d.cohort];
      arr.push({pseudonymn: d.pseudonymn, key:d.pub_key, party_id:d.jiff_party_id, cohort:d.cohort});
      pseudonymnsAndKeys[d.cohort] = arr;
    }
    console.log('client keys fetched:', body.session);
    res.json({ result: pseudonymnsAndKeys });
  }).catch(function (err) {
    console.log('Error in getting client keys', err);
    res.status(500).send('Error getting client keys.')
  });
};


// endpoint for returning previously created client urls
module.exports.getResultMessage = function (context, body, res) {
  var promise = modelWrappers.ResultMessage.client.get({_id: body.session + body.userkey});
  promise.then(function (data) {
    // console.log(data.servermessages);
    // console.log(data.analystmessages);
    res.json({ servermessages: data.servermessages, analystmessages:data.analystmessages });
  }).catch(function (err) {
    console.log('Error in getting result message', err);
    res.status(500).send('Error in getting result message.')
  });
};


module.exports.analystBulkUpdateResultMessages = function (context, body, res) {
  var arbitrarycounter = 0;
  var promise = modelWrappers.UserKey.query(body.session);
  promise.then(function (data) {
    updates = [];
    for (var d of body.data) {
      userKey = data.find(o => o.pseudonymn === d.pseudonymn);
      let filter = {_id: userKey._id, session:userKey.session, userkey:userKey.userkey, pseudonymn:userKey.pseudonymn};
      updates.push(modelWrappers.ResultMessage.analyst.update(filter,d.analystMessage));
      arbitrarycounter++;
    }

    Promise.all(updates).then(function(values) {
      console.log('Analyst update of result messages:', body.session);
      res.json({num_updates:values.length});
    }).catch(function(err) {
      console.log('Error in analyst update of results messages', err);
      res.status(500).send('Error in analyst update of results messages');
    });
  }).catch(function (err) {
    console.log('Error in getting client keys', err);
    res.status(500).send('Error getting client keys.')
  });
};

module.exports.serverBulkUpdateResultMessages = function (context, body, res) {

  var promise = modelWrappers.UserKey.query(body.session);
  promise.then(function (data) {
    updates = [];
    for (var d of data) {
      userKey = data.find(o => o.pseudonymn === d.pseudonymn);

      let filter = {_id: d._id, session:d.session, userkey:d.userkey, pseudonymn:d.pseudonymn};
      updates.push(modelWrappers.ResultMessage.server.update(filter,d.serverMessage));
    }

    Promise.all(updates).then(function(values) {
      console.log('Analyst update of result messages:', body.session);
      res.json({num_updates:values.length});
    }).catch(function(err) {
      console.log('Error in analyst update of results messages', err);
      res.status(500).send('Error in analyst update of results messages');
    });
  }).catch(function (err) {
    console.log('Error in getting client keys', err);
    res.status(500).send('Error getting client keys.')
  });
};