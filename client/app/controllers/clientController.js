define([
  "jquery",
  "controllers/tableController",
  "controllers/jiffController",
  "controllers/usabilityController",
  "table_template",
  "alertHandler",
  "mpc",
], function (
  $,
  tableController,
  jiffController,
  usabilityController,
  table_template,
  alertHandler,
  mpc
) {
  var client = (function () {
    /**
     * Displays the given submission as the last submission in
     * the HTML submission history panel
     */
    function appendSubmissionHistory(time, status) {
      var $submissionHistory = $("#submission-history");
      if (status) {
        // append success line
        $submissionHistory.append(
          '<li><span class="success"><img src="/images/accept.png" alt="Success">Successful - ' +
            time +
            "</span></li>"
        );
      } else {
        $submissionHistory.append(
          '<li><span class="error"><img src="/images/cancel.png" alt="Error">Unsuccessful - ' +
            time +
            "</span></li>"
        );
      }
    }

    /**
     * Error messages definitions
     */
    var SUCCESS_MESSAGE =
      "Thank you for completing the survey! We are grateful for your time and for your contribution to this fieldwide initiative";
    var SESSION_KEY_ERROR = "Invalid session number";
    var PARTICIPATION_CODE_ERROR = "Invalid participation code";

    var SESSION_PARTICIPATION_CODE_SERVER_ERROR =
      "Session number and participation code do not match";

    var UNCHECKED_ERR =
      "Please acknowledge that all data is correct and verified";
    var ADD_QUESTIONS_ERR = "Please answer all Additional Questions";

    var GENERIC_TABLE_ERR = 'Please double-check the "%s" table';
    var SERVER_ERR = "Server not reachable";
    var GENERIC_SUBMISSION_ERR =
      "Something went wrong with submission! Please try again";

    var NAN_EMPTY_CELLS =
      "You have entered non-numeric data into at least one cell. Please make sure all cells contain positive numbers only. If you have no data for that cell, please enter a zero.";
    var SEMANTIC_CELLS =
      "You have entered data into a cell in one table without entering data into the corresponding cell in another table. Please double check all tables";
    var CELLS_ERRORS = {
      empty: NAN_EMPTY_CELLS,
      type: NAN_EMPTY_CELLS,
      min: NAN_EMPTY_CELLS,
      discrepancies: SEMANTIC_CELLS,
    };

    var cohort_name = "";
    var COHORT_ERR = "";

    var SELF_SELECT =
      Object.keys(table_template).includes("cohort_selection") &&
      table_template["cohort_selection"];

    if (SELF_SELECT) {
      cohort_name = document
        .getElementById("cohort-name")
        .innerHTML.toLowerCase();
      COHORT_ERR =
        "You have not selected the " + cohort_name + ". Please try again.";
    }

    // TODO: create new view for alerts
    function error(msg) {
      appendSubmissionHistory(new Date(), false);
      alertHandler.error(
        '<img src="/images/cancel.png" alt="Error">Error!',
        msg
      );
    }

    /**
     * Validate the session and participation code input fields.
     */
    function validateSessionInput(element, checkServerFlag) {
      element = $(element);
      var pattern = new RegExp($(element).prop("pattern"));
      var $parent = element.parent();

      if (element.val().trim().toLowerCase().match(pattern)) {
        $parent.removeClass("has-error").addClass("has-success has-feedback");
        $parent.find(".success-icon").removeClass("hidden").addClass("show");
        $parent.find(".fail-icon").removeClass("show").addClass("hidden");
        $parent.find(".fail-help").removeClass("show").addClass("hidden");
        $parent.find(".fail-custom").removeClass("show").addClass("hidden");
        if (checkServerFlag) {
          verifySessionServer();
        }
        return true;
      } else {
        $parent.removeClass("has-success").addClass("has-error has-feedback");
        $parent.find(".success-icon").removeClass("show").addClass("hidden");
        $parent.find(".fail-icon").removeClass("hidden").addClass("show");
        $parent.find(".fail-help").removeClass("hidden").addClass("show");
        $parent.find(".fail-custom").removeClass("show").addClass("hidden");
        return false;
      }
    }

    function getUserCohort() {
      if (SELF_SELECT) {
        return "0";
      }
      var session = $("#session").val().trim().toLowerCase();
      var participationCode = $("#participation-code")
        .val()
        .trim()
        .toLowerCase();

      if (session === "" || participationCode === "") {
        return;
      }

      return $.ajax({
        type: "POST",
        url: "/get_user",
        contentType: "application/json",
        data: JSON.stringify({ session: session, userkey: participationCode }),
        dataType: "text",
      })
        .then(function (response) {
          return JSON.parse(response).cohort;
        })
        .catch(function (err) {
          if (
            err &&
            err.hasOwnProperty("responseText") &&
            err.responseText !== undefined
          ) {
            alertHandler.error(err.responseText);
          }
        });
    }

    function verifySessionServer(callback) {
      var session = $("#session").val().trim().toLowerCase();
      var participationCode = $("#participation-code")
        .val()
        .trim()
        .toLowerCase();

      if (session === "" || participationCode === "") {
        callback && callback(false);
        return;
      }

      $.ajax({
        type: "POST",
        url: "/sessioninfo",
        contentType: "application/json",
        data: JSON.stringify({ session: session, userkey: participationCode }),
        dataType: "text",
      })
        .then(function (response) {
          JSON.parse(response); // verify response is json (error responses are string messages)
          var $parent = $("#session, #participation-code").parent();
          $parent.removeClass("has-error").addClass("has-success has-feedback");
          $parent.find(".success-icon").removeClass("hidden").addClass("show");
          $parent.find(".fail-icon").removeClass("show").addClass("hidden");
          $parent.find(".fail-help").removeClass("show").addClass("hidden");
          $parent.find(".fail-custom").removeClass("show").addClass("hidden");
          callback && callback(true);
        })
        .catch(function (err) {
          var errorMsg = SERVER_ERR;
          usabilityController.addValidationError("SESSION_INFO_ERROR");
          if (
            err &&
            err.hasOwnProperty("responseText") &&
            err.responseText !== undefined
          ) {
            errorMsg = err.responseText;
          }

          var $parent = $("#session, #participation-code").parent();
          $parent.removeClass("has-success").addClass("has-error has-feedback");
          $parent.find(".success-icon").removeClass("show").addClass("hidden");
          $parent.find(".fail-icon").removeClass("hidden").addClass("show");
          $parent.find(".fail-help").removeClass("show").addClass("hidden");
          $parent
            .find(".fail-custom")
            .removeClass("hidden")
            .addClass("show")
            .html(errorMsg);
          callback && callback(false);
        });
    }


    function verifySessionServerExplicitParams(sessionIn, participationCodeIn, callback) {
      var session = sessionIn.trim().toLowerCase();
      var participationCode = participationCodeIn.trim().toLowerCase();

      if (session === "" || participationCode === "") {
        callback && callback(false, null);
        return;
      }

      $.ajax({
        type: "POST",
        url: "/sessioninfo",
        contentType: "application/json",
        data: JSON.stringify({ session: session, userkey: participationCode }),
        dataType: "text",
      })
        .then(function (response) {
          JSON.parse(response); // verify response is json (error responses are string messages)
          callback && callback(true, response);
        })
        .catch(function (err) {
          var errorMsg = SERVER_ERR;
          if (
            err &&
            err.hasOwnProperty("responseText") &&
            err.responseText !== undefined
          ) {
            errorMsg = err.responseText;
          }
          callback && callback(false, err);
        });
    }

    function getResultMessage(sessionIn,participationCodeIn) {
      return $.ajax({
        type: 'POST',
        url: '/get_result_messages',
        contentType: 'application/json',
        data: JSON.stringify({session: sessionIn, userkey: participationCodeIn})
      }).then(function (resp) {
        // console.log(JSON.parse(resp);
        return resp;
      }).catch(function (err) {
        if (err && err.hasOwnProperty('responseText') && err.responseText !== undefined) {
          alertHandler.error(err.responseText);
        }
      });
    }


    /**
     * Called when the submit button is pressed.
     */
    function validate(tables, survey, callback) {
      var errors = [];
      // Verify session key
      var $session = $("#session");
      if (!validateSessionInput($session, false)) {
        errors.push(SESSION_KEY_ERROR);
        usabilityController.addValidationError("SESSION_KEY_ERROR");
      }

      var $participationCode = $("#participation-code");
      if (!validateSessionInput($participationCode, false)) {
        errors.push(PARTICIPATION_CODE_ERROR);
        usabilityController.addValidationError("PARTICIPATION_CODE_ERROR");
      }

      // Validate the remaining components after session and
      // and participation code are validated with the server.
      var validateRemainingComponents = function (result) {
        if (!result) {
          errors.push(SESSION_PARTICIPATION_CODE_SERVER_ERROR);
          usabilityController.addValidationError(
            "SESSION_PARTICIPATION_CODE_SERVER_ERROR"
          );
        }

        // Verify confirmation check box was checked
        var verifyChecked = $("#verify").is(":checked");
        if (!verifyChecked) {
          errors.push(UNCHECKED_ERR);
          usabilityController.addValidationError("UNCHECKED_ERR");
        }

        // Verify cohort was specified if there are cohorts
        // var cohort = getUserCohort(); // means no self assigned cohort
        // var cohort = '0'; // means no self assigned cohort
        if (SELF_SELECT) {
          var cohort = $("#cohortDrop").val();
          if (cohort === "-") {
            errors.push(COHORT_ERR);
            usabilityController.addValidationError("COHORT_ERR");
          }
        }

        // Verify additional questions
        if (table_template.survey !== undefined) {
          var questionsValid = false;
          if (
            window &&
            window.survey &&
            window.survey.isCompleted &&
            window.survey.data
          ) {
            questionsValid = true;
          }

          if (!questionsValid) {
            errors.push(ADD_QUESTIONS_ERR);
          }
        }

        // TODO: Pacesetters deployment does not use this validator in the template
        //  this will only affect BWWC
        tableController.registerValidator(
          "discrepancies",
          function (table, cell, value, callback) {
            checkSemanticDiscrepancies(tables, table, cell, value, callback);
          }
        );

        // Receive errors from validator and puts them in the errors array.
        var errorHandler = function (
          table_name,
          value,
          row,
          col,
          validator_name
        ) {
          var errorMsg;
          if (validator_name === "type" && value === "") {
            errorMsg = CELLS_ERRORS["empty"];
          } else {
            errorMsg = CELLS_ERRORS[validator_name];
          }

          if (errorMsg === null) {
            errorMsg = GENERIC_TABLE_ERR;
            errorMsg = errorMsg.replace("%s", table_name);
          }
          if (errors.indexOf(errorMsg) === -1) {
            errors.push(errorMsg);
            usabilityController.addValidationError("CELL_ERROR");
          }
        };
        tableController.registerErrorHandler(errorHandler);

        // Validate tables (callback chaining)
        (function validate_callback(i) {
          if(typeof variable == 'undefined') {
            if (errors.length === 0) {
              return callback(true, "");
            } else {
              return callback(false, errors);
            }
          }
          if (i >= tables.length) {
            // Remove the semantic discrepancies validator.
            tableController.removeValidator("discrepancies");
            tableController.removeErrorHandler(0);
            for (i = 0; i < tables.length; i++) {
              tables[i].render();
            }

            if (errors.length === 0) {
              return callback(true, "");
            } else {
              return callback(false, errors);
            }
          }

          // Dont validate tables that are not going to be submitted
          if (tables[i]._sail_meta.submit === false) {
            return validate_callback(i + 1);
          }

          tables[i].validateCells(function (result) {
            // Validate table
            validate_callback(i + 1);
          });
        })(0);
      };

      if (errors.length === 0) {
        verifySessionServer(validateRemainingComponents);
      } else {
        validateRemainingComponents(true);
      }
    }

    /**
     * All inputs are valid. Construct JSON objects and send them to the server.
     */
    function constructAndSend(tables, survey, cohort, la) {
      if (!Object.entries) {
        Object.entries = function (obj) {
          var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
          while (i--) {
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
          }

          return resArray;
        };
      }
      if (!Array.isArray) {
        Array.isArray = function (arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        };
      }
      const ordering = mpc.consistentOrdering(table_template);
      const questions = ordering.questions;
      // Begin constructing the data
      var session = $("#session").val().trim().toLowerCase();
      var participationCode = $("#participation-code")
        .val()
        .trim()
        .toLowerCase();

      // Add questions data, each question has three parts:
      //  'YES', 'NO', and 'NA' and each one has value 0 or 1

      const data = survey;
      var data_submission = data ? { questions: {} } : {};

      questions.forEach((question) => {
        const hasAnswer = question.id in data;
        values = [];
        switch (question.type) {
          case "radiogroup":
          case "checkbox": {
            if(hasAnswer) {
              values.push(1); // Indicate that the question was answered
            } else {
              values.push(0); // Indicate that the question wasn't answered
            }

            // checkbox is in shape of array, where radiogroup is single item;
            let answerArray = [];
            if (hasAnswer) {
              answerArray = Array.isArray(data[question.id])
                ? data[question.id]
                : [data[question.id]];
            }

            // set all options to checked if answerArray has the option in it
            for (let i = 0; i < question.items.length; i++) {
              values.push(
                answerArray.includes(question.items[i].value) ? 1 : 0
              );
            }
            break;
          }
          case "text": {
            if (hasAnswer) {
              values.push(1);  // Indicate that the question was answered
              const item = question.items[0];
              // set all subquestion answers to empty value
              values.push(question.isNumber ? Number(data[question.id]) : "");
            } else {
              values.push(0); // Indicate that the question wasn't answered
              values.push(question.isNumber ? 0 : "");
            }
            break;
          }
          case "multipletext": {
            for (let i = 0; i < question.items.length; i++) {
              const item = question.items[i];
              if (hasAnswer) {
                // set all subquestion answers to empty value
                values.push(1);  // Indicate that the question was answered
                values.push(item.isNumber ? Number(data[question.id][item.name] ) : "");
              } else {
                values.push(0); // Indicate that the question wasn't answered
                values.push(item.isNumber ? 0 : "");
              }
            }
            break;
          }
          case "matrixdropdown": {
            // set all possible choices to non-checked
            // for each subquestion in question
            for (let i = 0; i < question.items.length; i++) {
              const subquestion = question.items[i];
              // look in columns now
              // for each subsubquestion in subquetion
              for (let j = 0; j < subquestion.items.length; j++) {
                // column here which is sub subquestion
                const sub_subquestion = subquestion.items[j];
                // choices in sub_subquestions
                for (let k = 0; k < sub_subquestion.items.length; k++) {
                  values.set(
                    subquestion.id +
                      ":" +
                      sub_subquestion.id +
                      ":" +
                      sub_subquestion.items[k].value,
                    0
                  );
                }
              }
            }

            if (hasAnswer) {
              const answerArray = Object.entries(answers[id]);
              for (let i = 0; i < answerArray.length; i++) {
                for (let j = 0; j < question.items.length; j++) {
                  const answer = answerArray[i];
                  // has subquestion answer
                  // answerArray has subquestion texts as their key;
                  if (answer[0] === question.items[j].id) {
                    const columns = Object.entries(answer[1]);
                    for (let col of columns) {
                      let colName = col[0];
                      // if column cellType is radiogroup it is single value, where as checkbox is an array
                      let colChoices = Array.isArray(col[1])
                        ? col[1]
                        : [col[1]];

                      for (let choiceID of colChoices) {
                        // set selected choices in columns to 1
                        values.set(
                          question.items[j].id + ":" + colName + ":" + choiceID,
                          1
                        );
                      }
                    }
                  }
                }
              }
            }
            break;
          }
          case "matrix": {

            for (let i = 0; i < question.items.length; i++) {
              const subquestion = question.items[i];
              let answerArray = [];

              if (hasAnswer) {
                answerArray.push(1);
                for (let j = 0; j < question.items[i].items.length ; j++) {
                  answerArray.push(subquestion.items[j].value === data[question.id][i+1] ? 1 : 0);
                }
              } else {
                answerArray.push(0);
                for (let j = 0; j < question.items[i].items.length ; j++) {
                  answerArray.push(0);
                }
              }

              values = values.concat(answerArray);
            }
            break;
          }
          default:
            console.error("Unknown answer type");
            break;
        }

        data_submission["questions"][question.id] =  values;
      });

      // Handle table data, tables are represented as 2D associative arrays
      // with the first index being the row key, and the second being the column key
      if(table_template.tables.length > 0 ) {
        var tables_data = tableController.constructDataTables(tables);
        for (var i = 0; i < tables_data.length; i++) {
          data_submission[tables_data[i].name] = tables_data[i].data;
        }

        // handle ratios
        if (table_template.ratios != null) {
          for (let ratio of table_template.ratios) {
            var ratio_name =
              tables_data[ratio[0]].name + " : " + tables_data[ratio[1]].name;
            data_submission[ratio_name] = {};
            for (let row of Object.keys(tables_data[ratio[0]].data)) {
              data_submission[ratio_name][row] = {};
              var ratioFrac = 0;
              var denominator = tables_data[ratio[1]].data[row].value;
              if (denominator !== 0) {
                ratioFrac = tables_data[ratio[0]].data[row].value / denominator;
                ratioFrac = ratioFrac * 1000;
                ratioFrac = Math.trunc(ratioFrac);
              }
              data_submission[ratio_name][row]["value"] = ratioFrac;
            }
          }
        }

        if (document.getElementById("choose-file").files.length > 0) {
          usabilityController.dataPrefilled();
        }
      }

      data_submission["usability"] = usabilityController.analytics;

      jiffController.client.submit(
        session,
        participationCode,
        data_submission,
        function (err, response) {
          if (err == null || err === 200) {
            response = JSON.parse(response);
            if (response.success) {
              appendSubmissionHistory(new Date(), true);
              alertHandler.success(
                '<div id="submission-success">' + SUCCESS_MESSAGE + "</div>"
              );
            } else {
              error(response.error);
            }
          } else if (err === 0 || err === 500) {
            // check for status 0 or status 500 (Server not reachable.)
            error(SERVER_ERR);
            usabilityController.addValidationError("SERVER_ERR");
          } else {
            error(GENERIC_SUBMISSION_ERR);
            usabilityController.addValidationError("GENERIC_SUBMISSION_ERR");
          }
          if (!('contains_survey' in table_template && table_template.contains_survey)) {
            la.stop();
          }
        },
        cohort
      );
    }

    /**
     * Custom validator that checks for semantic discrepancies across many tables. In particular:
     * 1. For all tables except bonus (3rd table), the cell must be either zero in all tables, or non-zero in all tables.
     * 2. For the bonus table (3rd table), it can only be non-zero if the other tables are non-zero.
     */
    function checkSemanticDiscrepancies(tables, table, cell, value, callback) {
      // var num_regex = /$[0-9]+^/; // no need to worry about empty spaces, hot removes them for number types.
      var bonus_table = tables[2];
      var name = table._sail_meta.name;
      var r = cell.row_index;
      var c = cell.col_index;

      // Ignore indices were there is some non-numerical value
      for (var i = 0; i < tables.length; i++) {
        var v = tables[i].getDataAtCell(r, c);
        if (typeof v !== "number" || v < 0) {
          return callback(true);
        }
      }

      // bonus can only be non-zero if the other tables are non-zero.
      if (name === bonus_table._sail_meta.name) {
        // bonus can only be non-zero if the other tables are non-zero.
        if (value > 0) {
          for (var j = 0; j < tables.length; j++) {
            // length-1 because of the totals table
            if (j === 2) {
              continue;
            }

            if (!(tables[j].getDataAtCell(r, c) > 0)) {
              return callback(false); // No need to invalidate other cells here.
            }
          }
        }
      } else {
        // Not bonus table

        // the cell must be either zero in all tables, or non-zero in all tables
        var compare = value > 0;
        for (i = 0; i < tables.length; i++) {
          // length-1 because of the totals table
          if (name === tables[i]._sail_meta.name) {
            continue;
          }

          if (i === 2) {
            // bonus table can only be greater than zero if this value is greater than 0.
            if (tables[i].getDataAtCell(r, c) > 0 && !compare) {
              return callback(false);
            }
          } else if (tables[i].getDataAtCell(r, c) > 0 !== compare) {
            return callback(false);
          }
        }
      }

      callback(true);
    }

    function reconstructClientResults(serverSharesAsStrings, analystSharesAsStrings) {
      return jiffController.client.reconstructResults(serverSharesAsStrings, analystSharesAsStrings);
    }

    return {
      getUserCohort: getUserCohort,
      validate: validate,
      constructAndSend: constructAndSend,
      validateSessionInput: validateSessionInput,
      verifySessionServerExplicitParams: verifySessionServerExplicitParams,
      getResultMessage: getResultMessage,
      reconstructClientResults, reconstructClientResults,
    };
  })();

  return client;
});
