/**
 * Manages volatile state that JIFF server instances must track and use in order to deliver functionality.
 * Manages restoring this volatile state after shutdown / startup by recomputing or loading it from the DB.
 */

const modulesWrappers = require('../models/modelWrappers.js');

module.exports = function (JIFFWrapper) {
  // Load previously created sessions from DB into memory
  JIFFWrapper.prototype.loadVolatile = async function () {
    var self = this;

    // We have two pieces of volatile information that we need to load:
    // 1. jiff session information (compute using initializeSession)
    // 2. (empty) keys of clients in 'key_map', so that JIFF server can function correctly.
    // 3. need to run the server side jiff computation instance for stopped computations.
    var promise = modulesWrappers.SessionInfo.all();
    return promise.then(async function (sessions) {
      for (var session of sessions) {
        var session_key = session.session;
        var public_key = session.pub_key;
        var password = session.password;

        // Load 1: session information
        await self.initializeSession(session_key, public_key, password);

        // Load 2: party keys
        var history = await modulesWrappers.History.query(session_key);
        for (var submission of history) {
          var party_id = submission.jiff_party_id;
          self.serverInstance.computationMaps.keys[session_key][party_id] = '';
        }
        
        // Load 3: if session is stopped, run the jiff computation instance.
        if (session.status === 'STOP') {
          self.computeSession(session_key);
        }
      }

      // loaded successfully
      return true;
    });
  };
};
