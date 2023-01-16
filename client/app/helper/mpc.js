if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(["constants"], function (constants) {
  const AVG = constants.AVG;
  const STD = constants.STD;
  const LIN = constants.LIN;
  const SELF = constants.SELF;

  const ALL = "ALL";

  var setOrAssign = function (obj, keys, value) {
    for (var i = 0; i < keys.length - 1; i++) {
      var key = keys[i];
      if (obj[key] == null) {
        obj[key] = {};
      }

      obj = obj[key];
    }

    obj[keys[keys.length - 1]] = value;
  };

  var updateProgress = function (progressBar, percentage) {
    if (progressBar) {
      var percentageString = Math.floor(percentage * 100) + "%";
      progressBar.style.width = percentageString;
      progressBar.innerHTML = percentageString;
    }
  };

  // Order: consistent order on values as defined in the template.
  // The order will be the same on client, server, and analyst side.
  // Order:
  // 1. first tables data, then questions (if exist)
  // 2. tables come in the order they are defined in the template in.
  // 3. table is traversed by rows, then columns, in the order they are defined in the template in.
  // 4. questions come in the order they are defined in.
  // 5. for each question, the options come in the order they are defined in.
  // The returned object is formatted as follows:
  // {
  //   tables: [ { table: <first table name>, row: <first row key>, col: <first col key> }, ... ]
  //   questions: [ { question: <first question text>, option: <first option value> }, ... ]
  // }
  var consistentOrdering = function (table_template) {
    var tables = [];
    // const questions = new Map();
    var questions = [];
    var usability = [];
    var table_meta = {};

    table_meta.cohort_group_by =
      table_template.cohort_group_by == null
        ? ALL
        : table_template.cohort_group_by;

    var table_rows_count, table_cols_count;
    // order tables
    for (let i = 0; i < table_template.tables.length; i++) {
      let table_def = table_template.tables[i];
      if (table_def.submit === false) {
        continue;
      }

      let rows = table_def.rows;
      let cols = table_def.cols[table_def.cols.length - 1];
      table_rows_count = rows.length;
      table_cols_count = cols.length;
      let totalLength = table_rows_count * table_cols_count;
      let cohortLength = totalLength;
      if (table_meta.cohort_group_by !== ALL) {
        cohortLength =
          table_meta.cohort_group_by.length *
          Math.floor(totalLength / table_cols_count);
      }
      table_meta[table_def.name] = { total: totalLength, cohort: cohortLength };
      for (let r = 0; r < rows.length; r++) {
        for (let c = 0; c < cols.length; c++) {
          let row = rows[r].key;
          let col = cols[c].key;
          tables.push({
            table: table_def.name,
            row: row,
            col: col,
            op: table_def.operations,
            cohortOp: table_def.cohortOperations,
          });
        }
      }
    }

    // put ratios in, if any
    if (table_template.ratios != null) {
      for (let ratio of table_template.ratios) {
        let table_def = table_template.tables[ratio[0]];
        let table_name =
          table_template.tables[ratio[0]].name +
          " : " +
          table_template.tables[ratio[1]].name;

        let rows = table_def.rows;
        let cols = table_def.cols[table_def.cols.length - 1];
        let totalLength = table_rows_count * table_cols_count;
        let cohortLength = totalLength;
        if (table_meta.cohort_group_by !== ALL) {
          cohortLength =
            table_meta.cohort_group_by.length *
            Math.floor(totalLength / table_cols_count);
        }
        table_meta[table_name] = { total: totalLength, cohort: cohortLength };
        for (let r = 0; r < rows.length; r++) {
          for (let c = 0; c < cols.length; c++) {
            let row = rows[r].key;
            let col = cols[c].key;
            tables.push({
              table: table_name,
              row: row,
              col: col,
              op: table_def.operations,
              cohortOp: table_def.cohortOperations,
            });
          }
        }
      }
    }

    // order survey.js results
    if (table_template['survey'] != null) {
      const pages = table_template['survey'].pages;
      const getQuestions = (element) => {
        const elements = element.elements;

        for (let element of elements) {
          const question_text = element.title;
          const question_id = element.name;

          switch (element.type) {
            case "panel":
              getQuestions(element);
              break;
            case "radiogroup":
            case "checkbox": {
              const options = [];
              const choices = element.choices;
              const hasOther = element.hasOther === true;

              for (let choice of choices) {
                options.push({ value: choice.value, label: choice.text });
              }
              if (hasOther) {
                options.push({
                  value: String(options.length + 1),
                  label: element.otherText,
                });
              }

              const question = {
                question: question_text,
                id: question_id,
                type: element.type,
                hasOther: hasOther,
                items: options,
              };
              questions.push(question);

              break;
            }
            case "text": {
              let isNumber = element.inputType === "number";

              const question = {
                question: question_text,
                id: question_id,
                isNumber: isNumber,
                type: element.type,
                items: [{ label: question_text }],
              };
              if (question.id != 'password') {
                questions.push(question);
              }
              break;
            }
            case "multipletext": {
              const items = [];
              for (let item of element.items) {
                items.push({
                  label: item.title,
                  name: item.name,
                  isNumber: item.inputType === "number",
                });
              }

              const question = {
                question: question_text,
                id: question_id,
                type: element.type,
                items: items,
              };
              questions.push(question);
              break;
            }
            case "matrixdropdown": {
              const columns = element.columns;
              const sub_subquestions = [];
              for (let col of columns) {
                const title = col.title;
                const id = col.name;
                const type = col.cellType;
                const options = [];
                for (let choice of col.choices) {
                  options.push({ value: choice.value, label: choice.text });
                }
                const sub_subquestion = {
                  question: title,
                  id: id,
                  type: type,
                  items: options,
                };

                sub_subquestions.push(sub_subquestion);
              }

              const subquestions = [];
              const rows = element.rows;
              for (let i = 0; i < rows.length; i++) {
                const question_text = rows[i].text;
                const id = rows[i].value;
                const subquestion = {
                  question: question_text,
                  id: id,
                  items: sub_subquestions,
                };
                subquestions.push(subquestion);
              }

              const question = {
                question: question_text,
                id: question_id,
                type: element.type,
                items: subquestions,
              };
              questions.push(question);
              break;
            }
            case "matrix": {
              const options = [];
              for (let col of element.columns) {
                options.push({ value: col.value, label: col.text });
              }

              const subquestions = [];
              const rows = element.rows;
              for (let i = 0; i < rows.length; i++) {
                const question_text = rows[i].text;
                const id = rows[i].value;
                const subquestion = {
                  question: question_text,
                  id: id,
                  items: options,
                };
                subquestions.push(subquestion);
              }

              const question = {
                question: question_text,
                id: question_id,
                type: element.type,
                items: subquestions,
              };
              questions.push(question);
              break;
            }

            default:
              console.error("Unknown question type: ", element);
              break;
          }
        }
      };
      for (let page of pages) {
        getQuestions(page);
      }
    }

    // order usability metrics
    if (table_template.usability != null) {
      for (let m = 0; m < table_template.usability.length; m++) {
        let metric = table_template.usability[m];

        if (typeof metric === "string") {
          usability.push({ metric: metric, field: "" });
        } else if (typeof metric === "object") {
          let key = Object.keys(metric)[0];
          let arr = metric[key];
          for (let f = 0; f < arr.length; f++) {
            let field = arr[f];
            usability.push({ metric: key, field: field });
          }
        }
      }
    }

    return {
      tables,
      questions,
      usability,
      table_rows_count,
      table_cols_count,
      table_meta,
    };
  };

  // Get all the shares that a party have shared
  var getShares = function (jiff_instance, partyID, ordering) {
    var result = {
      shares: [],
      squares: [],
      lin_reg_products: [],
      questions: [],
      usability: [],
    };

    //find number of lin_reg_product pairs

    //loop through all the tables and count the number of lin_reg pairs
    var visited = {}; //keep track of which tables have already been counted
    lin_reg_products_num = 0;

    for (var i = 0; i < ordering.tables.length; i++) {
      var table = ordering.tables[i].table;
      if (visited[table.toString()] == null) {
        visited[table.toString()] = true;
        var op = ordering.tables[i].op;
        if (op["LIN"] != null) {
          lin_reg_products_num += op["LIN"].length;
        }
      }
    }

    question_length = 0;
    for (question of ordering.questions) {
      question_length += question.items.length;
    }

    for (
      var k = 0;
      k <
      2 * ordering.tables.length +
        lin_reg_products_num +
        question_length +
        ordering.usability.length;
      k++
    ) {
      var share = jiff_instance.share(null, null, [1, "s1"], [partyID])[
        partyID
      ];
      if (k < ordering.tables.length) {
        result.shares.push(share);
      } else if (k < 2 * ordering.tables.length) {
        result.squares.push(share);
      } else if (k < 2 * ordering.tables.length + lin_reg_products_num) {
        result.lin_reg_products.push(share);
      } else if (k < 2 * ordering.tables.length + question_length) {
        result.questions.push(share);
      } else {
        result.usability.push(share);
      }
    }
    return result;
  };

  // Sum the given two arrays of secret shares placing the result in the first array
  var sumAndAccumulate = function (accumulator, shares) {
    if (accumulator == null || accumulator.length === 0) {
      return shares.slice();
    }

    for (var i = 0; i < accumulator.length; i++) {
      accumulator[i] = accumulator[i].sadd(shares[i]);
    }
    return accumulator;
  };

  // Sum the given two shares
  var sumAndAccumulateSingleShares = function (accumulator, share) {
    if (accumulator == null || share == null) {
      return share;
    }
    return accumulator.sadd(share);
  };

  var multShareAndVector = function (share, vector) {
    if (share == null) {
      return vector;
    }

    for (var i = 0; i < vector.length; i++) {
      vector[i] = vector[i].smult(share);
    }
    return vector;
  };

  // Sum the given two arrays of secret shares, placing the result in the first array
  // This is for cohorts: the accumulator is only grouped by gender and level, while the input
  // array has all groupings.
  var sumAndAccumulateCohort = function (accumulator, shares, ordering) {
    if (accumulator == null) {
      accumulator = [];
    }

    for (var i = 0; i < shares.length; i++) {
      var row = Math.floor(i / ordering.table_cols_count);
      var colMod2 = (i % ordering.table_cols_count) % 2; // 0 => female, 1 => male
      var index = 2 * row + colMod2;
      if (accumulator[index]) {
        accumulator[index] = accumulator[index].sadd(shares[i]);
      } else {
        accumulator[index] = shares[i];
      }
    }

    return accumulator;
  };

  // Opens the shares corresponding to the logical slice results[rangeStart:rangeEnd) to the specified parties.
  // The slice is logical, no copies of arrays are created.
  // The returned result is a promise to an array of size (rangeEnd-rangeStart) containing
  // the opened results in order. Unless the caller is not specified as one of the result receiving parties
  // in which case the returned value is a promise to a bunch of nulls.
  // if rangeStart and/or rangeEnd is not provided, they default to 0 and length respectively.
  // Exceptions is a sorted array of positions to ignore, these positions are not opened, and instead
  // a value of '-' is returned for them. Exceptions defaults to [] if not provided.
  var openValues = function (
    jiff_instance,
    results,
    parties,
    rangeStart,
    rangeEnd
  ) {
    if (rangeStart == null) {
      rangeStart = 0;
    }
    if (rangeEnd == null) {
      rangeEnd = results.length;
    }
    var promises = [];
    // var exceptionsIndex = 0; // keeps track of the next exception, fast way to check set membership since both set and values are sorted
    for (var i = rangeStart; i < rangeEnd; i++) {
      var promise = jiff_instance.open(results[i], parties);
      promises.push(promise);
    }

    return Promise.all(promises);
  };

  // Returns a *sorted* array containing indices of cells which have number of employees lower than threshold
  var verifyThreshold = function (numberOfEmployees) {
    // unused
    var positions = [];
    for (var i = 0; i < numberOfEmployees.length; i++) {
      if (numberOfEmployees[i].lt(3)) {
        positions.push(i);
      }
    }
    return positions;
  };

  // Perform MPC computation for averages, deviations, questions, and usability
  var compute = async function (
    jiff_instance,
    submitters,
    ordering,
    table_template,
    progressBar
  ) {
    updateProgress(progressBar, 0);


    // Compute these entities in order
    var newShares,
      newShare,
      outputs,
      sums,
      squaresSums,
      productSums,
      questions = null,
      usability = null;

    // Temporary variables
    var cohort, i, p, shares;
    var promises = [];
    sums = { all: null }; // sums['all'] is for everyone, sums[<cohort>] is for <cohort> only
    squaresSums = { all: null };
    productSums = { all: null };


    outputs = {};

    for (output of table_template.computation.outputs) {
      outputs[output.name] = {}; // Setting up the map.  Results will be stored under the filter name, with "nofilter" as the default
    }

    newShares = {};

    indexMap = {};
    newVarIndexMap = {};

    let count=0;
    for (q of ordering.questions) {
      for (let i=0; i<q.items.length; i++) {
        if(indexMap[q.id] == undefined) {
          indexMap[q.id] = {};
        }
        indexMap[q.id][i+1] = count; // We are 1 indexing the values
        count = count+1;
      }
    }

    count=0;
    for (newVar of Object.keys(table_template.computation.newVariables)) {
      for (choice of table_template.computation.newVariables[newVar].choices) {
        if(newVarIndexMap[newVar] == undefined) {
          newVarIndexMap[newVar] = {};
        }
        newVarIndexMap[newVar][choice.value] = count;
        count = count+1;
      }
    }

    for (i = 0; i < submitters["all"].length; i++) {
      var partyID = submitters["all"][i];

      newShares[partyID] = [];

      shares = getShares(jiff_instance, partyID, ordering);

      // var j = 0;
      // for (i = 1; i < 40; i++) {
      //   openValues(jiff_instance, [shares.questions[i]], [1]).then( function (allpartyshares) {
      //     console.log("Opened " + (j++) + " shares: " + allpartyshares);
      //   });
      // }

      // return new Promise(function(){});

      // For each newVariable, we need to compute shares of the new variable, and append it to the shares that we have
      for (newVar of Object.keys(table_template.computation.newVariables)) {
        if (table_template.computation.newVariables[newVar].operation = "bin") {
          // We are binning existing answers together.  We know that only one of the answers will be set, so we can just use addition 
          // Iterate through all the possible values the newVar can take
          for (choice of table_template.computation.newVariables[newVar].choices) {
            newShare = null;
            // Iterate through all the things that are getting binned together and sum them together
            for (wayToGetThere of choice.waysToGetThere) {
              newShare = sumAndAccumulateSingleShares(newShare, shares.questions[indexMap[wayToGetThere.question][wayToGetThere.values]]);
            }
            // Append the share to the party's list of shares
            // let result = await openValues(jiff_instance, newShare, [1]);
            // console.log("Binning for "+ partyID + ":" + result);
            newShares[partyID].push(newShare);
          }
        }
      }

      for (output of table_template.computation.outputs) {

        if (output.function == "mean" || output.function == "radiogroupSum" || output.function == "checkboxSum") {
          for (j=0;j<output.inputQuestions.length;j++) {
            inputQuestion = output.inputQuestions[j];

            // Default nofilter option
            if (indexMap[inputQuestion] == undefined) { //We should try looking in the newVars instead
              outputs[output.name]["nofilter"] = sumAndAccumulate(outputs[output.name]["nofilter"], newShares[partyID].slice(newVarIndexMap[inputQuestion]['1'], newVarIndexMap[inputQuestion]['1'] + Object.keys(newVarIndexMap[inputQuestion]).length));
            } else {
              outputs[output.name]["nofilter"] = sumAndAccumulate(outputs[output.name]["nofilter"], shares.questions.slice(indexMap[inputQuestion]['1'], indexMap[inputQuestion]['1'] + Object.keys(indexMap[inputQuestion]).length));
            }

            // Iterate through the filters
            filteredData = {};
            for (filtername of output.filters) {
              var f = table_template.computation.filters[filtername];
              // Generate the filtered data 

              // First, pull out the shares for the filter
              if (filteredData[filtername] == undefined) {
                filterShares = [];
                if (indexMap[f.question] == undefined) { //We should try looking in the newVars instead
                  filterShares = shares.questions.slice(newVarIndexMap[f.question]['1'], newVarIndexMap[f.question]['1'] + Object.keys(newVarIndexMap[f.question]).length);
                } else {
                  filterShares = shares.questions.slice(indexMap[f.question]['1'], indexMap[f.question]['1'] + Object.keys(indexMap[f.question]).length);
                }

                // Next, pull out the shares of the input questions
                inputQuestionShares = [];
                if (indexMap[inputQuestion] == undefined) { //We should try looking in the newVars instead
                  inputQuestionShares = shares.questions.slice(newVarIndexMap[inputQuestion]['1'], newVarIndexMap[inputQuestion]['1'] + Object.keys(newVarIndexMap[inputQuestion]).length);
                } else {
                  inputQuestionShares = shares.questions.slice(indexMap[inputQuestion]['1'], indexMap[inputQuestion]['1'] + Object.keys(indexMap[inputQuestion]).length);
                }

                // Take the product 
                for(fShare of filterShares) {
                  filteredData[filtername] = multShareAndVector(fShare,inputQuestionShares);
                }
              }

              // Now do the actual accumulation into the outputs
              outputs[output.name][filtername] = sumAndAccumulate(outputs[output.name][f],filteredData[filtername]);
            }
          }
        }
      }
    }

    // Process shares from parties that do not belong to any cohort (their cohort has too few elements)
    var counter = 0;
    for (i = 0; i < submitters["none"].length; i++) {
      // Get all shares this party sent: values, squares of values, lin_reg products, questions, and usability.
      shares = getShares(jiff_instance, submitters["none"][i], ordering);

      // Sum all things
      sums["all"] = sumAndAccumulate(sums["all"], shares.shares);
      squaresSums["all"] = sumAndAccumulate(squaresSums["all"], shares.squares);
      productSums["all"] = sumAndAccumulate(
        productSums["all"],
        shares.lin_reg_products
      );
      questions = sumAndAccumulate(questions, shares.questions);
      usability = sumAndAccumulate(usability, shares.usability);

      // garbage
      shares = null;
      await usability[usability.length - 1].promise;

      // progress
      counter++;
      updateProgress(progressBar, (counter / submitters["all"].length) * 0.94);
    }

    // Compute all the results: computation proceeds by party in order
    // for (i = 0; i < submitters["cohorts"].length; i++) {
    //   cohort = submitters["cohorts"][i];

    //   for (p = 0; p < submitters[cohort].length; p++) {
    //     var partyID = submitters[cohort][p];

    //     // Get all shares this party sent: values, squares of values, questions, and usability.
    //     shares = getShares(jiff_instance, partyID, ordering);

    //     // Sum all things
    //     if (ordering.table_meta.cohort_group_by !== ALL) {
    //       sums[cohort] = sumAndAccumulateCohort(
    //         sums[cohort],
    //         shares.shares,
    //         ordering
    //       );
    //       squaresSums[cohort] = sumAndAccumulateCohort(
    //         squaresSums[cohort],
    //         shares.squares,
    //         ordering
    //       );
    //     } else {
    //       sums[cohort] = sumAndAccumulate(sums[cohort], shares.shares);
    //       squaresSums[cohort] = sumAndAccumulate(
    //         squaresSums[cohort],
    //         shares.squares
    //       );
    //     }
    //     sums["all"] = sumAndAccumulate(sums["all"], shares.shares);
    //     squaresSums["all"] = sumAndAccumulate(
    //       squaresSums["all"],
    //       shares.squares
    //     );
    //     productSums["all"] = sumAndAccumulate(
    //       productSums["all"],
    //       shares.lin_reg_products
    //     );
    //     questions = sumAndAccumulate(questions, shares.questions);
    //     usability = sumAndAccumulate(usability, shares.usability);

    //     // garbage
    //     shares = null;
    //     await usability[usability.length - 1].promise;

    //     // progress
    //     counter++;
    //     updateProgress(
    //       progressBar,
    //       (counter / submitters["all"].length) * 0.94
    //     );
    //   }

    //   // Cohort averages are done, open them (do not use await so that we do not block the main thread)
    //   var avgPromise = openValues(jiff_instance, sums[cohort], [1]);
    //   var squaresPromise = openValues(jiff_instance, squaresSums[cohort], [1]);
    //   promises.push(...[avgPromise, squaresPromise]);
    // }

    for (output of Object.keys(outputs)) {
      let result = await openValues(jiff_instance, outputs[output], [1]);
      console.log(""+ output+ ":" + result);
    }

    console.log("End");

    // sums["all"] = await openValues(jiff_instance, sums["all"], [1]);

    // // wait for cohort outputs
    // var cohortOutputs = await Promise.all(promises);
    // updateProgress(progressBar, 0.96);
    // for (i = 0; i < submitters["cohorts"].length * 2; i++) {
    //   // every 2 outputs belongs to same cohort - evens are sums; odds are square sums
    //   let idx = Math.floor(i / 2);
    //   console.log(idx, submitters["cohorts"][idx]);
    //   if (i % 2 === 0) {
    //     sums[submitters["cohorts"][idx]] = cohortOutputs[i];
    //   } else {
    //     squaresSums[submitters["cohorts"][idx]] = cohortOutputs[i];
    //   }
    // }

    // // Open all sumsm sums of squares and productSums
    // sums["all"] = await openValues(jiff_instance, sums["all"], [1]);
    // squaresSums["all"] = await openValues(jiff_instance, squaresSums["all"], [
    //   1,
    // ]);
    // productSums["all"] = await openValues(jiff_instance, productSums["all"], [
    //   1,
    // ]);
    // updateProgress(progressBar, 0.98);

    // // Open questions and usability
    // questions = await openValues(jiff_instance, questions, [1]);
    // usability = await openValues(jiff_instance, usability, [1]);
    // updateProgress(progressBar, 1);

    // Put results in object
    return {
      sums: sums,
      squaresSums: squaresSums,
      productSums: productSums,
      questions: questions,
      usability: usability,
    };
  };

  // Return format:
  // {
  //   averages: { <cohort number>: { table name: { table row: { table col: average } } }, ..., 'total': { same format but for all cohorts } }
  //   deviations: { 'all': { table_name: { table row: { table col: deviation ... } ... } ... } }  no cohort, object has results for all cohorts
  //   questions: { <cohort number>: { question text: { questions option: count } }, ..., 'total': { same format but for all cohorts } }
  //   usability: { metrics_object ...  no cohorts, the object is immediate for all cohorts }
  // }
  // Params:
  //    result: same result returned by compute()
  //    submitters: maps cohort ids (and 'all') to corresponding party ids
  //    ordering: result of consistentOrdering()
  var format = function (result, submitters, ordering) {
    var averages = {};
    var deviations = {};
    var linear_regressions = {};
    var questions = {};
    var usability = {};

    // Compute averages per cohort
    var cols = ordering.table_cols_count;
    for (var c = 0; c < submitters["cohorts"].length; c++) {
      var cohort = submitters["cohorts"][c];

      for (var i = 0; i < result.sums[cohort].length; i++) {
        var rowIndex =
          ordering.table_meta.cohort_group_by === ALL
            ? Math.floor(i / ordering.table_cols_count)
            : Math.floor(i / ordering.table_meta.cohort_group_by.length);
        var table = ordering.tables[rowIndex * cols].table;
        var row = ordering.tables[rowIndex * cols].row;
        var col = ordering.tables[rowIndex * cols].col;
        if (ordering.table_meta.cohort_group_by !== ALL) {
          col =
            ordering.table_meta.cohort_group_by[
              i % ordering.table_meta.cohort_group_by.length
            ]; // get right col label if grouping
        }
        var cohortOp = ordering.tables[rowIndex * cols].cohortOp;

        var cohortMean = result.sums[cohort][i];
        if (cohortOp[AVG] != null) {
          if (cohortOp[AVG] === SELF) {
            cohortMean = cohortMean.div(submitters[cohort].length);
          } else {
            let modVal = ordering.table_meta[cohortOp[AVG]].cohort;
            cohortMean = cohortMean.div(result.sums[cohort][i % modVal]);
          }
        }

        setOrAssign(averages, [cohort, table, row, col], cohortMean.toFixed(2));

        if (cohortOp[STD] != null) {
          // compute standard deviation among cohort
          // E[X^2]
          var avgOfSquares = result.squaresSums[cohort][i];
          avgOfSquares = avgOfSquares.div(submitters[cohort].length);
          // (E[X])^2
          var squareOfAvg = result.sums[cohort][i].div(
            submitters[cohort].length
          );
          squareOfAvg = squareOfAvg.pow(2);
          // deviation formula: E[X^2] - (E[X])^2
          var totalDeviation = avgOfSquares.minus(squareOfAvg);
          totalDeviation = totalDeviation.sqrt(); //sqrt

          setOrAssign(
            deviations,
            [cohort, table, row, col],
            totalDeviation.toFixed(2)
          );
        }
      }
    }

    //store the position of the variables for lin_reg
    positions = {};

    // Compute averages and deviations for all parties
    for (i = 0; i < ordering.tables.length; i++) {
      table = ordering.tables[i].table;
      row = ordering.tables[i].row;
      col = ordering.tables[i].col;
      var op = ordering.tables[i].op;

      if (op["LIN"] != null) {
        pairs = op["LIN"];

        //keep track of the positions of all the independent and dependent variables in the consistent ordering
        pairs.forEach(function (pair) {
          row_looking_ind = pair[0][0];
          col_looking_ind = pair[0][1];
          row_looking_dep = pair[1][0];
          col_looking_dep = pair[1][1];
          if (
            (row_looking_ind == row && col_looking_ind == col) ||
            (row_looking_dep == row && col_looking_dep == col)
          ) {
            if (positions[table] == null) {
              positions[table] = {};
            }
            temp_pair = pair[1];
            if (row_looking_ind == row && col_looking_ind == col) {
              temp_pair = pair[0];
            }
            positions[table][temp_pair.toString()] = i;
          }
        });
      }

      // Compute average
      var totalMean = result.sums["all"][i]; // mean for cell for ALL cohorts
      if (op[AVG] != null) {
        if (op[AVG] === SELF) {
          // if we're just averaging over the number of submitters
          totalMean = totalMean.div(submitters.all.length);
        } else {
          // if we're averaging over values in a different table
          let modVal = ordering.table_meta[op[AVG]].total;
          totalMean = totalMean.div(result.sums["all"][i % modVal]);
        }
      }

      setOrAssign(averages, ["all", table, row, col], totalMean.toFixed(2));

      if (op[STD] != null) {
        // Compute deviation for population of values presented by companies (not for individual employees)
        // E[X^2]
        avgOfSquares = result.squaresSums["all"][i];
        avgOfSquares = avgOfSquares.div(submitters["all"].length);
        // (E[X])^2
        squareOfAvg = result.sums["all"][i].div(submitters["all"].length);
        squareOfAvg = squareOfAvg.pow(2);
        // deviation formula: E[X^2] - (E[X])^2
        totalDeviation = avgOfSquares.minus(squareOfAvg);
        totalDeviation = totalDeviation.sqrt(); //sqrt

        setOrAssign(
          deviations,
          ["all", table, row, col],
          totalDeviation.toFixed(2)
        );
      }
    }

    //go table by table and do the linear regression for every table
    visited = {};
    for (i = 0; i < ordering.tables.length; i++) {
      var table = ordering.tables[i].table;
      var op = ordering.tables[i].op;
      if (visited[table] == null && op["LIN"] != null) {
        visited[table] = true;
        var sums = result.sums["all"];
        var squaresSums = result.squaresSums["all"];
        opPairs = op[LIN];

        var cnt = 0;

        opPairs.forEach(function (pair) {
          //the row and col of the independent variable
          ind_pair = pair[0];
          dep_pair = pair[1];

          var ind_position = positions[table][ind_pair.toString()];
          var dep_position = positions[table][dep_pair.toString()];

          var ind_sum = sums[ind_position]["c"];
          var dep_sum = sums[dep_position]["c"];

          var ind_sum_squared = squaresSums[ind_position]["c"];
          var dep_sum_squared = squaresSums[dep_position]["c"]; //not used

          var product_sum = result.productSums["all"][cnt]["c"];

          var num = submitters["all"].length;

          //slope formula (n * (∑xy) - (∑x)(∑y))/(n * (∑(x^2)) - (∑x)^2)
          slope =
            (num * product_sum - ind_sum * dep_sum) /
            (num * ind_sum_squared - ind_sum * ind_sum);

          //y-intercept formula ((∑y)-slope * (∑x))/n
          y_intercept = (dep_sum - slope * ind_sum) / num;

          if (linear_regressions["all"] == null) {
            linear_regressions["all"] = [];
          }

          linear_regressions["all"].push({
            table: table,
            independent: ind_pair,
            dependent: dep_pair,
            slope: slope,
            "y-intercept": y_intercept,
          });

          cnt += 1;
        });
      }
    }

    // format questions as questions[<cohort>][<question>][<option>] = count of parties that choose this option
    for (i = 0; i < ordering.questions.length; i++) {
      var question = ordering.questions[i].question; // question title
      var label = ordering.questions[i].label; // option label/title

      setOrAssign(questions, ["all", question, label], result.questions[i]);
    }

    // format usability as usability[<metric>][<field>] = value
    if (result.usability.length > 0) {
      for (i = 0; i < ordering.usability.length; i++) {
        var metric = ordering.usability[i].metric;
        var field = ordering.usability[i].field;
        var value = result.usability[i];
        setOrAssign(usability, [metric, field], value.toString());
      }
    }

    return {
      averages: averages,
      questions: questions,
      deviations: deviations,
      usability: usability,
      linearRegressions: linear_regressions,
      hasQuestions: ordering.questions.length > 0,
      hasUsability: ordering.usability.length > 0,
      cohorts: submitters,
    };
  };
  
  
  // Perform MPC computation for averages, deviations, questions, and usability
  var compute_kinan = async function (
    jiff_instance,
    submitters,
    ordering,
    table_template,
    progressBar
  ) {
    updateProgress(progressBar, 0);

    // Temporary variables
    var cohort, i, p, shares;
    var promises = [];
    var all_shares = [];

    // Get everyone's shares.
    for (var i = 0; i < submitters["all"].length; i++) {
      var partyID = submitters["all"][i];
      var shares = getShares(jiff_instance, partyID, ordering);
      all_shares.push(shares.questions);

      // Wait for all shares to be received.
      var promises = [];
      for (var share of shares.questions) {
        if (!share.ready)
          promises.push(share.value);
      }
      await Promise.all(promises);

      // Update progress bar.
      updateProgress(progressBar, ((i + 1) / submitters["all"].length) * 0.94);
      console.log("party", i);
    }

    // Add all shares element wise.
    var products = all_shares[0];
    for (var i = 1; i < all_shares.length; i++) {
      for (var j = 0; j < products.length; j++) {
        products[j] = products[j].smult(all_shares[i][j]);
      }
    }

    // reconstruct sum.
    var promises = [];
    for (var i = 0; i < products.length; i++) {
      var promise = jiff_instance.open(products[i], [1]);
      if (promise != null) {
        promises.push(promise);
      }
    }
    var values = await Promise.all(promises);
    var string_values = [];
    for (var val of values) {
      string_values.push(val.toString());
    }
    console.log('End result', string_values);
    updateProgress(progressBar, 1);

    // Put results in object
    return {
      sums: [],
      squaresSums: [],
      productSums: [],
      questions: [],
      usability: [],
    };
  };

  return {
    consistentOrdering: consistentOrdering,
    // TO GABE: return compute instead of compute_kinan.
    compute: compute_kinan,
    format: format,
  };
});
