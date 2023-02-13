define([
  "mpc",
  "pki",
  "BigNumber",
  "jiff",
  "jiff_bignumber",
  "jiff_client_restful",
  "table_template",
], function (
  mpc,
  pki,
  BigNumber,
  JIFFClient,
  jiff_bignumber,
  jiff_client_restful,
  table_template
) {
  var cryptoHooks = {
    encryptSign: function (jiff, message, receiver_public_key) {
      // Analyst never encrypts anything
      if (jiff.id === 1) {
        return message;
      }

      // Submitters only encrypt analyst share
      if (
        receiver_public_key == null ||
        receiver_public_key === "" ||
        receiver_public_key === "s1"
      ) {
        return message;
      }

      return pki.encrypt(message, receiver_public_key);
    },
    decryptSign: function (jiff, cipher, secret_key, sender_public_key) {
      // Submitters never decrypt anything
      if (jiff.id !== 1) {
        return cipher;
      }

      // Analyst only decrypts shares from submitters
      if (sender_public_key === "s1") {
        // Do not decrypt messages from the server
        return cipher;
      }

      return pki.decrypt(cipher, secret_key);
    },
    parseKey: function (jiff, keyString) {
      // We really parse just one key, the analyst key
      if (keyString == null || keyString === "" || keyString === "s1") {
        return keyString;
      }

      return pki.parsePublicKey(keyString);
    },
    dumpKey: function (jiff, key) {
      // No one cares about the submitters keys, dump the empty defaults
      if (jiff.id !== 1) {
        return key;
      }

      // Analyst public key will never be dumped except by the analyst
      // do not return anything (undefined) so that the public key
      // is never modified.
    },
  };

  // initialize jiff instance
  var initialize = function (session, role, options) {
    var baseOptions = {
      autoConnect: false,
      sodium: false,
      hooks: {
        createSecretShare: [
          function (jiff, share) {
            share.refresh = function () {
              return share;
            };
            return share;
          },
        ],
      },
      public_keys: {
        s1: "s1",
      },
    };
    baseOptions = Object.assign(baseOptions, options);
    baseOptions.hooks = Object.assign({}, baseOptions.hooks, cryptoHooks);
    /*
    baseOptions.hooks['beforeOperation'] = [
      function (jiff, label, msg) {
        console.log("Sending to server", label, msg);
        return msg;
      }
    ];
    baseOptions.hooks['afterOperation'] = [
      function (jiff, label, msg) {
        console.log("Received from server", label, msg);
        return msg;
      }
    ];
    */
    var bigNumberOptions = {
      Zp: "618970019642690137449562111", // Must be set to a prime number! Currently 2^89-1
      safemod: false,
    };

    var restOptions = {
      flushInterval: 0,
      pollInterval: 0,
      maxBatchSize: 5000,
    };
    
    if (role == "analyst") {
      baseOptions.crypto_provider = "http://127.0.0.1:4321";
    }

    var port = window.location.port === "8080" ? ":8080" : "";
    var instance = new JIFFClient(
      window.location.protocol + "//" + window.location.hostname + port,
      session,
      baseOptions
    );
    instance.apply_extension(jiff_bignumber, bigNumberOptions);
    
    if (role != "analyst") {
      instance.apply_extension(jiff_client_restful, restOptions);
    }

    instance.connect();
    return instance;
  };

  // Client side stuff
  var clientSubmit = function (
    sessionkey,
    userkey,
    dataSubmission,
    callback,
    cohort
  ) {
    var ordering = mpc.consistentOrdering(table_template);
    var values = [];
    // List values according to consistent ordering
    for (var i = 0; i < ordering.tables.length; i++) {
      var t = ordering.tables[i];
      values.push(Math.round(dataSubmission[t.table][t.row][t.col]));
    }

    for (var j = 0; j < ordering.questions.length; j++) {
      var q = ordering.questions[j];
      values = values.concat(dataSubmission['questions'][q.id]);
    }

    for (var k = 0; k < ordering.usability.length; k++) {
      var m = ordering.usability[k].metric;
      var f = ordering.usability[k].field;

      if (f != null && f !== "") {
        values.push(dataSubmission.usability[m][f]);
      } else {
        values.push(dataSubmission.usability[m]);
      }
    }

    // Handle jiff errors returned from server
    var options = {
      onError: function (errorString) {
        callback(null, JSON.stringify({ status: false, error: errorString }));
      },
      initialization: {
        userkey: userkey,
        cohort: cohort,
      },
      party_id: null,
    };

    console.log(dataSubmission);
    console.log(values);

    // Initialize and submit
    var jiff = initialize(sessionkey, "client", options);
    jiff.wait_for([1, "s1"], function () {
      // After initialization
      jiff.restReceive = function () {
        jiff.disconnect(false, false);
        callback.apply(null, arguments);
      };
      // first share table values
      for (var i = 0; i < ordering.tables.length; i++) {
        jiff.share(values[i], null, [1, "s1"], [jiff.id]);
      }
      // then share table values squared (for deviations)
      for (i = 0; i < ordering.tables.length; i++) {
        jiff.share(new BigNumber(values[i]).pow(2), null, [1, "s1"], [jiff.id]);
      }
      // then share the rest
      for (i = ordering.tables.length; i < values.length; i++) {
        if (typeof values[i] === "string") continue;
        jiff.share(values[i], null, [1, "s1"], [jiff.id]);
      }
      jiff.restFlush();
    }, true);
  };

  // Analyst side stuff
  var computeAndFormat = function (
    sessionkey,
    password,
    secretkey,
    progressBar,
    error,
    callback
  ) {
    var options = {
      onError: error,
      secret_key: pki.parsePrivateKey(secretkey),
      party_id: 1,
      initialization: {
        password: password,
      },
    };

    // Initialize
    var jiff = initialize(sessionkey, "analyst", options);
    // Tell the server to compute.
    jiff.emit('compute', [ 's1' ], 'compute', false);
    // Listen to the submitter ids from server
    jiff.listen("compute", function (party_id, msg) {
      console.log("Got the compute signal from server");
      jiff.remove_listener("compute");
      if (party_id !== "s1") {
        return;
      }

      // Meta-info
      var ordering = mpc.consistentOrdering(table_template);
      var submitters = JSON.parse(msg);

      // Compute and Format
      var promise = mpc.compute(jiff, submitters, ordering, table_template, progressBar);
      promise
        .then(function (result) {
          jiff.disconnect(true, false);

          callback(mpc.format(result, submitters, ordering),result);
        })
        .catch(function (err) {
          console.log(err);
          error(err.toString());
        });
    });
  };

  var parseShare = function(jiff, shareString, source) {
    value = jiff.helpers.BigNumber(shareString.substring(shareString.indexOf("share:")+7, shareString.indexOf("Holders: ")-2));
    holders = JSON.parse(shareString.substring(shareString.indexOf("Holders: ")+9, shareString.indexOf("Threshold: ")-2));
    threshold = JSON.parse(shareString.substring(shareString.indexOf("Threshold: ")+11, shareString.indexOf("Zp: ")-2));
    zp = shareString.substring(shareString.indexOf("Zp: ")+4, shareString.length-1);
    toReturn = new jiff.SecretShare(value, holders, threshold, zp);
    if (source == "server") {
      toReturn.sender_id = "1"
    } else {
     toReturn.sender_id = "s1"
    }
    return toReturn;
  };

  var reconstructClientResults = function(serverSharesAsStrings, analystSharesAsStrings) {

    //Create a dummy jiff instance
    jiff = initialize("","");

    // Create a structure to hold the results
    var resultShares = {};


    for (question of Object.keys(serverSharesAsStrings)) {
      resultShares[question] = {};

      for(cohort of Object.keys(serverSharesAsStrings[question])) {
          resultShares[question][cohort] = {};
          
        for(filter of Object.keys(serverSharesAsStrings[question][cohort])) {
          resultShares[question][cohort][filter] = [];
          
          for (let i = 0; i<serverSharesAsStrings[question][cohort][filter].length;i++) {
            // (1) Parse the shares
            // (2) Run reconstruct
            // (3) push into the appropriate place in the data structure
            resultShares[question][cohort][filter].push(jiff.hooks.reconstructShare(jiff,
              [
                parseShare(jiff, serverSharesAsStrings[question][cohort][filter][i], "server"),
                parseShare(jiff, analystSharesAsStrings[question][cohort][filter][i], "analyst")
                ]
            ));
          }
        }
      }
    }
    console.log(resultShares);
    return resultShares;
  };


  // Exports
  return {
    client: {
      submit: clientSubmit,
      reconstructResults: reconstructClientResults,
    },
    analyst: {
      computeAndFormat: computeAndFormat,
    },
  };
});
