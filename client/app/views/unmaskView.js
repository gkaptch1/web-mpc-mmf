/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

define(['jquery', 'controllers/jiffController', 'controllers/tableController', 'controllers/analystController', 'helper/drop_sheet', 'alertHandler', 'table_template', 'spin', 'pki'],
  function ($, jiffController, tableController, analystController, DropSheet, alertHandler, table_template, Spinner, pki) {
    function error(msg) {
      alertHandler.error(msg);
    }

    function handle_file(event) {
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
          var sessionKey = $('#session').val();
          var sessionPass = $('#session-password').val();
          var privateKey = e.target.result;
          var progressBar = document.getElementById('unmask-progress-bar');

          // var client_keys = await analystController.getClientKeys(sessionKey, sessionPass);
          analystController.getClientKeys(sessionKey, sessionPass).then(function (keyRequestResult) {
            var clientPublicKeys = keyRequestResult;
            jiffController.analyst.computeAndFormat(sessionKey, sessionPass, privateKey, progressBar, error, function (result, rawresults) {
                // analystController.getClientKeys(sessionKey, sessionPass).then(function (keyRequestResult) {
                  var decryptPromises = [];
                  for (cohort of Object.keys(clientPublicKeys)) {
                    for(client of clientPublicKeys[cohort]) {
                      if(client.key != undefined) {
                        // console.log(client);
                        decryptPromises.push(pki.decrypt(atob(client.key), pki.parsePrivateKey(privateKey)));
                      }
                    }
                  }
                  // result
                  Promise.all(decryptPromises).then(function(decryptedSymmetricKeys) {
                    var clientIndex = 0;
                    var dataToSend = [];
                    for (cohort of Object.keys(clientPublicKeys)) {
                      for(client of clientPublicKeys[cohort]) {
                        if (client.key == undefined) {
                          continue;
                        }

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
                            sharesForClient[output.name][client.cohort] = rawresults.shares[output.name][client.cohort];
                          }
                          for (tag of output.outputParties.tags) {
                            if (sharesForClient[output.name] == undefined) {
                              sharesForClient[output.name] = {};
                            }
                            sharesForClient[output.name][tag] = rawresults.shares[output.name][tag];
                          }
                        }
                        dataToSend.push({pseudonymn: client.pseudonymn, analystMessage: JSON.stringify(pki.encryptMessageWithSymmetricKey(decryptedSymmetricKeys[clientIndex], JSON.stringify(sharesForClient), "associateddata"))}); // TODO FiX the message and AD
                        clientIndex++;
                      }
                    }
                    // console.log(dataToSend);
                    analystController.postBulkResultsMessage(sessionKey, sessionPass, dataToSend);
                  });
                // });

              analystController.getExistingCohorts(sessionKey, sessionPass).then(function (cohortMapping) {
                tableController.saveTables(result['averages'], sessionKey, 'Averages', result['cohorts'], cohortMapping);
                tableController.saveTables(result['deviations'], sessionKey, 'Standard_Deviations', result['cohorts'], cohortMapping);

                if(rawresults.tableTags != undefined) {
                  tableController.saveTagTables(rawresults.tableTags, sessionKey);
                  // for(tagresults of Object.keys(rawresults.tableTags)) {
                  //   console.log(rawresults.tableTags[tagresults].toString());
                  //   tableController.saveTables(rawresults.tableTags[tagresults], sessionKey, tagresults , result['cohorts'], cohortMapping);
                  // }
                }  
              });


              var compname = $('#computationname').val();
              var savepass = $('#savepassword').val();

              if (compname != "" && savepass != "") {
                let savekey = pki.generateKeyFromPassword("sessionID:" + sessionKey, "password:" + savepass.trim());
                // console.log(JSON.stringify(rawresults));
                let savestate = JSON.stringify(pki.encryptMessageWithSymmetricKey(savekey, JSON.stringify(rawresults), "associateddata"))
                // console.log(savestate);
                analystController.postSaveState(sessionKey, sessionPass, savestate, compname);
              }


              if (result['hasQuestions'] === true) {
                tableController.saveQuestions(rawresults["questions"], sessionKey);
              }
              if (result['hasUsability'] === true) {
                tableController.saveUsability(result['usability'], sessionKey, result['cohorts']);
              }
              if(result['linearRegressions'] != null &&  !(Object.keys(result['linearRegressions']).length === 0)){
                tableController.saveLinearRegressions(result['linearRegressions'], sessionKey, result['cohorts'])
              }
              $('#tables-area').show();
              spinner.stop();

              //  display sums in the table
              tableController.createTableElems(table_template.tables, '#tables-area');
              tableController.displayReadTable(result['averages']['all'], 'sum');

              // display standard deviations in the table
              tableController.createTableElems(table_template.tables, '#tables-area-deviation');
              tableController.displayReadTable(result['deviations']['all'], 'deviation')
            });
          });
        });
      }
    }

    function expandTable() {
      var expand_button = $('#expand-table-button');

      $(expand_button).click(function () {
        var ta = $('#tables-area');
        if (ta.css('display') === 'none') {
          ta.show();
        } else {
          ta.hide();
          tableController.resetTableWidth()
        }
      });
    }

    function unmaskView() {
      $(document).ready(function () {
        $('#tables-area').hide();
        expandTable();

        var _target = document.getElementById('drop-area');
        var _choose = document.getElementById('choose-file-button');

        DropSheet({
          drop: _target,
          choose: _choose,
          on: {},
          errors: {},
          handle_file: handle_file
        });

      });
    }

    return unmaskView;
  }
);
