/**
 * Route endpoints for session status and history: getting and setting status, querying for NON-LEAKY submission history.
 * The endpoints are executed AFTER payload validation and authentication are successful.
 */

// DB Operation Wrappers
const modelWrappers = require('../models/modelWrappers.js');

const { config } = require('../config/config.js');
const table_template = require('../../client/app/' + config.client.table_template + '.js');

// Export route handlers
module.exports = {};

// endpoint for getting the status of a session
module.exports.getStatus = function (context, body, res) {
  var promise = modelWrappers.SessionInfo.get(body.session);

  promise.then(function (data) {
    var status = data ? data.status : 'PAUSE';
    var cohorts = data.cohorts;
    res.json({status: status, cohorts: cohorts});
  }).catch(function (err) {
    console.log('Error in getting session status', err);
    res.status(500).send('Error getting session status.');
  });
};

// endpoint for setting session status
module.exports.setStatus = function (context, body, response, sessionInfoObj) {
  if (sessionInfoObj.status === 'STOP') {
    response.status(500).send('Session status is ' + sessionInfoObj.status);
    return;
  }

  // no need to verify status, joi already did it
  sessionInfoObj.status = body.status;

  // Update sessionInfo in database
  var promise = modelWrappers.SessionInfo.update(sessionInfoObj);
  promise.then(function () {
    console.log('Session Status:', body.session, body.status);
    if (body.status === 'STOP') {
      context.jiff.computeSession(body.session);
    }
    response.json({result: body.status});
  }).catch(function (err) {
    console.log('Error setting session status', err);
    response.status(500).send('Error during session status update.');
  });
};

// endpoint for returning dates of submissions
module.exports.getSubmissionHistory = function (context, body, res) {
  var promise1 = modelWrappers.History.query(body.session, body.last_fetch);
  var promise2 = modelWrappers.UserKey.query(body.session);

  Promise.all([promise1, promise2]).then(function (data) {
    var cohortMap = {};
    var userKeyMap = {};
    var subscriberMap = {};
    var psueodnymnMap = {};
    for (var k of data[1]) {
      cohortMap[k.jiff_party_id] = k.cohort;
      userKeyMap[k.jiff_party_id] = k.userkey;
      subscriberMap[k.jiff_party_id] = k.subscriber;
      psueodnymnMap[k.jiff_party_id] = k.pseudonymn;
    }
    var history = data[0];
    
    // only send the most recent submission per id
    var id_last_index = {};
    var to_send = {}; // maps cohort number to submissions

    for (var d of history) {
      if (d.success === true) {
        var cohort = cohortMap[d.jiff_party_id];
        var arr = to_send[cohort];
        if (arr == null) {
          arr = [];
        }

        if (table_template.send_submitter_ids) {
          arr.push([d.date, userKeyMap[d.jiff_party_id], subscriberMap[d.jiff_party_id]]);
        } else {
          arr.push([d.date, psueodnymnMap[d.jiff_party_id], subscriberMap[d.jiff_party_id]]);
        }

        if (id_last_index[d.jiff_party_id] != null) {
          arr[id_last_index[d.jiff_party_id]] = null;
        }
        id_last_index[d.jiff_party_id] = arr.length - 1;

        to_send[cohort] = arr;
      }
    }

    // efficiently remove nulls.
    for (cohort in to_send) {
      if (!to_send.hasOwnProperty(cohort)) {
        continue;
      }

      var arrNoNulls = to_send[cohort];
      var shift = 0;
      var count = arrNoNulls.length;
      for (var i = 0; i < arrNoNulls.length; i++) {
        var current = arrNoNulls[i];
        if (current == null) {
          shift++;
        } else {
          arrNoNulls[i - shift] = current;
        }
      }
      if (table_template.send_submitter_ids) {
        to_send[cohort] = {history: arrNoNulls.slice(0, arrNoNulls.length - shift), count: count, data_1: data[1], data_0:data[0] };
      } else {
        to_send[cohort] = {history: arrNoNulls.slice(0, arrNoNulls.length - shift), count: count};
      }
    }

    res.json(to_send);
  }).catch(function (err) {
    console.log('Error getting submission history', err);
    res.status(500).send('Failed to fetch contributors.');
  });
};
