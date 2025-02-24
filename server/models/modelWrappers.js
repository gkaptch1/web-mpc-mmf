const models = require('./models.js');

/**
 *  HISTORY MODEL
 */
// find history for a given session
var queryHistory = function (session_key, last_fetch) {
  return new Promise(function (resolve, reject) {
    var query = models.History.where({session: session_key});
    if (last_fetch != null) {
      query = query.gt('date', last_fetch);
    }

    query = query.sort({ date: 'asc'});
    query.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// add to history of a given session
var insertHistory = function (session_key, jiff_party_id, success, participant_id) {
  console.log('trying to submit history')
  var history = new models.History({
    session: session_key,
    jiff_party_id: jiff_party_id,
    participant_id: participant_id,
    date: Date.now(),
    success: success
  });

  return new Promise(function (resolve, reject) {
    history.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

/**
 * SESSION INFO MODEL
 */
// insert new session
var insertSessionInfo = function (session_key, public_key, password, title, description, cohortMapping) {
  var sessionInfo = new models.SessionInfo({
    _id: session_key,
    session: session_key,
    pub_key: public_key,
    password: password,
    title: title,
    description: description,
    status: 'PAUSE',
    cohort_mapping: cohortMapping,
    cohorts: cohortMapping.length + 1
  });

  return new Promise(function (resolve, reject) {
    sessionInfo.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// update existing session
var updateSessionInfo = function (sessionInfo) {
  return new Promise(function (resolve, reject) {
    sessionInfo.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// get all sessions
var allSessionInfo = function () {
  return new Promise(function (resolve, reject) {
    models.SessionInfo.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// find session by session key and password
var getSessionInfo = function (session, password) {
  var obj = { _id: session };
  if (password != null) {
    obj['password'] = password;
  }

  return new Promise(function (resolve, reject) {
    models.SessionInfo.findOne(obj, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * USER KEY MODEL
 */
// find user by session key and user key
var getUserKey = function (session_key, user_key) {
  return new Promise(function (resolve, reject) {
    models.UserKey.findOne({_id: session_key + user_key}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var getUserKeyByPseudonym = function (session_key, pseudonym) {
  return new Promise(function (resolve, reject) {
    models.UserKey.findOne({session: session_key,  pseudonymn:pseudonym}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// find user keys by session key
var queryUserKey = function (session_key) {
  return new Promise(function (resolve, reject) {
    var query = models.UserKey.where({ session: session_key});
    query.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data); //TODO make sure we dont share the mapping between keys and user_keys with the anylst
      }
    });
  });
};

// insert several user keys
var insertManyUserKey = function (array) {
  array = array.map(function (obj) {
    obj['_id'] = obj.session + obj.userkey;
    return new models.UserKey(obj);
  });

  return new Promise(function (resolve, reject) {
    models.UserKey.insertMany(array, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

var registerKeyToUser = function (session_key, user_key, public_key) {
  return new Promise(function (resolve, reject) { // TODO protect against updates to the analyst key
    models.UserKey.findOneAndUpdate({_id: session_key + user_key}, { pub_key : public_key}, {upsert: false}, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * MAIL BOX MODEL
 */
// upsert (update or insert) into mailbox
var upsertMailbox = function (session_key, from_jiff_party_id, to_jiff_party_id, op_id, label, msg) {
  return new Promise(function (resolve, reject) {
    var id = session_key + ':' + from_jiff_party_id + ':' + to_jiff_party_id + ':' + op_id;

    var obj = new models.Mailbox({
      _id: id,
      session: session_key,
      from_id: from_jiff_party_id.toString(),
      to_id: to_jiff_party_id.toString(),
      op_id: op_id,
      label: label,
      message: msg
    });

    models.Mailbox.update({_id: id}, obj.toObject(), {upsert: true}, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// get entire mailbox for session key and user id
var queryMailbox = function (session_key, to_jiff_party_id, skip, limit, filter) {
  var obj = { session: session_key, to_id: to_jiff_party_id };
  obj = Object.assign({}, filter, obj);

  return new Promise(function (resolve, reject) {
    var query = models.Mailbox.where(obj);

    if (skip) {
      query = query.skip(skip);
    }
    if (limit) {
      query = query.limit(limit);
    }

    query.find(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/*
* Result Message Model
*/

var analystMessageUpdate = function(filter,analystMessage) {
  return new Promise(function (resolve, reject) { // TODO protect against updates to the analyst key
    models.ResultMessage.findOneAndUpdate(filter, {analystmessages:analystMessage}, {upsert: true}, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// insert 
var insertManyResultMessage = function (array) {
  array = array.map(function (obj) {
    obj['_id'] = obj.session + obj.userkey;
    return new models.ResultMessage(obj);
  });

  return new Promise(function (resolve, reject) {
    models.ResultMessage.insertMany(array, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};


var serverMessageUpdate = function(filter,serverMessage) {
  return new Promise(function (resolve, reject) { // TODO protect against updates to the analyst key
    models.ResultMessage.findOneAndUpdate(filter, {servermessages:serverMessage}, {upsert: true}, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var getResultMessage = function(id) {
  return new Promise(function (resolve, reject) { 
    models.ResultMessage.findOne({_id: id}, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var storeComputationOutput = function(filter, computationOutputs) {
  return new Promise(function (resolve, reject) {
    models.ComputationOutputs.findOneAndUpdate(filter, {resultsstring:computationOutputs}, {upsert: true}, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var storeSaveState = function(filter, SaveState) {
  return new Promise(function (resolve, reject) {
    models.SaveState.findOneAndUpdate(filter, {savestatestring:SaveState}, {upsert: true}, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var getSaveState = function(session_key, role, computationname) {
  let filter = {};
  if (computationname != null) {
    filter = {_id: session_key+computationname+role, session: session_key, role: role, computationname: computationname};
  } else {
    filter = {_id: session_key+role, session: session_key, role: role};
  }

  return new Promise(function (resolve, reject) {
    models.SaveState.findOne(filter, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * CONVENTION:
 * 1. query yields a list (potentially empty).
 * 2. get yields a single object (potentially null).
 * 3. insert, upsert, and update resolve to nothing.
 * 4. insertMany inserts an array of objects and resolves to nothing.
 */
module.exports = {
  History: {
    query: queryHistory,
    insert: insertHistory
  },
  SessionInfo: {
    get: getSessionInfo,
    insert: insertSessionInfo,
    update: updateSessionInfo,
    all: allSessionInfo
  },
  UserKey: {
    get: getUserKey,
    query: queryUserKey,
    getByPseudonym: getUserKeyByPseudonym,
    insertMany: insertManyUserKey,
    registerKeyToUser : registerKeyToUser
  },
  Mailbox: {
    upsert: upsertMailbox,
    query: queryMailbox
  },
  ResultMessage: {
    analyst: {
      update: analystMessageUpdate,
    },
    server: {
      insertMany: insertManyResultMessage,
      update: serverMessageUpdate
    },
    client: {
      get: getResultMessage
    }
  },
  ComputationOutputs : {
    update: storeComputationOutput
  },
  SaveState : {
    update: storeSaveState,
    get: getSaveState
  },
};
