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
  var getShares = async function (jiff_instance, partyID, ordering, server_mailbox_hook) {
    var result = {
      shares: [],
      squares: [],
      lin_reg_products: [],
      questions: [],
      usability: [],
    };

    //find number of lin_reg_product pairs
    if (server_mailbox_hook != null) {
      await server_mailbox_hook(partyID);
    }

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
      if(question.type == "matrix") {
        for(item of question.items){
          question_length += item.items.length +1 ; // +1 to record if the question was anwsered
        }
      } else if(question.type == "multipletext" || question.type == "text") {
       question_length += (2* question.items.length);
      } else if(question.type == "radiogroup" || question.type == "checkbox") {
       question_length += question.items.length+1;
      } else {
        console.log("question type not handled.  Please fix and try again");
      }
    }

    jiff_instance.start_barrier();

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

    await jiff_instance.end_barrier();
    console.log("Received shares for ", partyID);

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
    if (accumulator == null) {
      return share;
    }
    else if (share == null) {
      return accumulator;
    }
    return accumulator.sadd(share);
  };

  var multShareAndVector = function (share, vector) {
    if (share == null) {
      return vector;
    }

    toReturn = []
    for (var i = 0; i < vector.length; i++) {
      toReturn.push(vector[i].smult(share));
    }
    return toReturn;
  };

  var shareInRange = function (share, min, max) {
    if (share == null) {
      return share; //GABE TODO create new share of zero
    }

    lessThanMax = share.clteq(max); // TODO hand these max sizes of the value
    greaterThanMin = share.cgteq(min);

    return lessThanMax.smult(greaterThanMin);
  }

  var bitDecompInRanges = function(jiffClient, bitdecomp, min, max, overallmax) {
    if (bitdecomp == null) {
      return bitdecomp; //GABE TODO create new share of zero
    }

    let numbitsneeded = Math.ceil(Math.log2(overallmax))+1; //Math.ceil(Math.log2(overallmax))+1;

    lessThanMax = jiffClient.protocols.bits.clteq(bitdecomp.slice(0,numbitsneeded), max);

    // console.log("bits: " + bitdecomp.slice(0,numbitsneeded));
    // console.log(bitdecomp.slice(0,numbitsneeded));
    // console.log("numbitsneeded: " + numbitsneeded);
    // console.log("min: " + min);

    greaterThanMin = jiffClient.protocols.bits.cgteq(bitdecomp.slice(0,numbitsneeded), min);

    // console.log("lessThanMax.jiff: " + lessThanMax.jiff);
    // console.log("lessThanMax: " + lessThanMax);
    // console.log("greaterThanMin.jiff: " + greaterThanMin.jiff);
    // console.log("greaterThanMin : " + greaterThanMin)

    if(min <= 0) {
      return lessThanMax;
    } else {
      return lessThanMax.smult(greaterThanMin);
    }
  }

  var shareGreaterThanZero = function(share) {
    if (share == null) {
      return share; //GABE TODO create new share of zero
    }

    return share.cgteq(1);  // GABE TODO we could put an upper bound on this for efficiency?
  }

    var shareGreaterThanConstant = function(share, constant) {
    if (share == null) {
      return share; //GABE TODO create new share of zero
    }

    return share.cgteq(constant);  // GABE TODO we could put an upper bound on this for efficiency?
  }

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

  // Opens the shares corresponding to the logical slice results[rangeStart:rangeEnd) to the specified parties.
  // The slice is logical, no copies of arrays are created.
  // The returned result is a promise to an array of size (rangeEnd-rangeStart) containing
  // the opened results in order. Unless the caller is not specified as one of the result receiving parties
  // in which case the returned value is a promise to a bunch of nulls.
  // if rangeStart and/or rangeEnd is not provided, they default to 0 and length respectively.
  // Exceptions is a sorted array of positions to ignore, these positions are not opened, and instead
  // a value of '-' is returned for them. Exceptions defaults to [] if not provided.
  var openValuesWithLabel = function (
    jiff_instance,
    results,
    parties,
    label,
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
      var promise = jiff_instance.open(results[i], parties, label + "openValuesWithLabel" + i);
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
    progressBar,
    server_mailbox_hook
  ) {
    updateProgress(progressBar, 0);


    // Compute these entities in order
    var newShares,
      newShare,
      outputs,
      toEncrypt,
      sums,
      squaresSums,
      productSums,
      questions = null,
      usability = {};


    // Temporary variables
    var cohort, i, p, shares;
    var promises = [];
    sums = { all: null }; // sums['all'] is for everyone, sums[<cohort>] is for <cohort> only
    squaresSums = { all: null };
    productSums = { all: null };



    if (ordering.questions.length > 0 ) {

      outputs = {};
      toEncrypt = {}

      for (output of table_template.computation.outputs) {
        outputs[output.name] = {}; // Setting up the map.  Results will be stored under the filter name, with "nofilter" as the default
      }

      newShares = {};

      indexMap = {};

      let count=0;
      for (q of ordering.questions) {
        if(indexMap[q.id] == undefined) {
            indexMap[q.id] = {};
        }
        
        if (q.type == "radiogroup" || q.type == "checkbox") {
          indexMap[q.id]["first"] = count;
          indexMap[q.id]["answered"] = count;
          indexMap[q.id]["data"] = [];
          count = count+1; // The first bit is the indicator bit
          for (let i=0; i<q.items.length; i++) {
            indexMap[q.id][i+1] = count; // We are 1 indexing the values
            indexMap[q.id]["data"].push(count);
            count = count+1;
          }
          indexMap[q.id]["length"] = count-indexMap[q.id]["first"];
        }
        else if (q.type == "text") {
          indexMap[q.id]["first"] = count;
          indexMap[q.id]["answered"] = count;
          indexMap[q.id]["data"] = [];
          count = count+1; // The first bit is the indicator bit
          indexMap[q.id][1] = count; // We are 1 indexing the values
          indexMap[q.id]["data"].push(count);
          if (q.id != "question10" || table_template.name != "mmf-staff") { //TODO GABE THIS IS A HACK TO DEAL WITH A VERY SPECIFIC ERROR IN STAFF SURVEY
            count = count+1;
          }
          indexMap[q.id]["length"] = count-indexMap[q.id]["first"];
        }
        else if (q.type == "multipletext") {
          indexMap[q.id]["first"] = count;
          indexMap[q.id]["data"] = [];
          for (let i=0; i<q.items.length; i++) {
            indexMap[q.id]["answered" + (i+1)] = count;
            count = count+1;
            indexMap[q.id][i+1] = count; // We are 1 indexing the values
            indexMap[q.id]["data"].push(count);
            if (q.id != "question6" || table_template.name != "mmf-director") { //TODO GABE THIS IS A HACK TO DEAL WITH A VERY SPECIFIC ERROR IN STAFF SURVEY
              count = count+1;
            }
          }
          indexMap[q.id]["length"] = count-indexMap[q.id]["first"];
        }
        else if (q.type == "matrix") {
          indexMap[q.id]["first"] = count;
          indexMap[q.id]["data"] = [];
          // TODO GABE THIS IS PROB BROKEN
          for (let i=0; i<q.items.length; i++) {
            indexMap[q.id]["answered" + (i+1)] = count;
            count = count+1;
            for (let j=0; j<q.items[i].items.length; j++) {
              indexMap[q.id][(i*q.items[i].items.length)+j+1] = count; // We are 1 indexing the values
              indexMap[q.id]["data"].push(count);
              count = count+1;
            }
          }
          indexMap[q.id]["length"] = count-indexMap[q.id]["first"];
        }
      }

      // console.log(ordering.questions);
      // console.log(indexMap);


      // for (i = 0; i < submitters["all"].length; i++) {
      //   var partyID = submitters["all"][i];
      //   shares = await getShares(jiff_instance, partyID, ordering, server_mailbox_hook);
      //   let result = await openValues(jiff_instance, shares.questions, [1]);
      //   console.log("Opening shares for party "+ partyID+ ": " + result.toString());
      // }


      // var bigtestarray = submitters["all"];

      // bigtestarray.concat(bigtestarray).concat(bigtestarray).concat(bigtestarray).concat(bigtestarray);

      // for (i = 0; i < 3; i++) { // TODO GABE THIS IS A HACK
      for (i = 0; i < submitters["all"].length; i++) {
      // for (i = 0; i < bigtestarray.length; i++) {
        var partyID = submitters["all"][i];
        // var partyID = bigtestarray[i];

        // newShares[partyID] = [];
        newShares[partyID] = {};
        for(newVar of Object.keys(table_template.computation.newVariables)) {
          newShares[partyID][newVar] = [];
        }
        // jiff_instance.start_barrier();
        shares = await getShares(jiff_instance, partyID, ordering, server_mailbox_hook);
        // await jiff_instance.end_barrier(); // Add a manual sync to make sure we don't get too far ahead of ourselves in the first iteration

        // jiff_instance.start_barrier();
        // let result = await openValues(jiff_instance, shares.questions, [1]);
        // console.log("Opening shares for party "+ partyID+ ": " + result.toString());


        // For each newVariable, we need to compute shares of the new variable, and append it to the shares that we have
        // jiff_instance.start_barrier();
        for (newVar of Object.keys(table_template.computation.newVariables).sort()) { //GABE TODO THINK ABOUT ORDERING.  SORT FIRST?
          jiff_instance.start_barrier();
          console.log("Computing " + newVar + " for " + partyID);
          if (table_template.computation.newVariables[newVar].function == "checkboxBin") {
            // We are binning existing answers together.  We know that only one of the answers will be set, so we can just use addition 
            // Iterate through all the possible values the newVar can take
            for (choice of table_template.computation.newVariables[newVar].choices) {
              newShare = null;
              // Iterate through all the things that are getting binned together and sum them together
              for (wayToGetThere of choice.waysToGetThere) {
                if(indexMap[wayToGetThere.question] == undefined){
                  newShare = sumAndAccumulateSingleShares(newShare, newShares[partyID][wayToGetThere.question][wayToGetThere.values-1]); //-1 is because the data is 0 indexed but values are 1 indexed
                } else {
                  newShare = sumAndAccumulateSingleShares(newShare, shares.questions[indexMap[wayToGetThere.question][wayToGetThere.values]]);
                }
              }

              // We only do this when its a checkbox and there was more than one way to get there
              if (choice.waysToGetThere.length > 1) {
                newShare = shareGreaterThanZero(newShare);
              }

              newShares[partyID][newVar].push(newShare);
            }
            // let binResult = await openValues(jiff_instance, newShares[partyID][newVar], [1]);
            // console.log("Binning for "+ partyID + " ("+ newVar + "):" + binResult);
          }
          else if (table_template.computation.newVariables[newVar].function == "radiogroupBin") {
            // We are binning existing answers together.  We know that only one of the answers will be set, so we can just use addition 
            // Iterate through all the possible values the newVar can take
            for (choice of table_template.computation.newVariables[newVar].choices) {
              newShare = null;
              // Iterate through all the things that are getting binned together and sum them together
              for (wayToGetThere of choice.waysToGetThere) {
                if(indexMap[wayToGetThere.question] == undefined){
                  newShare = sumAndAccumulateSingleShares(newShare, newShares[partyID][wayToGetThere.question][wayToGetThere.values-1]); //-1 is because the data is 0 indexed but values are 1 indexed
                } else {
                  newShare = sumAndAccumulateSingleShares(newShare, shares.questions[indexMap[wayToGetThere.question][wayToGetThere.values]]);
                }
              }
              newShares[partyID][newVar].push(newShare);
            }
            // let binResult = await openValues(jiff_instance, newShares[partyID][newVar], [1]);
            // console.log("Binning for "+ partyID + " ("+ newVar + "):" + binResult);
          }
          else if (table_template.computation.newVariables[newVar].function == "numericBin") {
            // OPTIMIZATION we are making the optimization that all of the choices and ways to get there are the same input share
            let bit_decomp_of_input_share = null;
            for (choice of table_template.computation.newVariables[newVar].choices) {
              newShare = null;

              for (wayToGetThere of choice.waysToGetThere) {
                if (bit_decomp_of_input_share == null) {
                  if ( indexMap[wayToGetThere.question] == undefined ) {
                    bit_decomp_of_input_share = newShares[partyID][wayToGetThere.question][wayToGetThere.value].bit_decomposition();
                    // newShare = shareInRange(newShares[partyID][wayToGetThere.question][wayToGetThere.value], wayToGetThere.minValue, wayToGetThere.maxValue);
                    // let numericBinInput = await openValues(jiff_instance, [newShares[partyID][wayToGetThere.question][wayToGetThere.value]], [1]);
                    // console.log("Binning for "+ partyID + " ("+ newVar + ") Value:" + numericBinInput);
                  } else {
                    bit_decomp_of_input_share = shares.questions[indexMap[wayToGetThere.question][wayToGetThere.value]].bit_decomposition();
                    // newShare = shareInRange(shares.questions[indexMap[wayToGetThere.question][wayToGetThere.value]], wayToGetThere.minValue, wayToGetThere.maxValue);
                    // let numericBinInput = await openValues(jiff_instance, [shares.questions[indexMap[wayToGetThere.question][wayToGetThere.value]]], [1]);
                    // console.log("Binning for "+ partyID + " ("+ newVar + ") Value( index="+indexMap[wayToGetThere.question][wayToGetThere.value]+"):" + numericBinInput);
                  }
                }
                // OPTIMIZATION there's only 1 way to get there for all our current things.
                newShare = bitDecompInRanges(jiff_instance, bit_decomp_of_input_share, wayToGetThere.minValue, wayToGetThere.maxValue, table_template.computation.newVariables[newVar].maxValue);
              }
              newShares[partyID][newVar].push(newShare);
            }
            // let numericBinResult = await openValues(jiff_instance, newShares[partyID][newVar], [1]);
            // console.log("Binning for "+ partyID + " ("+ newVar + "):" + numericBinResult);
          }
          else if (table_template.computation.newVariables[newVar].function == "threshold") {
            for (choice of table_template.computation.newVariables[newVar].choices) {
              newShare = null;

              for (input of choice.inputs) {
                if (indexMap[input.question]==undefined) {
                  newShare = sumAndAccumulateSingleShares(newShare, newShares[partyID][input.question][input.values-1]); // the -1 is because we are 1 index-ing values, but 0 index-ing arrays
                } else {
                  newShare = sumAndAccumulateSingleShares(newShare, shares.questions[indexMap[input.question][input.values]]);
                }
              }
              // var resultSumNewShare = await openValues(jiff_instance, [newShare], [1]);
              // console.log("PartyID "+ partyID+  "--ThresholdSum: " + resultSumNewShare.toString());
              newShare = shareGreaterThanConstant(newShare,choice.threshold);
              // var resultSumNewShareGreatThanConstant = await openValues(jiff_instance, [newShare], [1]);
              // console.log("PartyID "+ partyID+ "--ThresholdGreatThanConstant: " + resultSumNewShareGreatThanConstant.toString());

              newShares[partyID][newVar].push(newShare);
            }
            // var thresholdingVar = await openValues(jiff_instance, newShares[partyID][newVar], [1]);
            // console.log("Thresholding for "+ partyID+ "--ThresholdGreatThanConstant ("+ newVar +") : " + thresholdingVar.toString());
          }
          else if (table_template.computation.newVariables[newVar].function == "scalarVectorMultiplication") {
            var scalarToMultiply = null;
            if(indexMap[table_template.computation.newVariables[newVar].scalar] == undefined) { //We should try looking in the newVars instead
              scalarToMultiply = newShares[partyID][table_template.computation.newVariables[newVar].scalar];
            } else {
              scalarToMultiply = shares.questions[indexMap[table_template.computation.newVariables[newVar].scalar]['first']];
            }

            var vectorToMultiply = null;
            if(indexMap[table_template.computation.newVariables[newVar].vector] == undefined) { //We should try looking in the newVars instead
              vectorToMultiply = newShares[partyID][table_template.computation.newVariables[newVar].vector];
            } else {
              vectorToMultiply = shares.questions.slice(
                indexMap[table_template.computation.newVariables[newVar].vector]['first'], 
                indexMap[table_template.computation.newVariables[newVar].vector]['first'] + indexMap[table_template.computation.newVariables[newVar].vector]['length']
                );
            }
            // shares.questions.slice(indexMap[inputQuestion]['first'], indexMap[inputQuestion]['first'] + indexMap[inputQuestion]['length']);
            newShares[partyID][newVar].push(multShareAndVector(scalarToMultiply,vectorToMultiply));
          }
          else if (table_template.computation.newVariables[newVar].function == "linearcombinationMultipletext") {
            newShare = null;

            for (input of table_template.computation.newVariables[newVar].inputs) {
              // OPTIMIZATION This should be unreachable.  If you get this PANIC!  You probably are taking in a newVar here, but this is only for multipleText which is a artifact of the survey format
              if(indexMap[input.question][input.value] == undefined) {
                console.log("SOMETHING HAS GONE TERRIBLY WRONG.  PLEASE DOUBLE CHECK THE JSON FILE.")
              } 
              else {
                // let linearCombinationMultipleTextTest = await openValues(jiff_instance, [shares.questions[indexMap[input.question][input.value]],shares.questions[indexMap[input.question][input.value]].cmult(input.coefficient)], [1]);
                // console.log("PartyID "+ partyID+ "--linearcombinationMultipletext(orig,mult): " + linearCombinationMultipleTextTest.toString());
                newShare = sumAndAccumulateSingleShares(newShare, shares.questions[indexMap[input.question][input.value]].cmult(input.coefficient) );
              }
            }
            newShares[partyID][newVar].push(newShare);
            // let linearCombinationMultipleTextFullShareTest = await openValues(jiff_instance, [newShare], [1]);
            // console.log("PartyID "+ partyID+ "--linearcombinationMultipletext(result): " + linearCombinationMultipleTextFullShareTest.toString());
          }
          else if (table_template.computation.newVariables[newVar].function == "linearcombination") {
            newShare = null;

            for (input of table_template.computation.newVariables[newVar].inputs) {
              if(indexMap[input.question][input.value] == undefined) {
                console.log("SOMETHING HAS GONE TERRIBLY WRONG.  PLEASE DOUBLE CHECK THE JSON FILE.")
              } 
              else {
                newShare = sumAndAccumulateSingleShares(newShare, shares.questions[indexMap[input.question][input.value]].cmult(input.coefficient) );
              }
            }
            newShares[partyID][newVar].push(newShare);
          }
          await jiff_instance.end_barrier();
        }
        // await jiff_instance.end_barrier(); // Add a manual sync to make sure we don't get too far ahead of ourselves in the first iteration

        // Look up the tags associated with this submitter
        let partyTags = [];
        for (cohort of Object.keys(submitters.cohorts).sort()) {
          if (submitters.cohorts[cohort].includes(partyID)) {
            console.log("" + partyID + " is in cohort " + cohort + " (name: + " + table_template.cohorts[cohort-1].name +") ");
            partyTags = table_template.cohorts[cohort-1].tags;
          }
        }


        jiff_instance.start_barrier();
        for (output of table_template.computation.outputs) {
          if(output.timing != "perRespondentProcessing") {
            continue;
          }
          // jiff_instance.start_barrier();
          console.log("Computing " + output.name + " for " + partyID);


          if (output.function == "mean" || output.function == "radiogroupSum" || output.function == "checkboxSum" || output.function == "sum" || output.function == "matrixSum" || output.function == "multipletextSum") {

            for (j=0;j<output.inputQuestions.length;j++) {
              inputQuestion = output.inputQuestions[j];

              // Default nofilter option
              if (indexMap[inputQuestion] == undefined) { //We should try looking in the newVars instead
                outputs[output.name]["nofilter"] = sumAndAccumulate(outputs[output.name]["nofilter"], newShares[partyID][inputQuestion]);

                // Also accumulate into all the relevant tags
                for ( tag of output.outputParties.tags ) {
                  if (outputs[output.name]["tags"] == undefined) {
                    outputs[output.name]["tags"] = {};
                  }
                  if (partyTags.includes(tag)) {
                    outputs[output.name]["tags"][tag] = sumAndAccumulate(outputs[output.name]["tags"][tag], newShares[partyID][inputQuestion]);
                  }
                  // toEncrypt[output.name][tag]["nofilter"] = sumAndAccumulate(toEncrypt[output.name][tag]["nofilter"], newShares[partyID][inputQuestion]);
                }

                //Find the appropriate cohort for this party and accumulate into their results
                if (output.outputParties.cohort=="true") {
                  
                  // WE MAKE THE ASSUMPTION THAT EACH USER IS IN EXACTLY ONE 
                  for (cohort of Object.keys(submitters.cohorts)) {
                    if (submitters.cohorts[cohort].includes(partyID)) {

                      if (toEncrypt[output.name] == undefined) {
                        toEncrypt[output.name] = {};
                      }
                      if (toEncrypt[output.name][cohort] == undefined) {
                        toEncrypt[output.name][cohort] = {};
                      }

                      toEncrypt[output.name][cohort]["nofilter"] = sumAndAccumulate(toEncrypt[output.name][cohort]["nofilter"], newShares[partyID][inputQuestion]);
                    }
                  }
                }

              } else {
                outputs[output.name]["nofilter"] = sumAndAccumulate(outputs[output.name]["nofilter"], shares.questions.slice(indexMap[inputQuestion]['first'], indexMap[inputQuestion]['first'] + indexMap[inputQuestion]['length']));

                // Also accumulate into all the relevant tags
                for ( tag of output.outputParties.tags ) {
                  if (outputs[output.name]["tags"] == undefined) {
                    outputs[output.name]["tags"] = {};
                  }
                  if (partyTags.includes(tag)) {
                    outputs[output.name]["tags"][tag] = sumAndAccumulate(outputs[output.name]["tags"][tag], shares.questions.slice(indexMap[inputQuestion]['first'], indexMap[inputQuestion]['first'] + indexMap[inputQuestion]['length']));
                  }
                  // toEncrypt[output.name][tag]["nofilter"] = sumAndAccumulate(toEncrypt[output.name][tag]["nofilter"], shares.questions.slice(indexMap[inputQuestion]['first'], indexMap[inputQuestion]['first'] + indexMap[inputQuestion]['length']));
                }

                //Find the appropriate cohort for this party and accumulate into their results
                if (output.outputParties.cohort=="true") {
                  // WE MAKE THE ASSUMPTION THAT EACH USER IS IN EXACTLY ONE 
                  for (cohort of Object.keys(submitters.cohorts)) {
                    if (submitters.cohorts[cohort].includes(partyID)) {

                      if (toEncrypt[output.name] == undefined) {
                        toEncrypt[output.name] = {};
                      }
                      if (toEncrypt[output.name][cohort] == undefined) {
                        toEncrypt[output.name][cohort] = {};
                      }
                         
                      toEncrypt[output.name][cohort]["nofilter"] = sumAndAccumulate(toEncrypt[output.name][cohort]["nofilter"], shares.questions.slice(indexMap[inputQuestion]['first'], indexMap[inputQuestion]['first'] + indexMap[inputQuestion]['length']));
                    }
                  }
                }

              }

              // Iterate through the filters
              filteredData = {};
              for (filtername of output.filters) {
                var filter = table_template.computation.filters[filtername];
                // Generate the filtered data 

                if (filteredData[filtername] == undefined) {
                  filterShares = [];

                  // First, pull out the shares for the filter
                  if (indexMap[filter.question] == undefined) { //We should try looking in the newVars instead
                    filterShares = newShares[partyID][filter.question]; //newShares[partyID].slice(newVarIndexMap[filter.question]['1'], newVarIndexMap[filter.question]['1'] + Object.keys(newVarIndexMap[filter.question]).length);
                  } else {
                    // Pull out all the shares that represent real data (aka ignore the "answered" bits)
                    for (index of indexMap[filter.question]['data']) {
                      filterShares.push(shares.questions[index]);
                    }
                  }

                  // resulttwo = await openValues(jiff_instance, filterShares, [1]);
                  // console.log("PartyID "+ partyID+ "--" + filtername + "--filterShares: " + resulttwo.toString());


                  // Next, pull out the shares of the input questions
                  inputQuestionShares = [];
                  if (indexMap[inputQuestion] == undefined) { //We should try looking in the newVars instead
                    inputQuestionShares = newShares[partyID][inputQuestion]; //newShares[partyID].slice(newVarIndexMap[inputQuestion]['1'], newVarIndexMap[inputQuestion]['1'] + Object.keys(newVarIndexMap[inputQuestion]).length);
                  } else {
                    // Pull the entire vector 
                    inputQuestionShares = shares.questions.slice(indexMap[inputQuestion]['first'], indexMap[inputQuestion]['first'] + indexMap[inputQuestion]['length']);
                  }

                  if (filteredData[filtername] == undefined) {
                    filteredData[filtername] = {};
                  }

                  // Take the product 
                  for (let shareIndex=0; shareIndex<filterShares.length; shareIndex++) {
                    filteredData[filtername][shareIndex+1] = multShareAndVector(filterShares[shareIndex],inputQuestionShares);
                  }
                }

                // Now do the actual accumulation into the outputs
                if (outputs[output.name][filtername] == undefined) {
                  outputs[output.name][filtername] = {};
                }
                for (let shareIndex=1; shareIndex<=filterShares.length;shareIndex++) {
                  outputs[output.name][filtername][shareIndex] = sumAndAccumulate(outputs[output.name][filtername][shareIndex],filteredData[filtername][shareIndex]);

                  // Below is code to accumulate filtered data into tags and cohorts, which I dont think we are planning on doing.

                  // Also accumulate into all the relevant tags
                  // for ( tag of output.outputParties.tags ) {
                  //   if (outputs[output.name][tag] == undefined) {
                  //     outputs[output.name][tag] = {};
                  //     outputs[output.name][tag][filtername] = {};
                  //   }
                  //   outputs[output.name][tag][filtername][shareIndex] = sumAndAccumulate(outputs[output.name][filtername][shareIndex],filteredData[filtername][shareIndex]);
                  // }

                  // Find the appropriate cohort for this party and accumulate into their results
                  if (output.outputParties.cohort=="true") {
                    for (cohort of Object.keys(submitters.cohorts).sort()) {
                      if (submitters.cohorts[cohort].includes(partyID)) {

                        if (toEncrypt[output.name][cohort] == undefined) {
                          toEncrypt[output.name][cohort][filtername] = {};
                        }

                        if (toEncrypt[output.name][cohort][filtername] == undefined) {
                          toEncrypt[output.name][cohort][filtername] = {};
                        }
                        for (let shareIndex=1; shareIndex<=filterShares.length;shareIndex++) {
                          toEncrypt[output.name][cohort][filtername][shareIndex] = sumAndAccumulate(toEncrypt[output.name][cohort][filtername][shareIndex],filteredData[filtername][shareIndex]);
                        }
                        // toEncrypt[output.name][cohort][filtername][shareIndex] = sumAndAccumulate(toEncrypt[output.name][filtername][shareIndex],filteredData[filtername][shareIndex]);
                      }
                    }
                  }   
                }
              }
            }
          }
          // await jiff_instance.end_barrier();
        }

        // Process the tables. 
        await jiff_instance.end_barrier(); // Add a manual sync to make sure we don't get too far ahead of ourselves in the first iteration
        updateProgress(progressBar, (.95*i)/submitters["all"].length);   
        newShares[partyID] = null; 
        shares = null;  
      }
    }

    // var postprocessing_counter = 0;
    // var number_of_post_processing_ops_performed = 0;

    // do {

    //   postprocessing_counter = postprocessing_counter + 1;
    //   number_of_post_processing_ops_performed = 0;
    //   postprocessing_iteration = "postprocessing" + postprocessing_counter;


    //   // Now we iterate through the list of postprocessing steps until there are no layers left
    //   for (output of table_template.computation.outputs) {
    //     if(output.timing != postprocessing_iteration) {
    //       continue;
    //     }


    if (ordering.tables.length > 0 ) {
      for (i = 0; i < submitters["all"].length; i++) {
        var partyID = submitters["all"][i];

        jiff_instance.start_barrier();

        shares = await getShares(jiff_instance, partyID, ordering, server_mailbox_hook);

        // let result = await openValues(jiff_instance, shares.shares.slice(0,25), [1]);
        // let result = await openValuesWithLabel(jiff_instance, shares.shares, [1], "openSharesForParty" + partyID);
        // console.log("Opening shares for party "+ partyID+ ": " + result.toString());

        sums['all'] = sumAndAccumulate(sums['all'], shares.shares);
        squaresSums['all'] = sumAndAccumulate(squaresSums['all'], shares.squares);

        await jiff_instance.end_barrier(); // Add a manual sync to make sure we don't get too far ahead of ourselves in the first iteration

        updateProgress(progressBar, (.95*i)/submitters["all"].length);      


        // let resulttwo = await openValues(jiff_instance,  sums['all'].slice(0,25), [1]);
        // let resulttwo = await openValuesWithLabel(jiff_instance,  sums['all'], [1], "openSharesPostAccumulation" + partyID);
        // console.log("Opening Aggregation after party "+ partyID+ ": " + resulttwo.toString());
      }

      sums['all'] = await openValues(jiff_instance, sums['all'], [1]);
      squaresSums['all'] = await openValues(jiff_instance, squaresSums['all'], [1]);
      // console.log("Sums: " + sums['all'].toString());

    }




    //   }



    // } while(number_of_post_processing_ops_performed>0);


    // for (output of table_template.computation.outputs) {
    //   if(output.timing != "postAccumulation") {
    //     continue;
    //   }

    //   if(output.function == "linearcombination") {
    //     
    //   }


    // }

    var opened_outputs = {};


    if (ordering.questions.length > 0 ) {

      //Opening and populating the opened_outputs object
      for (output of Object.keys(outputs).sort()) {
        if(opened_outputs[output] == undefined) {
          opened_outputs[output] = {};
        }
        for(filter of Object.keys(outputs[output]).sort()) { // uhoh todo
          if(filter == "nofilter") {
            let result = await openValues(jiff_instance, outputs[output][filter], [1]);
            opened_outputs[output][filter] = result;
            console.log(""+ output+ "--" + filter + ": " + result.toString());
          } else if (filter == "tags") {
            if (opened_outputs[output][filter] == undefined) {
              opened_outputs[output][filter] = {};
            }
            for(tag of Object.keys(outputs[output][filter]).sort()) {
              let result = await openValues(jiff_instance, outputs[output][filter][tag], [1]);
              opened_outputs[output][filter][tag] = result;
              console.log(""+ output+ "--" + filter + "--"+ tag +": " + result.toString());
            }
          } else {
            opened_outputs[output][filter] = {};
            for(opt of Object.keys(outputs[output][filter]).sort()) {
              let result = await openValues(jiff_instance, outputs[output][filter][opt], [1]);
              opened_outputs[output][filter][opt] = result;
              console.log(""+ output+ "--" + filter + "--"+ opt +": " + result.toString());
            }
          }
        }
      }
    }

    // for (output of table_template.computation.outputs) {
    //   if(output.timing != "afterOpening") {
    //     continue;
    //   }

    //   if(output.function == "linearcombination") {
    //     // TODO GABE THIS IS FOR SURE BROKEN
    //     for(filter of output.filters) {
    //       result = 0;
    //       for(coef of coefficients) {
    //         result = result + coef.coefficient * opened_outputs[question][values];
    //       }
    //       opened_outputs[output.name][filter][values] = result;
    //     }
    //   }
    // }

// TODO we need to await all the promises to be ready, otherwise we are in trouble.

    var stringShares = {};

    if (ordering.questions.length > 0 ) {

      for (outputs of Object.keys(toEncrypt).sort()) {
        stringShares[outputs] = {};
        for (cohort of Object.keys(toEncrypt[outputs]).sort()) {
          stringShares[outputs][cohort] = {};
          for (filter of Object.keys(toEncrypt[outputs][cohort]).sort()) {
            if(filter == "nofilter") {
              stringShares[outputs][cohort][filter] = [];
              for (share of toEncrypt[outputs][cohort][filter]){
                stringShares[outputs][cohort][filter].push(share.toString());
              }
            } else {
              stringShares[outputs][cohort][filter] = {};
              for(opt of Object.keys(toEncrypt[outputs][cohort][filter]).sort()) {
                stringShares[outputs][cohort][filter][opt] = [];
                for (share of toEncrypt[outputs][cohort][filter][opt]){
                  stringShares[outputs][cohort][filter][opt].push(share.toString());
                }
              }
            }
          }
        }
      }
    }

    updateProgress(progressBar, 1);

    // console.log("stringShares");

    // for (outputs of Object.keys(stringShares).sort()) {
    //   for (cohort of Object.keys(stringShares[outputs]).sort()) {
    //     for (filt of Object.keys(stringShares[outputs][cohort]).sort()) {
    //       console.log(""+ outputs + "--" + cohort + "--" +filt + ": " + stringShares[outputs][cohort][filt].toString());
    //     }
    //   }
    // }

    // console.log(stringShares);

    console.log("End Computation");

    // Put results in object
    return {
      sums: sums,
      squaresSums: squaresSums,
      productSums: productSums,
      questions: opened_outputs,
      usability: usability,
      shares:stringShares,
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
    progressBar,
    server_mailbox_hook
  ) {
    updateProgress(progressBar, 0);

    // Temporary variables
    var cohort, i, p, shares;
    var promises = [];
    var all_shares = [];



    // Get everyone's shares.
    for (var i = 0; i < submitters["all"].length; i++) {
      var partyID = submitters["all"][i];
      var shares = await getShares(jiff_instance, partyID, ordering, server_mailbox_hook);
      all_shares.push(shares.questions);

      // Update progress bar.
      updateProgress(progressBar, ((i + 1) / submitters["all"].length) * 0.94);
      console.log("party", i);
      
      await new Promise(resolve => { setTimeout(resolve, 5000); });
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
    // compute: compute_kinan,
    compute: compute,
    format: format,
  };
});
