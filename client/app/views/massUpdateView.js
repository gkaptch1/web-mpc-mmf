/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

define(['jquery', 'controllers/jiffController', 'controllers/tableController', 'controllers/analystController', 'helper/drop_sheet', 'alertHandler', 'table_template', 'spin', 'pki'],
  function ($, jiffController, tableController, analystController, DropSheet, alertHandler, table_template, Spinner, pki) {
    function error(msg) {
      alertHandler.error(msg);
    }

    function updateClick(event) {
       var f;

      var dropArea = document.getElementById('drop-area');
      var spinner = new Spinner().spin(dropArea);

      if (event.type === 'drop') {
        f = event.dataTransfer.files[0];
      } else if (event.type === 'change') {
        f = event.target.files[0];
      }

      if (f) {
        var keyReader = new FileReader();
        keyReader.readAsText(f);

        $(keyReader).on('load', function (e) {

          let sessionKey = $('#session').val();
          let sessionPass = $('#session-password').val();
          // let target = $('#target-participant').val();
          let computationname = $('#computationname').val();
          let savepass = $('#savepassword').val();
          var privateKey = e.target.result;

          let savekey = pki.generateKeyFromPassword("sessionID:" + sessionKey, "password:" + savepass.trim());

            analystController.getSaveState(sessionKey, sessionPass, computationname).then( function(savestateresponse) {
              let analystMessages = JSON.parse(pki.decryptMessageWithSymmetricKey(savekey,JSON.parse(savestateresponse)));

              // Go get the ids of all the ids 
              analystController.getClientKeys(sessionKey, sessionPass).then(function (keyRequestResult) {
                var clientPublicKeys = keyRequestResult;

                for(let cohort of Object.keys(clientPublicKeys)) {
                  for(client of clientPublicKeys[cohort]) {
                    if(client.key != undefined) {

                      analystController.updateSinglePartySharesByPseudonym(sessionKey, sessionPass, client.pseudonymn, computationname).then(function (response) {
                          let publickey = response.key;
                          let cohort = response.cohort;
                          let pseudonymn = response.pseudonymn;
                          var decryptPromises = [];
                          decryptPromises.push(pki.decrypt(atob(publickey), pki.parsePrivateKey(privateKey)));

                          // result
                          Promise.all(decryptPromises).then(function(decryptedSymmetricKey) {
                            var dataToSend = [];
                            var sharesForClient = {};
                            // Go get the struct that we need to send the client
                            for (output of table_template.computation.outputs) {

                              if(output.timing != "perRespondentProcessing") {
                                continue;
                              }

                              if (output.outputParties.cohort == "true") {
                                if (sharesForClient[output.name] == undefined) {
                                  sharesForClient[output.name] = {};
                                }
                                sharesForClient[output.name][cohort] = analystMessages.shares[output.name][cohort];
                              }
                            }
                            dataToSend.push({pseudonymn: pseudonymn, analystMessage: JSON.stringify(pki.encryptMessageWithSymmetricKey(decryptedSymmetricKey[0], JSON.stringify(sharesForClient), "associateddata"))}); // TODO FiX the message and AD
                            analystController.postBulkResultsMessage(sessionKey, sessionPass, dataToSend);
                          });
                        });
                    }
                  }
                }
              });
          });
        });
      }
    }

    function massUpdateView() {
      $(document).ready(function () {

        var _target_update = document.getElementById('drop-area');
        var _choose_update = document.getElementById('choose-file-button');

        var sessionParam = analystController.getParameterByName('session');
        if (sessionParam) {
          $('#session').val(sessionParam);
        }

        DropSheet({
          drop: _target_update,
          choose: _choose_update,
          on: {},
          errors: {},
          handle_file: updateClick
        });
      });
    }

    return massUpdateView;
  }
);
