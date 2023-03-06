if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    computation: {
      newVariables: {
        "newVar_001_MonthsWorkedInMusems": {
          function: "linearcombinationMultipletext",
          resultType: "numeric",
          inputs: [
            {
              question: "question1",
              value: "1",
              coefficient: 12,
            },
            {
              question: "question1",
              value: "2",
              coefficient: 1,
            },
          ],
        },
        "newVar_002_MonthsWorkedInMuseumsBinned": {
          function: "numericBin",
          resultType: "radiogroup",
          maxValue: 1200,
          minValue: 0,
          choices: [
            {
              value: "1",
              waysToGetThere: 
              [
                {
                  question: "newVar_001_MonthsWorkedInMusems",
                  value: "0",
                  name: "<1",
                  minValue : 0,
                  maxValue : 11,
                },
              ]
            },
            {
              value: "2",
              waysToGetThere: 
              [
                {
                  question: "newVar_001_MonthsWorkedInMusems",
                  value: "0",
                  name: "1-3",
                  minValue : 12,
                  maxValue : 35,
                },
              ]
            },
            {
              value: "3",
              waysToGetThere: 
              [
                {
                  question: "newVar_001_MonthsWorkedInMusems",
                  value: "0",
                  name: "4-6",
                  minValue : 36,
                  maxValue : 71,
                },
              ]
            },
            {
              value: "4",
              waysToGetThere: 
              [
                {
                  question: "newVar_001_MonthsWorkedInMusems",
                  value: "0",
                  name: "7-10",
                  minValue : 72,
                  maxValue : 119,
                },
              ]
            },
            {
              value: "5",
              waysToGetThere: 
              [
                {
                  question: "newVar_001_MonthsWorkedInMusems",
                  value: "0",
                  name: "10-20",
                  minValue : 120,
                  maxValue : 239,
                },
              ]
            },
            {
              value: "6",
              waysToGetThere: 
              [
                {
                  question: "newVar_001_MonthsWorkedInMusems",
                  value: "0",
                  name: "20+",
                  minValue : 240,
                  maxValue : 1200,
                },
              ]
            },
          ]
        },
        "newVar_003_MonthsWorkedInCurrentMuseum": {
          function: "linearcombinationMultipletext",
          resultType: "numeric",
          inputs: [
            {
              question: "question2",
              value: "1",
              coefficient: 12,
            },
            {
              question: "question2",
              value: "2",
              coefficient: 1,
            },
          ],
        },
        "newVar_004_MonthsWorkedInCurrentMuseumBinned": {
          function: "numericBin",
          resultType: "radiogroup",
          maxValue: 1200,
          minValue: 0,
          choices: [
            {
              value: "1",
              waysToGetThere: 
              [
                {
                  question: "newVar_003_MonthsWorkedInCurrentMuseum",
                  value: "0",
                  name: "<1",
                  minValue : 0,
                  maxValue : 11,
                },
              ]
            },
            {
              value: "2",
              waysToGetThere: 
              [
                {
                  question: "newVar_003_MonthsWorkedInCurrentMuseum",
                  value: "0",
                  name: "1-3",
                  minValue : 12,
                  maxValue : 35,
                },
              ]
            },
            {
              value: "3",
              waysToGetThere: 
              [
                {
                  question: "newVar_003_MonthsWorkedInCurrentMuseum",
                  value: "0",
                  name: "4-6",
                  minValue : 36,
                  maxValue : 71,
                },
              ]
            },
            {
              value: "4",
              waysToGetThere: 
              [
                {
                  question: "newVar_003_MonthsWorkedInCurrentMuseum",
                  value: "0",
                  name: "7-10",
                  minValue : 72,
                  maxValue : 119,
                },
              ]
            },
            {
              value: "5",
              waysToGetThere: 
              [
                {
                  question: "newVar_003_MonthsWorkedInCurrentMuseum",
                  value: "0",
                  name: "10-20",
                  minValue : 120,
                  maxValue : 239,
                },
              ]
            },
            {
              value: "6",
              waysToGetThere: 
              [
                {
                  question: "newVar_003_MonthsWorkedInCurrentMuseum",
                  value: "0",
                  name: "20+",
                  minValue : 240,
                  maxValue : 1200,
                },
              ]
            },
          ]
        },
        "newVar_005_Seniority": {
          function: "bin",
          resultType: "radiogroup",
          choices: [
            {
              value: "1",
              text: "Entry",
              waysToGetThere: [
                {
                  question: "question3",
                  values: "1",
                },
                {
                  question: "question3",
                  values: "2",
                },
              ]
            },
            {
              value: "2",
              text: "Mid",
              waysToGetThere: [
                {
                  question: "question3",
                  values: "3",
                },
                {
                  question: "question3",
                  values: "4",
                },
              ]
            },
            {
              value: "3",
              text: "Senior",
              waysToGetThere: [
                {
                  question: "question3",
                  values: "5",
                },
                {
                  question: "question3",
                  values: "6",
                },
              ]
            },
            {
              value: "4",
              text: "Prefer Not To Answer",
              waysToGetThere: [
                {
                  question: "question3",
                  values: "7",
                },
              ]
            },
          ]
        },
        "newVar_006_PositionCategories": {
          function: "bin",
          resultType: "checkbox",
          choices: [
            {
              value: "1",
              text: "Administration",
              waysToGetThere: [
                {
                  question: "question5",
                  values: "1",
                },
                {
                  question: "question5",
                  values: "6",
                },
                {
                  question: "question5",
                  values: "10",
                },
                {
                  question: "question5",
                  values: "13",
                },
                {
                  question: "question5",
                  values: "14",
                },
                {
                  question: "question5",
                  values: "18",
                },
                {
                  question: "question5",
                  values: "19",
                },
              ]
            },
            {
              value: "2",
              text: "Building Operations",
              waysToGetThere: [
                {
                  question: "question5",
                  values: "8",
                },
                {
                  question: "question5",
                  values: "9",
                },
                {
                  question: "question5",
                  values: "11",
                },
                {
                  question: "question5",
                  values: "12",
                },
                {
                  question: "question5",
                  values: "15",
                },
                {
                  question: "question5",
                  values: "25",
                },
                {
                  question: "question5",
                  values: "27",
                },
              ]
            },
            {
              value: "3",
              text: "Collections",
              waysToGetThere: [
                {
                  question: "question5",
                  values: "2",
                },
                {
                  question: "question5",
                  values: "3",
                },
                {
                  question: "question5",
                  values: "4",
                },
                {
                  question: "question5",
                  values: "16",
                },
                {
                  question: "question5",
                  values: "20",
                },
                {
                  question: "question5",
                  values: "23",
                },
              ]
            },
            {
              value: "4",
              text: "Communications",
              waysToGetThere: [
                {
                  question: "question5",
                  values: "5",
                },
                {
                  question: "question5",
                  values: "17",
                },
                {
                  question: "question5",
                  values: "22",
                },
                {
                  question: "question5",
                  values: "26",
                },
              ]
            },
            {
              value: "5",
              text: "Public Engagement",
              waysToGetThere: [
                {
                  question: "question5",
                  values: "7",
                },
                {
                  question: "question5",
                  values: "21",
                },
                {
                  question: "question5",
                  values: "28",
                },
              ]
            },
          ]
        },
      //   "newVarSalaryCategories": {
      //     function: "numericBin",
      //     resultType: "radiogroup",
      //     maxValue: 5000000,
      //     minValue: 0,
      //     choices: [
      //       {
      //         value: "1",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 0,
      //             maxValue : 24999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "2",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 25000,
      //             maxValue : 49999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "3",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 50000,
      //             maxValue : 74999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "4",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 75000,
      //             maxValue : 99999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "5",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 100000,
      //             maxValue : 149999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "6",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 150000,
      //             maxValue : 199999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "2",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 200000,
      //             maxValue : 299999,
      //           },
      //         ]
      //       },
      //       {
      //         value: "2",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question10",
      //             minValue : 300000,
      //             maxValue : 5000000,
      //           },
      //         ]
      //       },
      //     ]
      //   },
        "newVar_007_Gender" : {
          function: "bin",
          resultType: "radiogroup",
          choices: [
            {
              value: "1",
              text: "Woman",
              waysToGetThere:
              [
                {
                  question: "question38",
                  values: "1",
                }
              ]
            },
            {
              value: "2",
              text: "Man",
              waysToGetThere:
              [
                {
                  question: "question38",
                  values: "2",
                }
              ]
            },
            {
              value: "3",
              text: "Non-binary and Another Gender",
              waysToGetThere:
              [
                {
                  question: "question38",
                  values: "3",
                },
                {
                  question: "question38",
                  values: "4",
                },
                {
                  question: "question38",
                  values: "5",
                }
              ]
            }
          ]
        },
        "newVar_008_SexualOrientation" : {
          function: "bin",
          resultType: "radiogroup",
          choices: [
            {
              value: "1",
              text: "Heterosexual",
              waysToGetThere:
              [
                {
                  question: "question39",
                  values: "1",
                }
              ]
            },
            {
              value: "2",
              text: "LGBTQ",
              waysToGetThere:
              [
                {
                  question: "question39",
                  values: "2",
                },
                {
                  question: "question39",
                  values: "3",
                },
                {
                  question: "question39",
                  values: "4",
                },
                {
                  question: "question39",
                  values: "5",
                },
                {
                  question: "question39",
                  values: "6",
                },
                {
                  question: "question39",
                  values: "7",
                },
                {
                  question: "question39",
                  values: "8",
                },
              ]
            },
            {
              value: "3",
              text: "Prefer Not To Answer",
              waysToGetThere:
              [
                {
                  question: "question39",
                  values: "9",
                }
              ]
            },
          ]
        },
        "newVar_009_Multiracial" : {
          function : "threshold",
          resultType : "checkbox",
          choices: [
            {
              value: "1",
              text: "multiracial",
              threshold: 2,
              inputs : 
              [
                {
                  question: "question40",
                  values: "1",
                },
                {
                  question: "question40",
                  values: "2",
                },
                {
                  question: "question40",
                  values: "4",
                },
                {
                  question: "question40",
                  values: "5",
                },
                {
                  question: "question40",
                  values: "6",
                },
                {
                  question: "question40",
                  values: "7",
                },
                {
                  question: "question40",
                  values: "8",
                },
                {
                  question: "question40",
                  values: "9",
                },
              ]
            },
          ],
        },
        "newVar_010_RaceAndEthnicityCensus" : {
          function : "bin",
          resultType : "checkbox",
          choices: [
            {
              value: "1",
              text: "Asian or Asian American",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "2",
                },
                {
                  question: "question40",
                  values: "7",
                },
                {
                  question: "question40",
                  values: "8",
                },
              ]
            },
            {
              value: "2",
              text: "Middle Eastern or North African",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "4",
                }
              ]
            },
            {
              value: "3",
              text: "Black or African American",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "1",
                }
              ]
            },
            {
              value: "4",
              text: "Hispanic or Latina/o/x",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "3",
                }
              ]
            },
            {
              value: "5",
              text: "Native American or Alaska Native",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "5",
                }
              ]
            },
            {
              value: "6",
              text: "Native Hawaiian or Other Pacific Islander",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "6",
                }
              ]
            },
            {
              value: "7",
              text: "White or European American",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "9",
                }
              ]
            },
            {
              value: "8",
              text: "Multiracial",
              waysToGetThere:
              [
                {
                  question: "newVar_009_Multiracial",
                  values: "1",
                }
              ]
            },
            {
              value: "9",
              text: "Other Race",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "10",
                }
              ]
            },
            {
              value: "10",
              text: "Prefer Not To Answer",
              waysToGetThere:
              [
                {
                  question: "question40",
                  values: "11",
                }
              ]
            },
          ]
        },
      //   "newVarSalaryFilteredeByGender" : {
      //     function: "scalarVectorMultiplication",
      //     resultType: "numericVector",
      //     scalar: "question10",
      //     vector: "newVar_007_Gender",
      //   },
      //   "newVarSalaryFilteredeByRaceAndEthnicityCensus" : {
      //     function: "scalarVectorMultiplication",
      //     resultType: "numericVector",
      //     scalar: "question10",
      //     vector: "newVar_010_RaceAndEthnicityCensus",
      //   },
      //   "newVarSalaryParityGender" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarSalaryParityRace" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPerceptionAccuracy" : {
      //     "_comment" : "GABE TODO",
      //   },
        "newVar_011_PromotionBinned": {
          function: "numericBin",
          resultType: "radiogroup",
          maxValue: 100,
          minValue: 0,
          choices: [
            {
              value: "0",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "0",
                  minValue : 0,
                  maxValue : 0,
                },
              ]
            },
            {
              value: "1",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "1",
                  minValue : 1,
                  maxValue : 1,
                },
              ]
            },
            {
              value: "2",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "2",
                  minValue : 2,
                  maxValue : 2,
                },
              ]
            },
            {
              value: "3",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "3",
                  minValue : 3,
                  maxValue : 3,
                },
              ]
            },
            {
              value: "4",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "4",
                  minValue : 4,
                  maxValue : 4,
                },
              ]
            },
            {
              value: "5",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "5",
                  minValue : 5,
                  maxValue : 5,
                },
              ]
            },
            {
              value: "6",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "6",
                  minValue : 6,
                  maxValue : 6,
                },
              ]
            },
            {
              value: "7",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "7",
                  minValue : 7,
                  maxValue : 7,
                },
              ]
            },
            {
              value: "8",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "8",
                  minValue : 8,
                  maxValue : 8,
                },
              ]
            },
            {
              value: "9",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "9",
                  minValue : 9,
                  maxValue : 9,
                },
              ]
            },
            {
              value: "10",
              waysToGetThere: 
              [
                {
                  question: "question14",
                  value: "1",
                  name: "10+",
                  minValue : 10,
                  maxValue : 100,
                },
              ]
            },
          ]
        },
        "newVar_012_PromotionNoPayBinned": {
          function: "numericBin",
          resultType: "radiogroup",
          maxValue: 100,
          minValue: 0,
          choices: [
            {
              value: "0",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "0",
                  minValue : 0,
                  maxValue : 0,
                },
              ]
            },
            {
              value: "1",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "1",
                  minValue : 1,
                  maxValue : 1,
                },
              ]
            },
            {
              value: "2",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "2",
                  minValue : 2,
                  maxValue : 2,
                },
              ]
            },
            {
              value: "3",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "3",
                  minValue : 3,
                  maxValue : 3,
                },
              ]
            },
            {
              value: "4",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "4",
                  minValue : 4,
                  maxValue : 4,
                },
              ]
            },
            {
              value: "5",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "5",
                  minValue : 5,
                  maxValue : 5,
                },
              ]
            },
            {
              value: "6",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "6",
                  minValue : 6,
                  maxValue : 6,
                },
              ]
            },
            {
              value: "7",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "7",
                  minValue : 7,
                  maxValue : 7,
                },
              ]
            },
            {
              value: "8",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "8",
                  minValue : 8,
                  maxValue : 8,
                },
              ]
            },
            {
              value: "9",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "9",
                  minValue : 9,
                  maxValue : 9,
                },
              ]
            },
            {
              value: "10",
              waysToGetThere: 
              [
                {
                  question: "question15",
                  value: "1",
                  name: "10+",
                  minValue : 10,
                  maxValue : 100,
                },
              ]
            },
          ]
        },
        "newVar_013_PromotionNoTitleBinned": {
          function: "numericBin",
          resultType: "radiogroup",
          maxValue: 100,
          minValue: 0,
          choices: [
            {
              value: "0",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "0",
                  minValue : 0,
                  maxValue : 0,
                },
              ]
            },
            {
              value: "1",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "1",
                  minValue : 1,
                  maxValue : 1,
                },
              ]
            },
            {
              value: "2",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "2",
                  minValue : 2,
                  maxValue : 2,
                },
              ]
            },
            {
              value: "3",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "3",
                  minValue : 3,
                  maxValue : 3,
                },
              ]
            },
            {
              value: "4",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "4",
                  minValue : 4,
                  maxValue : 4,
                },
              ]
            },
            {
              value: "5",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "5",
                  minValue : 5,
                  maxValue : 5,
                },
              ]
            },
            {
              value: "6",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "6",
                  minValue : 6,
                  maxValue : 6,
                },
              ]
            },
            {
              value: "7",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "7",
                  minValue : 7,
                  maxValue : 7,
                },
              ]
            },
            {
              value: "8",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "8",
                  minValue : 8,
                  maxValue : 8,
                },
              ]
            },
            {
              value: "9",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "9",
                  minValue : 9,
                  maxValue : 9,
                },
              ]
            },
            {
              value: "10",
              waysToGetThere: 
              [
                {
                  question: "question16",
                  value: "1",
                  name: "10+",
                  minValue : 10,
                  maxValue : 100,
                },
              ]
            },
          ]
        },
      //   "newVarTransparencyScore" : {
      //     function: "linearcombination",
      //     timing: "perRespondentProcessing",
      //     inputs: [
      //       {
      //         question: "question20",
      //         value: "1",
      //         coefficient: 3,
      //       },
      //       {
      //         question: "question20",
      //         value: "2",
      //         coefficient: 2,
      //       },
      //       {
      //         question: "question20",
      //         value: "3",
      //         coefficient: 2,
      //       },
      //       {
      //         question: "question20",
      //         value: "4",
      //         coefficient: 2,
      //       },
      //       {
      //         question: "question20",
      //         value: "5",
      //         coefficient: -3,
      //       },
      //     ],
      //   },
      //   "newVarPromotionRate" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPromotionParityGender" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPromotionParityRace" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPromotionNoPayParityGender" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPromotionNoPayParityRace" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPromotionNoTitleParityGender" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarPromotionNoTitleParityRace" : {
      //     "_comment" : "GABE TODO",
      //   },        
      //   "newVarPostCovidWork" : {
      //     function: "bin",
      //     resultType: "radiogroup",
      //     choices: [
      //       {
      //         value: "1",
      //         _comment: "TODO: What about prefer not to answer",
      //         text: "in-person only",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question18",
      //             value: "1",
      //           },
      //         ]
      //       },
      //       {
      //         value: "2",
      //         text: "hybrid",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question18",
      //             value: "2",
      //           },
      //           {
      //             question: "question18",
      //             value: "3",
      //           },
      //           {
      //             question: "question18",
      //             value: "4",
      //           },
      //         ]
      //       },
      //       {
      //         value: "3",
      //         text: "remote only",
      //         waysToGetThere: 
      //         [
      //           {
      //             question: "question18",
      //             value: "5",
      //           },
      //         ]
      //       },
      //     ]
      //   },
      //   "newVarCultureParityGender" :{
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarCultureParityRace" :{
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarDiscriminationParityGender" :{
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarDiscriminationParityRace" :{
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarInstitutionalSatisfaction" : {
      //     "_comment" : "GABE TODO",
      //   },
      //   "newVarInstitutionalSatisfactionParityGender" : {
      //     _comment: "TODO",
      //   },
      //   "newVarInstitutionalSatisfactionParityRace" : {
      //     _comment: "TODO",
      //   },
      //   "newVarEmotionScore" : {
      //     _comment: "TODO",
      //   },
      //   "newVarSalaryPerception" : {
      //     _comment: "TODO"
      //   },
        "newVar_014_Generation" : {
          function: "numericBin",
          resultType: "radiogroup",
          maxValue: 2047,
          minValue: 0,
          choices: [
            {
              value: "1",
              text: "The Silent Generation",
              waysToGetThere: 
              [
                {
                  question: "question37",
                  value: "1",
                  minValue : 1928,
                  maxValue : 1945,
                },
              ]
            },
            {
              value: "2",
              text: "Baby Boomers",
              waysToGetThere: 
              [
                {
                  question: "question37",
                  value: "1",
                  minValue : 1946,
                  maxValue : 1964,
                },
              ]
            },
            {
              value: "3",
              text: "Generation X",
              waysToGetThere: 
              [
                {
                  question: "question37",
                  value: "1",
                  minValue : 1965,
                  maxValue : 1980,
                },
              ]
            },
            {
              value: "4",
              text: "Generation Y",
              waysToGetThere: 
              [
                {
                  question: "question37",
                  value: "1",
                  minValue : 1981,
                  maxValue : 1996,
                },
              ]
            },
            {
              value: "5",
              text: "Generation Z",
              waysToGetThere: 
              [
                {
                  question: "question37",
                  value: "1",
                  minValue : 1997,
                  maxValue : 2012,
                },
              ]
            },
          ]
        },
      },
      filters: {
        "filterSeniority": {
          question: "newVar_005_Seniority",
        },
        "filterTypeOfPosition": {
          question: "question4",
        },
        "filterPositionCategories":  {
          question: "question5",
        },
        "filterEmployerType":  {
          question: "question6",
        },
        "filterUnionMembership":  {
          question: "question8",
        },
        "filterPostCovidWork":  {
          question: "newVarPostCovidWork",
        },
        "filterDiscrimination":  {
          question: "question26",
        },
        "filterAge":  {
          question: "newVarSalaryCategories",
        },
        "filterGender":  {
          question: "newVar_007_Gender",
        },
        "filterSexualOrientation":  {
          question: "newVar_008_SexualOrientation",
        },
        "filterRaceAndEthnicity":  {
          question: "newVar_010_RaceAndEthnicityCensus",
        },
        "filterEducation":  {
          question: "question41",
        },
        "filterDisability":  {
          question: "question42",
        },
      },
      outputs: [
        {
          name: "demographics-time-in-art-museums-(months)",
          inputQuestions: ["newVar_001_MonthsWorkedInMusems"],
          labels : ["total months"],
          timing: "perRespondentProcessing",
          function: "mean",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags: [],
          },
        },
        {
          name: "demographics-time-in-art-museums-(months)-binned",
          inputQuestions: ["newVar_002_MonthsWorkedInMuseumsBinned"],
          labels : ["<1", "1 to 3", "4 to 6", "7 to 10", "10 to 20", "20+"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags: [],
          },
        },
        {
          name: "demographics-time-in-current-art-museum-(months)",
          inputQuestions: ["newVar_003_MonthsWorkedInCurrentMuseum"],
          labels : ["total months"],
          timing: "perRespondentProcessing",
          function: "mean",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-time-in-current-art-museum-(months)-binned",
          inputQuestions: ["newVar_004_MonthsWorkedInCurrentMuseumBinned"],
          labels : ["<1", "1 to 3", "4 to 6", "7 to 10", "10 to 20", "20+"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags: [],
          },
        },
        {
          name: "demographics-seniority",
          inputQuestions: ["question3"],
          labels : ["Total Number","Voluntary (including unpaid internship)","Entry-level","Associate/Experienced (non-manager)","Manager (with one/more direct reports)","Director","Executive/Museum Leadership","Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-seniority-recode",
          inputQuestions: ["newVar_005_Seniority"],
          labels : ["Entry","Mid","Senior","Prefer Not To Answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-position-in-museum",
          inputQuestions: ["question4"],
          labels : ["Total Number","Full-time/ Permanent Employee", "Part-time Employee", "Temporary Employee", "Seasonal Employee", "Paid Intern", "Unpaid Intern", "Apprentice / Fellow", "Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-position-category-in-museum",
          inputQuestions: ["newVar_006_PositionCategories"],
          labels: ["Administration", "Building Operations", "Collections", "Communications", "Public Engagement"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-generation",
          inputQuestions: ["newVar_014_Generation"],
          labels : ["The Silent Generation (1928-1945)", "Baby Boomers (1946-1964)", "Generation X (1965-1980)", "Millennial (1981-1996)", "Generation Z (1997-2012)"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-gender",
          inputQuestions: ["question38"],
          labels : ["Total Number", "Woman","Man","Non-binary/genderqueer/third gender","Another gender","Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-gender-recode",
          inputQuestions: ["newVar_007_Gender"],
          labels: ["Man", "Woman","Non-binary and Another Gender"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-orientation",
          inputQuestions: ["question39"],
          labels: ["Total Number","Heterosexual ","Lesbian ","Gay","Bisexual ","Pansexual ","Asexual","I don’t label myself as anything","Another sexual orientation","Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-orientation-recode",
          inputQuestions: ["newVar_008_SexualOrientation"],
          labels : ["Heterosexual","LGBTQ","Prefer Not To Answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-race",
          inputQuestions: ["question40"],
          labels: ["Total Number","Black or African American", "East Asian", "Hispanic Latina Latino or Latinx", "Middle Eastern or North African", "Native American/Alaska Native/First Nations", "Native Hawaiian or other Pacific Islander", "South Asian", "Southeast Asian", "White", "Another race of ethnicity", "Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-race-census",
          inputQuestions: ["newVar_010_RaceAndEthnicityCensus"],
          labels: ["Asian or Asian American","Middle Eastern or North African","Black or African American","Hispanic or Latina/o/x","Native American or Alaska Native","Native Hawaiian or Other Pacific Islander","White or European American","Multiracial","Other Race","Prefer Not To Answer"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-education",
          inputQuestions: ["question41"],
          labels : ["Total Number", "Some high school", "High school graduate", "Some college/Associates degree", "Bachelor’s degree", "Master’s degree", "Professional or doctorate degree", "Prefer Not To Answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "demographics-disability",
          inputQuestions: ["question42"],
          labels: ["Total Number","Yes", "No", "Prefer Not To Answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "salary-and-promotion-compensation-type",
          inputQuestions: ["question9"],
          labels : ["Total Number", "Annual salary", "Hourly wage", "Stipend", "Voluntary (Unpaid)"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "salary-and-promotion-salary-recode",
        //   inputQuestions: ["newVarSalaryCategories"],
        //   _comment: "Broken",
        //   timing: "perRespondentProcessing",
        //   function: "radiogroupSum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-parity-salary-gender",
        //   reference: ["question10"],
        //   _comment: "Broken",
        //   timing: "parity",
        //   function: "parity",
        //   filters: ["filterGender"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-parity-salary-race-and-ethnicity",
        //   inputQuestions: ["question10"],
        //   _comment: "Broken",
        //   timing: "parity",
        //   function: "parity",
        //   filters: ["filterRaceAndEthnicity"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "salary-and-promotion-similar-position-institution",
          inputQuestions: ["question11"],
          labels : ["Total Number", "Above others", "About the same as others", "Below others", "N/A"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "salary-and-promotion-similar-position",
          inputQuestions: ["question12"],
          labels : ["Total Number", "Above others", "About the same as others", "Below others", "N/A"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "salary-and-promotion-similar-position-recode",
        //   inputQuestions: ["newVarSalaryPerception"],
        //   _comment : "TODO",
        //   timing: "perRespondentProcessing",
        //   function: "radiogroupSum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "salary-and-promotion-promotions",
          inputQuestions: ["question13"],
          labels : ["Total Number","Title Change and Pay Increase", "Title Change But No Pay Increase", "Pay Increase But Title Change","None of the above"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "salary-and-promotion-number-of-promotions-binned",
          inputQuestions: ["newVar_011_PromotionBinned"],
          labels : ["0","1","2","3","4","5","6","7","8","9","10+"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "salary-and-promotion-number-of-promotions-total",
          inputQuestions: ["question14"],
          labels: ["Total Number", "Number of Promotions"],
          timing: "perRespondentProcessing",
          function: "sum",
          filters: ["filterGender", "filterRaceAndEthnicity"],
          outputParties: {
            analyst: "false",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "salary-and-promotion-number-of-promotions-rate",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-total", "demographics-time-in-art-museums"],
        //   timing: "postprocessing1",
        //   _comment: "TODO",
        //   function: "division",
        //   filters: ["filterGender", "filterRaceAndEthnicity"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-promotion-rate-parity-gender",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-rate"],
        //   timing: "postprocessing2",
        //   _comment: "TODO",
        //   function: "parity",
        //   filters: ["filterGender"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-promotion-rate-parity-race",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-rate"],
        //   timing: "postprocessing2",
        //   _comment: "TODO",
        //   function: "parity",
        //   filters: ["filterRaceAndEthnicity"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "salary-and-promotion-number-of-promotions-no-pay-increase-binned",
          inputQuestions: ["newVar_012_PromotionNoPayBinned"],
          labels : ["0","1","2","3","4","5","6","7","8","9","10+"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "salary-and-promotion-number-of-promotions-no-pay-total",
          inputQuestions: ["question15"],
          _comment: "GABE TODO POSTPROCESSING",
          labels: ["Total Number", "Number of Promotions"],
          timing: "perRespondentProcessing",
          function: "sum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "false",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "salary-and-promotion-number-of-promotions-no-pay-rate",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-no-pay-total", "demographics-time-in-art-museums"],
        //   timing: "postprocessing1",
        //   _comment: "TODO",
        //   function: "division",
        //   filters: ["filterGender", "filterRaceAndEthnicity"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-promotion-no-pay-rate-parity-gender",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-no-pay-rate"],
        //   timing: "postprocessing2",
        //   _comment: "TODO",
        //   function: "parity",
        //   filters: ["filterGender"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-promotion-no-pay-rate-parity-race",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-no-pay-rate"],
        //   timing: "postprocessing2",
        //   _comment: "TODO",
        //   function: "parity",
        //   filters: ["filterRaceAndEthnicity"],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },


        // {
        //   name: "salary-and-promotion-promotion-no-pay-rate-gender",
        //   inputQuestions: ["newVarPromotionNoPayParityGender"],
        //   _comment: "GABE TODO RECODE THIS BOX",
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-promotion-no-pay-rate-race",
        //   inputQuestions: ["newVarPromotionNoPayParityRace"],
        //   _comment: "GABE TODO RECODE THIS BOX",
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "salary-and-promotion-number-of-promotions-no-title-increase-binned",
          inputQuestions: ["newVar_013_PromotionNoTitleBinned"],
          labels : ["0","1","2","3","4","5","6","7","8","9","10+"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "salary-and-promotion-number-of-promotions-no-title-total",
          inputQuestions: ["question16"],
          labels: ["Total Number", "Number of Promotions"],
          // _comment: "GABE TODO POSTPROCESSING",
          timing: "perRespondentProcessing",
          function: "sum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "salary-and-promotion-promotion-no-title-rate-gender",
        //   inputQuestions: ["newVarPromotionNoTitleParityGender"],
        //   _comment: "GABE TODO RECODE THIS BOX",
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "salary-and-promotion-promotion-no-title-rate-race",
        //   inputQuestions: ["newVarPromotionNoTitleParityRace"],
        //   _comment: "GABE TODO RECODE THIS BOX",
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "staff-satisfaction-satisfaction",
          inputQuestions: ["question32"],
          labels : ["Level of pay -- Total Number","Level of pay -- 1","Level of pay -- 2","Level of pay -- 3","Level of pay -- 4","Level of pay -- 5", "Stable and predictable pay-- Total Number","Stable and predictable pay-- 1","Stable and predictable pay-- 2","Stable and predictable pay-- 3","Stable and predictable pay-- 4","Stable and predictable pay-- 5", "Stable and predictable hours-- Total Number","Stable and predictable hours-- 1","Stable and predictable hours-- 2","Stable and predictable hours-- 3","Stable and predictable hours-- 4","Stable and predictable hours-- 5", "Control over hours and/or location (e.g. ability to work flexible hours work remotely)-- Total Number","Control over hours and/or location (e.g. ability to work flexible hours work remotely)-- 1","Control over hours and/or location (e.g. ability to work flexible hours work remotely)-- 2","Control over hours and/or location (e.g. ability to work flexible hours work remotely)-- 3","Control over hours and/or location (e.g. ability to work flexible hours work remotely)-- 4","Control over hours and/or location (e.g. ability to work flexible hours work remotely)-- 5", "Job security-- Total Number","Job security-- 1","Job security-- 2","Job security-- 3","Job security-- 4","Job security-- 5", "Employee benefits (e.g. health care retirement)-- Total Number","Employee benefits (e.g. health care retirement)-- 1","Employee benefits (e.g. health care retirement)-- 2","Employee benefits (e.g. health care retirement)-- 3","Employee benefits (e.g. health care retirement)-- 4","Employee benefits (e.g. health care retirement)-- 5", "Career advancement opportunities (e.g. promotion path learning new skills)-- Total Number","Career advancement opportunities (e.g. promotion path learning new skills)-- 1","Career advancement opportunities (e.g. promotion path learning new skills)-- 2","Career advancement opportunities (e.g. promotion path learning new skills)-- 3","Career advancement opportunities (e.g. promotion path learning new skills)-- 4","Career advancement opportunities (e.g. promotion path learning new skills)-- 5", "Enjoying your day-to-day work (e.g. good coworkers/managers pleasant work environment, manageable stress level)-- Total Number","Enjoying your day-to-day work (e.g. good coworkers/managers pleasant work environment, manageable stress level)-- 1","Enjoying your day-to-day work (e.g. good coworkers/managers pleasant work environment, manageable stress level)-- 2","Enjoying your day-to-day work (e.g. good coworkers/managers pleasant work environment, manageable stress level)-- 3","Enjoying your day-to-day work (e.g. good coworkers/managers pleasant work environment, manageable stress level)-- 4","Enjoying your day-to-day work (e.g. good coworkers/managers pleasant work environment, manageable stress level)-- 5", "Having a sense of purpose and dignity in your work-- Total Number","Having a sense of purpose and dignity in your work-- 1","Having a sense of purpose and dignity in your work-- 2","Having a sense of purpose and dignity in your work-- 3","Having a sense of purpose and dignity in your work-- 4","Having a sense of purpose and dignity in your work-- 5", "Having the power to change things about your job that you’re not satisfied with-- Total Number","Having the power to change things about your job that you’re not satisfied with-- 1","Having the power to change things about your job that you’re not satisfied with-- 2","Having the power to change things about your job that you’re not satisfied with-- 3","Having the power to change things about your job that you’re not satisfied with-- 4","Having the power to change things about your job that you’re not satisfied with-- 5"],
          _comment : "TODO After the computation we need to combine the boxes",
          _comment2 : "TODO After the computation compute means",
          timing: "perRespondentProcessing",
          function: "matrixSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "staff-satisfaction-satisfaction-parity-race",
        //   inputQuestions: ["newVarInstitutionalSatisfactionParityRace"],
        //   _comment : "TODO Implement",
        //   timing: "perRespondentProcessing",
        //   function: "matrixSum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "staff-satisfaction-satisfaction-parity-gender",
        //   inputQuestions: ["newVarInstitutionalSatisfactionParityGender"],
        //   _comment : "TODO Implement",
        //   timing: "perRespondentProcessing",
        //   function: "matrixSum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "staff-satisfaction-emotions",
          inputQuestions: ["question33"],
          labels: ["Total Number", "Content","Worried","Excited","Sad","Connected to others","Bored","Angry","Hopeful","Disappointed","Inspired","None of the above"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "discrimination-total",
          inputQuestions: ["question26"],
          labels: ["Total Number", "Yes", "No", "Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender", "filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "discrimination-parity-gender",
        //   _comment: "TODO",
        //   inputQuestions: ["newVarDiscriminationParityGender"],
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "discrimination-parity-race",
        //   _comment: "TODO",
        //   inputQuestions: ["newVarDiscriminationParityRace"],
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "discrimination-rate",
          inputQuestions: ["question27"],
          labels: ["Total Number", "Very frequently (e.g. daily or almost daily)","Often (e.g. a few times a month)","Sometimes (e.g. a few times a year) ","Rarely (e.g. one or two times total)"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "discrimination-forms",
          inputQuestions: ["question28"],
          labels: ["Total Number", "Discrimination and/or harassment based on gender (including pregnancy gender expression gender identity etc.)","Discrimination and/or harassment based on sexual orientation","Discrimination and/or harassment based on race and/or ethnicity","Discrimination and/or harassment based on social or economic status","Discrimination and/or harassment based on religion","Discrimination and/or harassment based on age","Discrimination and/or harassment based on disability","Another form of discrimination and/or harassment","I don’t know "],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "discrimination-actions",
          inputQuestions: ["question29"],
          labels: ["Total Number", "I filed an HR complaint form (i.e. in-person or online)","I talked to an HR staff member who is available to employees","I used an anonymous reporting mechanism","I used an employee complaint hotline","I talked to a neutral employee or manager who can communicate the issues to HR","I used a third-party reporting process (e.g. use of an ombudsman)","I used another reporting mechanism","I followed a union-provided grievance process for reporting","I did something else","I haven’t done anything in response"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "discrimination-satisfaction-with-response",
          inputQuestions: ["question30"],
          labels: ["Total Number", "Not at all satisfied","Somewhat satisfied","Very satisfied"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "discrimination-reasons-no-report",
          inputQuestions: ["question31"],
          labels: ["Total Number", "I worried about retaliation from people in leadership at the institution","I worried about retaliation from the person who discriminated against/harassed me","I didn’t think anything would be done about it","I didn’t think anything could be done about it because the person who discriminated against/harassed me is not an employee of the museum (e.g. visitor board member artist...)","I didn’t know about what actions I could take","My workplace doesn’t provide any mechanisms to report discrimination and/or harassment","I always reported my experiences of discrimination and harassment","I haven't experienced discrimination or harassment"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "leaving-leave-current-museum",
          inputQuestions: ["question22"],
          labels: ["Total Number", "Yes", "No"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "leaving-leave-current-museum-why",
          inputQuestions: ["question23"],
          labels : ["Total Number", "Pay is too low","Other institutions have more flexible work hours","No full-time work is available in this institution","Opportunities for growth at the other museum","Experiences of discrimination or harassment","Lack of opportunities for growth at my museum","Unsafe working conditions","Positive reputation of the other museum","Burnout","Desire to live in a different town or city","Interpersonal issues with other staff members","Poor management","I don’t believe my institution can change for the better","Personal reasons unrelated to my current museum workplace","None of the above"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "leaving-leave-current-field",
          inputQuestions: ["question24"],
          labels: ["Total Number", "Yes", "No"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          _comment: "This is also breaking the computation",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "leaving-leave-current-field-why",
          inputQuestions: ["question25"],
          labels: ["Total Number", "Pay is too low in art museums","Other fields have more flexible work hours","More interested in other fields","Full-time work is unavailable to me in most art museums","Experiences of discrimination or harassment in art museums","Lack of opportunities for growth in art museums","Unsafe working conditions in art museums","Burnout in the art museum field","Exciting opportunities in other fields","Interpersonal issues with other staff members are common in art museums","Poor management in art museums","I don’t believe art museums can change for the better","Personal reasons unrelated to art and/or museums","None of the above"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "dei-role",
          inputQuestions: ["question34"],
          labels: ["Total Number","I personally incorporate principles of diversity equity and inclusion in my overall work","I am currently a member of a diversity equity and inclusion committee at work","I was previously a member of a diversity equity and inclusion committee at work","My position specifically focuses on diversity equity and inclusion","None of the above – I am not involved in my museum’s diversity equity and inclusion efforts","None of the above – I am not clear about how to get involved in my museum’s diversity equity and inclusion efforts","Not applicable – my museum does not have any efforts towards diversity equity and inclusion"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "dei-measured",
          inputQuestions: ["question35"],
          labels: ["Total Number", "Artists in the collection", "Board and/or trustee members", "Staff members", "Volunteers", "None of the above", "I don’t know"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "union-measured",
          inputQuestions: ["question8"],
          labels: ["Total Number", "Yes I am a union member for my museum job","No I have the option to be a union member for my museum job but have not chosen to join","No a union is not available for my museum job"],
          timing: "perRespondentProcessing",
          function: "radiogroupSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "policies-measured",
          inputQuestions: ["question18"],
          labels: ["Total Number", "I am/will be working in-person only","I am/will be working in a hybrid setup where the museum chooses how many and which days to work from home and which days to work from the museum","I am/will be working in a hybrid setup where I get to choose how many and which days to work from home and which days to work in the museum","I am/will be working in a hybrid setup where the museum chooses how many days to work from home and how many days to work from the museum and I get to choose which days","I am/will be working from home only","I don’t know much about the museum’s return-to-work plans","Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "policies-salary-transparency",
          inputQuestions: ["question20"],
          labels: ["Total Number", "My workplace shares the specific salaries of all employees publicly","My union handbook lists salary levels for each job","My workplace shares salary ranges for all positions or levels with employees","My workplace posts salary ranges for each open position","My workplace actively discourages employees from discussing their salaries","None of the above ","I don’t know"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "org-salary-transparency",
          inputQuestions: ["question19"],
          labels: [ "I believe that I can learn and grow in this organization -- Total Number", "I believe that I can learn and grow in this organization -- Strongly Disagree", "I believe that I can learn and grow in this organization -- Somewhat Disagree", "I believe that I can learn and grow in this organization -- Neutral", "I believe that I can learn and grow in this organization -- Somewhat Agree", "I believe that I can learn and grow in this organization -- Strongly Agree", "I believe that I can learn and grow in this organization -- Prefer not to answer",  "I feel burned out in this organization -- Total Number", "I feel burned out in this organization -- Strongly Disagree", "I feel burned out in this organization -- Somewhat Disagree", "I feel burned out in this organization -- Neutral", "I feel burned out in this organization -- Somewhat Agree", "I feel burned out in this organization -- Strongly Agree", "I feel burned out in this organization -- Prefer not to answer",  "My manager supports me -- Total Number", "My manager supports me -- Strongly Disagree", "My manager supports me -- Somewhat Disagree", "My manager supports me -- Neutral", "My manager supports me -- Somewhat Agree", "My manager supports me -- Strongly Agree", "My manager supports me -- Prefer not to answer",  "I believe performance reviews contribute to growth and/or advancement in my institution -- Total Number", "I believe performance reviews contribute to growth and/or advancement in my institution -- Strongly Disagree", "I believe performance reviews contribute to growth and/or advancement in my institution -- Somewhat Disagree", "I believe performance reviews contribute to growth and/or advancement in my institution -- Neutral", "I believe performance reviews contribute to growth and/or advancement in my institution -- Somewhat Agree", "I believe performance reviews contribute to growth and/or advancement in my institution -- Strongly Agree", "I believe performance reviews contribute to growth and/or advancement in my institution -- Prefer not to answer",  "Diversity and difference are not celebrated in this organization -- Total Number", "Diversity and difference are not celebrated in this organization -- Strongly Disagree", "Diversity and difference are not celebrated in this organization -- Somewhat Disagree", "Diversity and difference are not celebrated in this organization -- Neutral", "Diversity and difference are not celebrated in this organization -- Somewhat Agree", "Diversity and difference are not celebrated in this organization -- Strongly Agree", "Diversity and difference are not celebrated in this organization -- Prefer not to answer",  "I believe that what I do here is meaningful -- Total Number", "I believe that what I do here is meaningful -- Strongly Disagree", "I believe that what I do here is meaningful -- Somewhat Disagree", "I believe that what I do here is meaningful -- Neutral", "I believe that what I do here is meaningful -- Somewhat Agree", "I believe that what I do here is meaningful -- Strongly Agree", "I believe that what I do here is meaningful -- Prefer not to answer",  "The culture of my workplace negatively affects my mental and/or physical health -- Total Number", "The culture of my workplace negatively affects my mental and/or physical health -- Strongly Disagree", "The culture of my workplace negatively affects my mental and/or physical health -- Somewhat Disagree", "The culture of my workplace negatively affects my mental and/or physical health -- Neutral", "The culture of my workplace negatively affects my mental and/or physical health -- Somewhat Agree", "The culture of my workplace negatively affects my mental and/or physical health -- Strongly Agree", "The culture of my workplace negatively affects my mental and/or physical health -- Prefer not to answer",  "Mistakes are held against you in this organization -- Total Number", "Mistakes are held against you in this organization -- Strongly Disagree", "Mistakes are held against you in this organization -- Somewhat Disagree", "Mistakes are held against you in this organization -- Neutral", "Mistakes are held against you in this organization -- Somewhat Agree", "Mistakes are held against you in this organization -- Strongly Agree", "Mistakes are held against you in this organization -- Prefer not to answer",  "I would recommend this workplace to friends and family -- Total Number", "I would recommend this workplace to friends and family -- Strongly Disagree", "I would recommend this workplace to friends and family -- Somewhat Disagree", "I would recommend this workplace to friends and family -- Neutral", "I would recommend this workplace to friends and family -- Somewhat Agree", "I would recommend this workplace to friends and family -- Strongly Agree", "I would recommend this workplace to friends and family -- Prefer not to answer",  "I don’t feel that I have a voice in decision making in this organization -- Total Number", "I don’t feel that I have a voice in decision making in this organization -- Strongly Disagree", "I don’t feel that I have a voice in decision making in this organization -- Somewhat Disagree", "I don’t feel that I have a voice in decision making in this organization -- Neutral", "I don’t feel that I have a voice in decision making in this organization -- Somewhat Agree", "I don’t feel that I have a voice in decision making in this organization -- Strongly Agree", "I don’t feel that I have a voice in decision making in this organization -- Prefer not to answer",  "My institution provides management and/or leadership training for all supervisors -- Total Number", "My institution provides management and/or leadership training for all supervisors -- Strongly Disagree", "My institution provides management and/or leadership training for all supervisors -- Somewhat Disagree", "My institution provides management and/or leadership training for all supervisors -- Neutral", "My institution provides management and/or leadership training for all supervisors -- Somewhat Agree", "My institution provides management and/or leadership training for all supervisors -- Strongly Agree", "My institution provides management and/or leadership training for all supervisors -- Prefer not to answer",  "People in my organization are held accountable for discrimination and harassment -- Total Number", "People in my organization are held accountable for discrimination and harassment -- Strongly Disagree", "People in my organization are held accountable for discrimination and harassment -- Somewhat Disagree", "People in my organization are held accountable for discrimination and harassment -- Neutral", "People in my organization are held accountable for discrimination and harassment -- Somewhat Agree", "People in my organization are held accountable for discrimination and harassment -- Strongly Agree", "People in my organization are held accountable for discrimination and harassment -- Prefer not to answer",  "I feel like I have to hide some of who I am working in this organization -- Total Number", "I feel like I have to hide some of who I am working in this organization -- Strongly Disagree", "I feel like I have to hide some of who I am working in this organization -- Somewhat Disagree", "I feel like I have to hide some of who I am working in this organization -- Neutral", "I feel like I have to hide some of who I am working in this organization -- Somewhat Agree", "I feel like I have to hide some of who I am working in this organization -- Strongly Agree", "I feel like I have to hide some of who I am working in this organization -- Prefer not to answer"],
          timing: "perRespondentProcessing",
          function: "matrixSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        {
          name: "org-experiences",
          inputQuestions: ["question21"],
          labels: ["Total Number",  "My major accomplishments have been acknowledged or recognized ", "I wasn’t given appropriate resources materials or time to execute a job task or responsibility", "I was given opportunities to do work that will likely help me advance", "Someone took credit for my accomplishment", "I developed positive relationships with my coworkers", "Someone I work with was unfairly blamed or criticized for something", "I was unfairly blamed or criticized for something", "Another employee yelled raised their voice or spoke to me in an unprofessional manner", "None of these"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "org-parity-gender",
        //   inputQuestions: ["newVarCultureParityGender"],
        //   _comment: "TODO",
        //   timing: "perRespondentProcessing",
        //   function: "checkboxSum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "org-parity-gender",
        //   inputQuestions: ["newVarCultureParityRace"],
        //   _comment: "TODO",
        //   timing: "perRespondentProcessing",
        //   function: "checkboxSum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        {
          name: "leadership-impact",
          inputQuestions: ["question36"],
          labels: ["Total Number", "The museum’s mission vision and/or values", "The museum board’s priorities", "Input from museum staff members", "The interests of current museum visitors", "The interests of the communities around the museum", "None of the above/ I don't know"],
          timing: "perRespondentProcessing",
          function: "checkboxSum",
          filters: ["filterGender","filterRaceAndEthnicity"],
          outputParties: {
            analyst: "true",
            cohort: "false",
            tags : [],
          }
        },
        // {
        //   name: "months-working-total",
        //   inputQuestions: ["newVar_001_MonthsWorkedInMusems"],
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "months-working-current-museum-total",
        //   inputQuestions: ["newVar_003_MonthsWorkedInCurrentMuseum"],
        //   timing: "perRespondentProcessing",
        //   function: "sum",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "promotion-rate-total",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-total", "months-working"],
        //   timing: "afterOpening",
        //   function: "division",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "promotion-rate-title-change-no-pay-increase",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-no-pay-total", "months-working"],
        //   timing: "afterOpening",
        //   function: "division",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "promotion-rate-no-title-change-pay-increase",
        //   inputQuestions: ["salary-and-promotion-number-of-promotions-no-title-total", "months-working"],
        //   timing: "afterOpening",
        //   function: "division",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "transparency-score",
        //   function: "sum",
        //   inputQuestions: ["newVarTransparencyScore"],
        //   timing: "perRespondentProcessing",
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "culture-subscore",
        //   function: "linearcombinationMatrix",
        //   timing: "afterOpening",
        //   inputs: [
        //     {
        //       question: "question19",
        //       _comment: "Q19a -- Positive Framing",
        //       row: "1",
        //       col: "1",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19a -- Positive Framing",
        //       row: "1",
        //       col: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19a -- Positive Framing",
        //       row: "1",
        //       col: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19a -- Positive Framing",
        //       row: "1",
        //       col: "5",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19b -- Negative Framing",
        //       row: "2",
        //       col: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19b -- Negative Framing",
        //       row: "2",
        //       col: "2",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19b -- Negative Framing",
        //       row: "2",
        //       col: "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19b -- Negative Framing",
        //       row: "2",
        //       col: "5",
        //       coefficient: -1,
        //     },

        //     {
        //       question: "question19",
        //       _comment: "Q19c -- Positive Framing",
        //       row: "3",
        //       col: "1",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19c -- Positive Framing",
        //       row: "3",
        //       col: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19c -- Positive Framing",
        //       row: "3",
        //       col: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19c -- Positive Framing",
        //       row: "3",
        //       col: "5",
        //       coefficient: 1,
        //     },

        //     {
        //       question: "question19",
        //       _comment: "Q19d -- Positive Framing",
        //       row: "4",
        //       col: "1",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19d -- Positive Framing",
        //       row: "4",
        //       col: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19d -- Positive Framing",
        //       row: "4",
        //       col: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19d -- Positive Framing",
        //       row: "4",
        //       col: "5",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19e -- Negative Framing",
        //       row: "5",
        //       col: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19e -- Negative Framing",
        //       row: "5",
        //       col: "2",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19e -- Negative Framing",
        //       row: "5",
        //       col: "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19e -- Negative Framing",
        //       row: "5",
        //       col: "5",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19f -- Positive Framing",
        //       row: "6",
        //       col: "1",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19f -- Positive Framing",
        //       row: "6",
        //       col: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19f -- Positive Framing",
        //       row: "6",
        //       col: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19f -- Positive Framing",
        //       row: "6",
        //       col: "5",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19g -- Negative Framing",
        //       row: "7",
        //       col: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19g -- Negative Framing",
        //       row: "7",
        //       col: "2",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19g -- Negative Framing",
        //       row: "7",
        //       col: "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19g -- Negative Framing",
        //       row: "7",
        //       col: "5",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19h -- Negative Framing",
        //       row: "8",
        //       col: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19h -- Negative Framing",
        //       row: "8",
        //       col: "2",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19h -- Negative Framing",
        //       row: "8",
        //       col: "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19h -- Negative Framing",
        //       row: "8",
        //       col: "5",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19i -- Positive Framing",
        //       row: "9",
        //       col: "1",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19i -- Positive Framing",
        //       row: "9",
        //       col: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19i -- Positive Framing",
        //       row: "9",
        //       col: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19i -- Positive Framing",
        //       row: "9",
        //       col: "5",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19j -- Negative Framing",
        //       row: "10",
        //       col: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19j -- Negative Framing",
        //       row: "10",
        //       col: "2",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19j -- Negative Framing",
        //       row: "10",
        //       col: "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19j -- Negative Framing",
        //       row: "10",
        //       col: "5",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19k -- Positive Framing",
        //       row: "11",
        //       col: "1",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19k -- Positive Framing",
        //       row: "11",
        //       col: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19k -- Positive Framing",
        //       row: "11",
        //       col: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question19",
        //       _comment: "Q19k -- Positive Framing",
        //       row: "11",
        //       col: "5",
        //       coefficient: 1,
        //     },
        //   ],
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "culture-score",
        //   function: "linearcombination",
        //   _comment: "TODO: Implement linearcombination",
        //   resultType: "numeric",
        //   inputs: [
        //     {
        //       question: "newVarCultureSubscoreQuestion19",
        //       value: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21a -- Positive",
        //       value: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21b -- Negative",
        //       value: "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21c -- Positive",
        //       value: "3",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21d -- Negative",
        //       value: "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21e -- Positive",
        //       value: "5",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21f -- Negative",
        //       value: "6",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21g -- Negative",
        //       value: "7",
        //       coefficient: -1,
        //     },
        //     {
        //       question: "question21",
        //       _comment: "Q21h -- Negative",
        //       value: "7",
        //       coefficient: -1,
        //     },
        //   ],
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
        // {
        //   name: "Non-report-of-discrimination",
        //   function: "linearcombination",
        //   resultType: "numeric",
        //   inputs: [
        //     {
        //       question: "staff-survey-31",
        //       _comment: "Q31a",
        //       value: "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "staff-survey-31",
        //       _comment: "Q31b",
        //       value: "2",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "staff-survey-31",
        //       _comment: "Q31c",
        //       value: "3",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "staff-survey-31",
        //       _comment: "Q31d",
        //       value: "4",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "staff-survey-31",
        //       _comment: "Q31e",
        //       value: "5",
        //       coefficient: 1,
        //     },
        //     {
        //       question: "staff-survey-31",
        //       _comment: "Q31f",
        //       value: "6",
        //       coefficient: 1,
        //     },
        //   ]
        // },
        // {
        //   name: "emotion-score",
        //   inputQuestions: ["staff-survey-33"],
        //   timing: "afterOpening",
        //   function: "linearcombination",
        //   coefficients: [
        //     {
        //       question : "staff-survey-33",
        //       values : "1",
        //       coefficient: 1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "2",
        //       coefficient: -1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "3",
        //       coefficient: 1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "4",
        //       coefficient: -1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "5",
        //       coefficient: -1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "6",
        //       coefficient: -1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "7",
        //       coefficient: -1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "8",
        //       coefficient: 1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "9",
        //       coefficient: -1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "10",
        //       coefficient: 1,
        //     },
        //     {
        //       question : "staff-survey-33",
        //       values : "11",
        //       coefficient: 0,
        //     },
        //   ],
        //   filters: [],
        //   outputParties: {
        //     analyst: "true",
        //     cohort: "false",
        //     tags : [],
        //   }
        // },
      ]
    },
    visualization : [
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Approximately how long have you been working in the art museum field?",
        labels : ["mean", "<1", "1 to 3", "4 to 6", "7 to 10", "10 to 20", "20+"],
        data :
          [
            {
              output: "demographics-time-in-art-museums",
              value: "1",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "1",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "2",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "3",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "4",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "5",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "6",
            },
          ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "And how long have you been working at your current museum?",
        labels : ["mean", "<1", "1 to 3", "4 to 6", "7 to 10", "10 to 20", "20+"],
        data : 
          [
            {
              output: "demographics-time-in-art-museums",
              value: "1",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "1",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "2",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "3",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "4",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "5",
            },
            {
              output: "demographics-time-in-art-museums-binned",
              value: "6",
            },
          ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Current Position Level In The Museum",
        labels : ["Voluntary (including unpaid internship)", "Entry-level", "Associate/Experienced ", "Manager", "Director", "Executive/Museum Leadership", "Prefer not to answer"],
        dataSet : 
          [
            {
              output: "demographics-seniority",
              value: "1",
            },
            {
              output: "demographics-seniority",
              value: "2",
            },
            {
              output: "demographics-seniority",
              value: "3",
            },
            {
              output: "demographics-seniority",
              value: "4",
            },
            {
              output: "demographics-seniority",
              value: "5",
            },
            {
              output: "demographics-seniority",
              value: "6",
            },
            {
              output: "demographics-seniority",
              value: "7",
            },
          ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Type of Position In The Museum",
        labels : ["Full-time/ Permanent Employee", "Part-time Employee", "Temporary Employee", "Seasonal Employee", "Paid Intern", "Unpaid Intern", "Apprentice / Fellow", "Prefer not to answer"],
        dataSet : [
            {
              output: "demographics-position-in-museum",
              value: "1",
            },
            {
              output: "demographics-position-in-museum",
              value: "2",
            },
            {
              output: "demographics-position-in-museum",
              value: "3",
            },
            {
              output: "demographics-position-in-museum",
              value: "4",
            },
            {
              output: "demographics-position-in-museum",
              value: "5",
            },
            {
              output: "demographics-position-in-museum",
              value: "6",
            },
            {
              output: "demographics-position-in-museum",
              value: "7",
            },
            {
              output: "demographics-position-in-museum",
              value: "8",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "Position Categories",
        labels: ["Administration", "Building Operations", "Collections", "Communications", "Public Engagement"],
        dataSet : [
            {
              output: "demographics-position-category-in-museum",
              value: "1",
            },
            {
              output: "demographics-position-category-in-museum",
              value: "2",
            },
            {
              output: "demographics-position-category-in-museum",
              value: "3",
            },
            {
              output: "demographics-position-category-in-museum",
              value: "4",
            },
            {
              output: "demographics-position-category-in-museum",
              value: "5",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Generation",
        labels : ["The Silent Generation (1928-1945)", "Baby Boomers (1946-1964)", "Generation X (1965-1980)", "Millennial (1981-1996)", "Generation Z (1997-2012)"],
        dataSet : [
            {
              output: "demographics-generation",
              value: "1",
            },
            {
              output: "demographics-generation",
              value: "2",
            },
            {
              output: "demographics-generation",
              value: "3",
            },
            {
              output: "demographics-generation",
              value: "4",
            },
            {
              output: "demographics-generation",
              value: "5",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Gender",
        labels: ["Man", "Women", "Non-binary and Another Gender"],
        dataSet : [
            {
              output: "demographics-gender-recode",
              value: "1",
            },
            {
              output: "demographics-gender-recode",
              value: "2",
            },
            {
              output: "demographics-gender-recode",
              value: "3",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Sexual Orientation",
        labels: ["Heterosexual", "LGBTQ", "Prefer Not To Answer"],
        dataSet : [
            {
              output: "demographics-gender-recode",
              value: "1",
            },
            {
              output: "demographics-gender-recode",
              value: "2",
            },
            {
              output: "demographics-gender-recode",
              value: "3",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "Race/Ethnicity",
        labels: ["Black or African American", "East Asian", "Hispanic, Latina, Latino, or Latinx", "Middle Eastern or North African", "Native American/Alaska Native/First Nations", "Native Hawaiian or other Pacific Islander", "South Asian", "Southeast Asian", "White", "Another race of ethnicity", "Prefer not to answer"],
        dataSet : [
            {
              output: "demographics-race",
              value: "1",
            },
            {
              output: "demographics-race",
              value: "2",
            },
            {
              output: "demographics-race",
              value: "3",
            },
            {
              output: "demographics-race",
              value: "4",
            },
            {
              output: "demographics-race",
              value: "5",
            },
            {
              output: "demographics-race",
              value: "6",
            },
            {
              output: "demographics-race",
              value: "7",
            },
            {
              output: "demographics-race",
              value: "8",
            },
            {
              output: "demographics-race",
              value: "9",
            },
            {
              output: "demographics-race",
              value: "10",
            },
            {
              output: "demographics-race",
              value: "11",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "Race/Ethnicity Census Categories",
        labels : ["Asian or Asian American", "Middle Eastern or North African", "Black or African American", "Hispanic or Latina/o/x", "Native American or Alaska Native", "Native Hawaiian or other Pacific Islander", "White or European American", "Multiracial", "Other Race", "Prefer Not To Answer"],
        dataSet : [
            {
              output: "demographics-race-census",
              value: "1",
            },
            {
              output: "demographics-race-census",
              value: "2",
            },
            {
              output: "demographics-race-census",
              value: "3",
            },
            {
              output: "demographics-race-census",
              value: "4",
            },
            {
              output: "demographics-race-census",
              value: "5",
            },
            {
              output: "demographics-race-census",
              value: "6",
            },
            {
              output: "demographics-race-census",
              value: "7",
            },
            {
              output: "demographics-race-census",
              value: "8",
            },
            {
              output: "demographics-race-census",
              value: "9",
            },
            {
              output: "demographics-race-census",
              value: "10",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Education",
        labels : ["Some high school", "High school graduate", "Some college/Associates degree", "Bachelor’s degree", "Master’s degree", "Professional or doctorate degree", "Prefer Not To Answer"],
        dataSet : [
            {
              output: "demographics-education",
              value: "1",
            },
            {
              output: "demographics-education",
              value: "2",
            },
            {
              output: "demographics-education",
              value: "3",
            },
            {
              output: "demographics-education",
              value: "4",
            },
            {
              output: "demographics-education",
              value: "5",
            },
            {
              output: "demographics-education",
              value: "6",
            },
            {
              output: "demographics-education",
              value: "7",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Disability",
        labels: ["Yes", "No", "Prefer Not To Answer"],
        dataSet : [
            {
              output: "demographics-disability",
              value: "1",
            },
            {
              output: "demographics-disability",
              value: "2",
            },
            {
              output: "demographics-disability",
              value: "3",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Compensation Type",
        labels : ["Annual salary", "Hourly wage", "Stipend", "Voluntary (Unpaid)"],
        dataSet : [
            {
              output: "salary-and-promotion-compensation-type",
              value: "1",
            },
            {
              output: "salary-and-promotion-compensation-type",
              value: "2",
            },
            {
              output: "salary-and-promotion-compensation-type",
              value: "3",
            },
            {
              output: "salary-and-promotion-compensation-type",
              value: "4",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Compared to people at similar position levels in my institution, I think my salary is:",
        labels : ["Above others", "About the same as others", "Below others", "N/A"],
        dataSet : [
            {
              output: "salary-and-promotion-similar-position-institution",
              value: "1",
            },
            {
              output: "salary-and-promotion-similar-position-institution",
              value: "2",
            },
            {
              output: "salary-and-promotion-similar-position-institution",
              value: "3",
            },
            {
              output: "salary-and-promotion-similar-position-institution",
              value: "4",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "radiogroup",
        graphType: "column",
        questionName: "Compared to people at other art museums with comparable position levels, I think my salary is:",
        labels : ["Above others", "About the same as others", "Below others"],
        dataSet : [
            {
              output: "salary-and-promotion-similar-position",
              value: "1",
            },
            {
              output: "salary-and-promotion-similar-position",
              value: "2",
            },
            {
              output: "salary-and-promotion-similar-position",
              value: "3",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "Compared to people at other art museums with comparable position levels, I think my salary is:",
        labels : ["Title Change and Pay Increase", "Title Change But No Pay Increase", "Pay Increase But Title Change","None of the above"],
        dataSet : [
            {
              output: "salary-and-promotion-promotions",
              value: "1",
            },
            {
              output: "salary-and-promotion-promotions",
              value: "2",
            },
            {
              output: "salary-and-promotion-promotions",
              value: "3",
            },
            {
              output: "salary-and-promotion-promotions",
              value: "4",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "Compared to people at other art museums with comparable position levels, I think my salary is:",
        labels : ["Title Change and Pay Increase", "Title Change But No Pay Increase", "Pay Increase But Title Change","None of the above"],
        dataSet : [
            {
              output: "salary-and-promotion-number-of-promotions-no-pay-increase-binned",
              value: "1",
            },
            {
              output: "salary-and-promotion-number-of-promotions-no-pay-increase-binned",
              value: "2",
            },
            {
              output: "salary-and-promotion-number-of-promotions-no-pay-increase-binned",
              value: "3",
            },
            {
              output: "salary-and-promotion-number-of-promotions-no-pay-increase-binned",
              value: "4",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      // 
      // {
      //   questionType: "checkbox",
      //   graphType: "column",
      //   questionName: "Compared to people at other art museums with comparable position levels, I think my salary is:",
      //   labels : ["0","1","2","4","5","6","7","8","9","10+"],
      //   dataSet : [
      //     {
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "1",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "2",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "3",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "4",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "5",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "6",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "7",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "8",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "9",
      //       },
      //       {
      //         output: "salary-and-promotion-number-of-promotions-binned",
      //         value: "10",
      //       },
      //     }
      //   ],
      //   series : ["cohort","tag","all"],
      //   seriesLabel : ["My Organization", "Tag", "All"],
      // },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "Compared to people at other art museums with comparable position levels, I think my salary is:",
        labels : ["Title Change and Pay Increase", "Title Change But No Pay Increase", "Pay Increase But Title Change","None of the above"],
        dataSet : [
            {
              output: "salary-and-promotion-promotions",
              value: "1",
            },
            {
              output: "salary-and-promotion-promotions",
              value: "2",
            },
            {
              output: "salary-and-promotion-promotions",
              value: "3",
            },
            {
              output: "salary-and-promotion-promotions",
              value: "4",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      {
        questionType: "checkbox",
        graphType: "column",
        questionName: "In your current employment situation, how satisfied are you with each of the following characteristics:",
        labels : ["1. not at all satisfied", "2", "3", "4", "5. extremely satisfied"],
        dataSet : [
            {
              output: "staff-satisfaction-satisfaction",
              value: "1",
            },
            {
              output: "staff-satisfaction-satisfaction",
              value: "2",
            },
            {
              output: "staff-satisfaction-satisfaction",
              value: "3",
            },
            {
              output: "staff-satisfaction-satisfaction",
              value: "4",
            },
            {
              output: "staff-satisfaction-satisfaction",
              value: "5",
            },
        ],
        series : ["cohort","tag","all"],
        seriesLabel : ["My Organization", "Tag", "All"],
      },
      // GABE TODO END OF VIS
    ],
    tables: [
    ],
    "survey": {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "multipletext",
              name: "question1",
              title:
                "Approximately how long have you been working in the art museum field?",
              placeHolder: {
                months: 0,
                years: 0,
              },
              isRequired: true,
              items: [
                {
                  name: "years",
                  isRequired: true,
                  inputType: "number",
                  title: "Years",
                },
                {
                  name: "months",
                  inputType: "number",
                  title: "Months",
                  validators: [
                    {
                      type: "expression",
                      text: "Months must be between 0 and 11",
                      expression:
                        "{question1.months} <= 11 and {question1.months} >= 0",
                    },
                  ],
                },
              ],
              itemSize: 0,
              colCount: 2,
            },
            {
              type: "multipletext",
              name: "question2",
              title:
                "And how long have you been working at your current museum (this could be the same as the previous question)?",
              placeHolder: {
                months: 0,
                years: 0,
              },
              isRequired: true,
              items: [
                {
                  name: "years",
                  isRequired: true,
                  inputType: "number",
                  title: "Years",
                },
                {
                  name: "months",
                  inputType: "number",
                  title: "Months",
                  validators: [
                    {
                      type: "expression",
                      text: "Months must be between 0 and 11",
                      expression:
                        "{question2.months} <= 11 and {question2.months} >= 0",
                    },
                  ],
                },
              ],
              itemSize: 0,
              colCount: 2,
            },
            {
              type: "radiogroup",
              name: "question3",
              title:
                "Which of the following best describes your current position level in the museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Voluntary (including unpaid internship)",
                },
                {
                  value: "2",
                  text: "Entry-level",
                },
                {
                  value: "3",
                  text: "Associate/Experienced (non-manager)",
                },
                {
                  value: "4",
                  text: "Manager (with one/more direct reports)",
                },
                {
                  value: "5",
                  text: "Director",
                },
                {
                  value: "6",
                  text: "Executive/Museum Leadership",
                },
                {
                  value: "7",
                  text: "Prefer not to answer",
                },
              ],
            },
          ],
          title: "Page 1",
        },
        {
          name: "page2",
          elements: [
            {
              type: "radiogroup",
              name: "question4",
              title: "What type of position do you have at the museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Full-time/ Permanent employee",
                },
                {
                  value: "2",
                  text: "Part-time employee",
                },
                {
                  value: "3",
                  text: "Temporary employee",
                },
                {
                  value: "4",
                  text: "Seasonal employee",
                },
                {
                  value: "5",
                  text: "Paid intern",
                },
                {
                  value: "6",
                  text: "Unpaid intern",
                },
                {
                  value: "7",
                  text: "Apprentice / Fellow",
                },
                {
                  value: "8",
                  text: "Prefer not to answer",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question5",
              title:
                "Which of the following categories does your current museum position fall into? Please select ALL that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Administration",
                },
                {
                  value: "2",
                  text: "Conservation",
                },
                {
                  value: "3",
                  text: "Collections Information and Management",
                },                
                {
                  value: "4",
                  text: "Curatorial",
                },
                {
                  value: "5",
                  text: "Digital Strategy/Web Development (e.g., graphic design)",
                },
                {
                  value: "6",
                  text: "Diversity/Equity/Inclusion (e.g., in job title/position description)",
                },
                {
                  value: "7",
                  text: "Education",
                },
                {
                  value: "8",
                  text: "Exhibition Design and Construction (includes Fabrication)",
                },
                {
                  value: "9",
                  text: "Facilities / Operations",
                },
                {
                  value: "10",
                  text: "Finance / Accounting",
                },
                {
                  value: "11",
                  text: "Food services / Cafe",
                },
                {
                  value: "12",
                  text: "Gardens/Grounds",
                },
                {
                  value: "13",
                  text: "Human Resources",
                },
                {
                  value: "14",
                  text: "Information Systems and Technology",
                },
                {
                  value: "15",
                  text: "Janitorial",
                },
                {
                  value: "16",
                  text: "Library",
                },
                {
                  value: "17",
                  text: "Marketing/Public Relations/Communications",
                },
                {
                  value: "18",
                  text: "Membership/Development (includes Event Planning)",
                },
                {
                  value: "19",
                  text: "Museum Leadership (includes executive positions)",
                },
                {
                  value: "20",
                  text: "Preparators/Art Handlers",
                },
                {
                  value: "21",
                  text: "Public Engagement",
                },
                {
                  value: "22",
                  text: "Publication/Editorial",
                },
                {
                  value: "23",
                  text: "Registration",
                },
                {
                  value: "24",
                  text: "Research and Evaluation",
                },
                {
                  value: "25",
                  text: "Retail / Museum Store",
                },
                {
                  value: "26",
                  text: "Rights/Reproduction (includes Photography)",
                },
                {
                  value: "27",
                  text: "Security",
                },
                {
                  value: "28",
                  text: "Visitor Services",
                },
                {
                  value: "29",
                  text: "None of the above",
                },
              ],
            },
          ],
          title: "Page 2",
        },
        {
          name: "page3",
          elements: [
            {
              type: "radiogroup",
              name: "question6",
              title: "Are you employed directly by your museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes"
                },
                {
                  value: "2",
                  text: "No, I’m employed by a government agency (e.g., city, county, state)"
                },
                {
                  value: "3",
                  text: "No, I’m employed by a university or college"
                },
              ],
            },

            {           
              type: "radiogroup",
              name: "question7",
              title: "Is your position endowed?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes"
                },
                {
                  value: "2",
                  text: "No"
                },
                {
                  value: "3",
                  text: "I don't know"
                },
              ],
            },

            {
              type: "radiogroup",
              name: "question8",
              title: "Are you a member, or do you have the option of being a member, of a union as part of your museum job?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes, I am a union member for my museum job"
                },
                {
                  value: "2",
                  text: "No, I have the option to be a union member for my museum job but have not chosen to join"
                },
                {
                  value: "3",
                  text: "No, a union is not available for my museum job"
                },
              ],
            },
            {
              type: "radiogroup",
              name: "question9",
              title: "How are you compensated in this position?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Annual salary",
                },
                {
                  value: "2",
                  text: "Hourly wage",
                },
                {
                  value: "3",
                  text: "Stipend",
                },
                {
                  value: "4",
                  text: "This is a voluntary (unpaid) position",
                },
              ],
            },
            {
              type: "panel",
              name: "panel1",
              elements: [
                {
                  type: "text",
                  name: "question10",
                  _comment: "This is broken.  TODO: recode with *numeric* like other text questions",
                  title:
                    "What is your approximate gross annual income (before taxes and deductions) from your current position in the museum? (If this changes from month to month, please provide an average). Report only your income from your museum job and round to the nearest multiple of 1000.",
                  isRequired: true,
                  min: 0,
                  step: 1000,
                  max: 5000000,
                  validators: [
                    {
                      type: "regex",
                      regex: "^[0-9]+$",
                      text: "Please enter a valid number. The response cannot include commas, currency symbols, or spaces (e.g. 50000)",
                    },
                  ],
                },
                {
                  type: "panel",
                  name: "panel2",
                  elements: [
                    {
                      type: "radiogroup",
                      name: "question11",
                      title:
                        "Compared to people at similar position levels (e.g., entry level, associate, manager, executive) in my institution, I think my salary is:",
                      isRequired: true,
                      choices: [
                        {
                          value: "1",
                          text: "Above others",
                        },
                        {
                          value: "2",
                          text: "About the same as others",
                        },
                        {
                          value: "3",
                          text: "Below others",
                        },
                        {
                          value: "4",
                          text: "N/A, there aren’t others in my institution with similar position level",
                        },
                      ],
                    },
                    {
                      type: "radiogroup",
                      name: "question12",
                      title:
                        "Compared to people at other art museums with comparable position levels (e.g., entry level, associate, manager, director, executive), I think my salary is:",
                      isRequired: true,
                      choices: [
                        {
                          value: "1",
                          text: "Above others",
                        },
                        {
                          value: "2",
                          text: "About the same as others",
                        },
                        {
                          value: "3",
                          text: "Below others",
                        },
                      ],
                    },
                  ],
                  title:
                    "Next, we have a few questions about how you think about your salary relative to others in your institution and across the field. If you feel unsure about how much others make, please make your best guess.",
                },
                {
                  type: "panel",
                  name: "panel3",
                  elements: [
                    {
                      type: "checkbox",
                      name: "question13",
                      visibleIf: "{question3} notcontains '1' or {question4} notcontains '6' and {question9} notcontains '4'",
                      title:
                        "Have you ever received any of the following combinations of promotions and pay increases while at your current museum? Select all that apply. (Please consider ONLY pay increases beyond cost of living or inflation adjustment - typically 2-3% per year).",
                      isRequired: true,
                      choices: [
                        {
                          value: "1",
                          text: "A simultaneous promotion with title change and a pay increase beyond cost of living",
                        },
                        {
                          value: "2",
                          text: "A promotion with title change but no accompanying pay increase beyond cost of living",
                        },
                        {
                          value: "3",
                          text: "A pay increase beyond cost of living without a change in title",
                        },
                        {
                          value: "4",
                          text: "None of the above",
                        },
                      ],
                    },
                    {
                      type: "text",
                      name: "question14",
                      visibleIf: "{question13} contains 1",
                      title:
                        "How many times have you received a promotion (with title change and pay increase beyond cost of living) while at your current museum?",
                      isRequired: true,
                      inputType: "number",
                      min: 0,
                      step: 1,
                      max: 25,
                      validators: [
                        {
                          type: "numeric",
                          text: "Please enter a valid number.",
                        },
                      ],
                    },
                    {
                      type: "text",
                      name: "question15",
                      visibleIf: "{question13} contains 2",
                      title:
                        "How many times have you received a promotion (with title change but no accompanying pay increase beyond cost of living) while at your current museum?",
                      isRequired: true,
                      inputType: "number",
                      min: 0,
                      step: 1,
                      max: 25,
                      validators: [
                        {
                          type: "numeric",
                          text: "Please enter a valid number.",
                        },
                      ],
                    },
                    {
                      type: "text",
                      name: "question16",
                      visibleIf: "{question13} contains 3",
                      title:
                        "How many times have you received a pay increase (beyond cost of living) without a change in title while at your current museum?",
                      isRequired: true,
                      inputType: "number",
                      min: 0,
                      step: 1,
                      max: 25,
                      validators: [
                        {
                          type: "numeric",
                          text: "Please enter a valid number.",
                        },
                      ],
                    },
                    {
                      type: "radiogroup",
                      name: "question17",
                      title:
                        "How well does your current compensation from the museum cover your living expenses(e.g., rent, utilities, food, childcare)? My salary is …",
                      isRequired: true,
                      choices: [
                        {
                          value: "1",
                          text: "Always enough to cover living expenses",
                        },
                        {
                          value: "2",
                          text: "Usually enough to cover expenses",
                        },
                        {
                          value: "3",
                          text: "Sometimes enough to cover expenses",
                        },
                        {
                          value: "4",
                          text: "Rarely or never enough to cover expenses",
                        },
                      ],
                    },
                  ],
                  title:
                    "We have just a few more questions about salary and promotions at your institution.",
                },
              ],
              visibleIf: "{question9} < 4",
              requiredIf: "{question9} < 4",
            },
          ],
        },
        {
          name: "page4",
          elements: [
            {
              type: "panel",
              name: "panel4",
              elements: [
                {
                  type: "checkbox",
                  name: "question18",
                  title:
                    "Which of the following statements best represent your museum’s post-COVID return-to-work policy, as it applies to you? Select all that apply.",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "I am/will be working in-person only",
                    },
                    {
                      value: "2",
                      text: "I am/will be working in a hybrid setup where the museum chooses how many and which days to work from home and which days to work from the museum",
                    },
                    {
                      value: "3",
                      text: "I am/will be working in a hybrid setup where I get to choose how many and which days to work from home and which days to work in the museum",
                    },
                    {
                      value: "4",
                      text: "I am/will be working in a hybrid setup where the museum chooses how many days to work from home and how many days to work from the museum and I get to choose which days",
                    },
                    {
                      value: "5",
                      text: "I am/will be working from home only",
                    },
                    {
                      value: "6",
                      text: "I don’t know much about the museum’s return-to-work plans",
                    },
                    {
                      value: "7",
                      _comment: "TODO: this option isn't in the live version of the survey.",
                      text: "Prefer not to answer",
                    },
                  ],
                },
              ],
              title: "Workplace Climate",
              description: "In this section, we will ask you some questions about your museum’s workplace conditions and\norganizational culture. Some of these questions might touch on sensitive topics such as discrimination or\nother negative experiences. If you don’t feel comfortable answering any of these questions, please select “prefer not to answer”.",
            },
          ],
        },
        {
          name: "page5",
          elements: [
            {
              type: "panel",
              name: "panel5",
              elements: [
                {
                  type: "matrix",
                  name: "question19",
                  title:
                    "Please rate how much you agree or disagree with the following statements in relation to the culture of your current museum workplace.",
                  "alternateRows": true,
                  "isAllRowRequired": true,
                  columns: [
                    {
                      value: "1",
                      text: "Strongly Disagree",
                    },
                    {
                      value: "2",
                      text: "Somewhat Disagree",
                    },
                    {
                      value: "3",
                      text: "Neutral",
                    },
                    {
                      value: "4",
                      text: "Somewhat Agree",
                    },
                    {
                      value: "5",
                      text: "Strongly Agree",
                    },
                    {
                      value: "6",
                      text: "Prefer not to answer",
                    },
                  ],
                  rows: [
                    {
                      value: "1",
                      text: "I believe that I can learn and grow in this organization",
                    },
                    { 
                      value: "2",
                      text: "I feel burned out in this organization"
                    },
                    {
                      value: "3",
                      text: "My manager supports me",
                    },
                    {
                      value: "4",
                      text: "I believe performance reviews contribute to growth and/or advancement in my institution",
                    },
                    {
                      value: "5",
                      text: "Diversity and difference are not celebrated in this organization",
                    },
                    {
                      value: "6",
                      text: "I believe that what I do here is meaningful",
                    },
                    {
                      value: "7",
                      text: "The culture of my workplace negatively affects my mental and/or physical health",
                    },
                    {
                      value: "8",
                      text: "Mistakes are held against you in this organization",
                    },
                    {
                      value: "9",
                      text: "I would recommend this workplace to friends and family",
                    },
                    {
                      value: "10",
                      text: "I don’t feel that I have a voice in decision making in this organization",
                    },
                    {
                      value: "11",
                      text: "My institution provides management and/or leadership training for all supervisors",
                    },
                    {
                      value: "12",
                      text: "People in my organization are held accountable for discrimination and harassment",
                    },
                    {
                      value: "13",
                      text: "I feel like I have to hide some of who I am working in this organization",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "page6",
          elements: [
            {
              type: "checkbox",
              name: "question20",
              title:
                "Which of the following statements best reflect the salary sharing practices of your museum workplace? Select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "My workplace shares the specific salaries of all employees publicly",
                },
                {
                  value: "2",
                  text: "My union handbook lists salary levels for each job",
                },
                {
                  value: "3",
                  text: "My workplace shares salary ranges for all positions or levels with employees",
                },
                {
                  value: "4",
                  text: "My workplace posts salary ranges for each open position",
                },
                {
                  value: "5",
                  text: "My workplace actively discourages employees from discussing their salaries"
                },
                {
                  value: "6",
                  text: "None of the above ",
                },
                {
                  value: "7",
                  text: "I don’t know",
                },
              ],
              noneText: "None of the above",
            },
            {
              type: "checkbox",
              name: "question21",
              title:
                "In the past 12 months, have you experienced any of the following in your museum workplace? Select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "My major accomplishments have been acknowledged or recognized ",
                },
                {
                  value: "2",
                  text: "I wasn’t given appropriate resources, materials, or time to execute a job task or responsibility",
                },
                {
                  value: "3",
                  text: "I was given opportunities to do work that will likely help me advance",
                },
                {
                  value: "4",
                  text: "Someone took credit for my accomplishment",
                },
                {
                  value: "5",
                  text: "I developed positive relationships with my coworkers",
                },
                {
                  value: "6",
                  text: "Someone I work with was unfairly blamed or criticized for something",
                },
                {
                  value: "7",
                  text: "I was unfairly blamed or criticized for something",
                },
                {
                  value: "8",
                  text: "Another employee yelled, raised their voice, or spoke to me in an unprofessional manner",
                },
                {
                  value: "9",
                  text: "None of these",
                },
              ],
            },
          ],
        },
        {
          name: "page7",
          elements: [
            {
              type: "radiogroup",
              name: "question22",
              title:
                "Have you ever considered leaving your current museum workplace for another art museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes",
                },
                {
                  value: "2",
                  text: "No",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question23",
              visibleIf: "{question22} = 1",
              title:
                "Which of the following reasons made you consider leaving your current museum workplace for another art museum? Select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Pay is too low",
                },
                {
                  value: "2",
                  text: "Other institutions have more flexible work hours",
                },
                {
                  value: "3",
                  text: "No full-time work is available in this institution",
                },
                {
                  value: "4",
                  text: "Opportunities for growth at the other museum",
                },
                {
                  value: "5",
                  text: "Experiences of discrimination or harassment",
                },
                {
                  value: "6",
                  text: "Lack of opportunities for growth at my museum",
                },
                {
                  value: "7",
                  text: "Unsafe working conditions",
                },
                {
                  value: "8",
                  text: "Positive reputation of the other museum",
                },
                {
                  value: "9",
                  text: "Burnout",
                },
                {
                  value: "10",
                  text: "Desire to live in a different town or city",
                },
                {
                  value: "11",
                  text: "Interpersonal issues with other staff members",
                },
                {
                  value: "12",
                  text: "Poor management",
                },
                {
                  value: "13",
                  text: "I don’t believe my institution can change for the better",
                },
                {
                  value: "14",
                  text: "Personal reasons unrelated to my current museum workplace",
                },
                {
                  value: "15",
                  text: "None of the above",
                },
              ],
            },
          ],
        },
        {
          name: "page8",
          elements: [
            {
              type: "radiogroup",
              name: "question24",
              title: "Have you ever considered leaving the art museum field?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes",
                },
                {
                  value: "2",
                  text: "No",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question25",
              visibleIf: "{question24} = 1",
              title:
                "Which of the following reasons made you consider leaving the art museum field? Select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Pay is too low in art museums",
                },
                {
                  value: "2",
                  text: "Other fields have more flexible work hours",
                },
                {
                  value: "3",
                  text: "More interested in other fields",
                },
                {
                  value: "4",
                  text: "Full-time work is unavailable to me in most art museums",
                },
                {
                  value: "5",
                  text: "Experiences of discrimination or harassment in art museums",
                },
                {
                  value: "6",
                  text: "Lack of opportunities for growth in art museums",
                },
                {
                  value: "7",
                  text: "Unsafe working conditions in art museums",
                },
                {
                  value: "8",
                  text: "Burnout in the art museum field",
                },
                {
                  value: "9",
                  text: "Exciting opportunities in other fields",
                },
                {
                  value: "10",
                  text: "Interpersonal issues with other staff members are common in art museums",
                },
                {
                  value: "11",
                  text: "Poor management in art museums",
                },
                {
                  value: "12",
                  text: "I don’t believe art museums can change for the better",
                },
                {
                  value: "13",
                  text: "Personal reasons unrelated to art and/or museums",
                },
                {
                  value: "14",
                  text: "None of the above",
                },
              ],
            },
          ],
        },
        {
          name: "page9",
          elements: [
          {
              type: "panel",
              name: "panel6",
              elements: [
                {
                  type: "radiogroup",
                  name: "question26",
                  title:
                    "Have you felt discriminated against or harassed on the basis your gender, sexual orientation, racial or ethnic background, social or economic status, religion, age, or disability while working in your current museum workplace?",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "Yes",
                    },
                    {
                      value: "2",
                      text: "No",
                    },
                    {
                      value: "3",
                      text: "Prefer not to answer",
                    },
                  ],
                },
                {
                  type: "radiogroup",
                  name: "question27",
                  visibleIf: "{question26} = 1",
                  title:
                    "How often have you felt discriminated against and/or harassed while working in your current museum workplace?",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "Very frequently (e.g., daily or almost daily)",
                    },
                    {
                      value: "2",
                      text: "Often (e.g., a few times a month)",
                    },
                    {
                      value: "3",
                      text: "Sometimes (e.g., a few times a year) ",
                    },
                    {
                      value: "4",
                      text: "Rarely (e.g., one or two times total)",
                    },
                  ],
                },
                {
                  type: "checkbox",
                  name: "question28",
                  visibleIf: "{question26} = 1",
                  title:
                    "Which of the following forms of discrimination and/or harassment, have you experienced in your current museum workplace? Please select all that apply.",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "Discrimination and/or harassment based on gender (including pregnancy, gender expression, gender identity, etc.)",
                    },
                    {
                      value: "2",
                      text: "Discrimination and/or harassment based on sexual orientation",
                    },
                    {
                      value: "3",
                      text: "Discrimination and/or harassment based on race and/or ethnicity",
                    },
                    {
                      value: "4",
                      text: "Discrimination and/or harassment based on social or economic status",
                    },
                    {
                      value: "5",
                      text: "Discrimination and/or harassment based on religion",
                    },
                    {
                      value: "6",
                      text: "Discrimination and/or harassment based on age",
                    },
                    {
                      value: "7",
                      text: "Discrimination and/or harassment based on disability",
                    },
                    {
                      value: "8",
                      text: "Another form of discrimination and/or harassment",
                    },
                    {
                      value: "9",
                      text: "I don’t know ",
                    },
                  ],
                },
                {
                  type: "checkbox",
                  name: "question29",
                  visibleIf: "{question26} = 1",
                  title:
                    "Have you taken any of the following actions in response to discrimination and/or harassment in your current museum workplace? Please select ALL that apply.",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "I filed an HR complaint form (i.e., in-person or online)",
                    },
                    {
                      value: "2",
                      text: "I talked to an HR staff member who is available to employees",
                    },
                    {
                      value: "3",
                      text: "I used an anonymous reporting mechanism",
                    },
                    {
                      value: "4",
                      text: "I used an employee complaint hotline",
                    },
                    {
                      value: "5",
                      text: "I talked to a neutral employee or manager who can communicate the issues to HR",
                    },
                    {
                      value: "6",
                      text: "I used a third-party reporting process (e.g., use of an ombudsman)",
                    },
                    {
                      value: "7",
                      text: "I used another reporting mechanism",
                    },   
                    {
                      value: "8",
                      text: "I followed a union-provided grievance process for reporting",
                    },              
                    {
                      value: "9",
                      text: "I did something else",
                    },
                    {
                      value: "10",
                      text: "I haven’t done anything in response",
                    },
                  ],
                },
                {
                  type: "radiogroup",
                  name: "question30",
                  visibleIf: "{question29} contains 1 or {question29} contains 2 or {question29} contains 3 or {question29} contains 4 or {question29} contains 5 or {question29} contains 6 or {question29} contains 7",
                  title:
                    "How satisfied are you with how HR and /or the museum resolved your complaint(s) overall?",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "Not at all satisfied",
                    },
                    {
                      value: "2",
                      text: "Somewhat satisfied",
                    },
                    {
                      value: "3",
                      text: "Very satisfied",
                    },
                  ],
                },
                {
                  type: "checkbox",
                  name: "question31",
                  visibleIf: "{question26} = 1",
                  title:
                    "If you have experienced any discrimination or harassment and decided NOT to take action in response, what were your reasons? Select all that apply.",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "I worried about retaliation from people in leadership at the institution",
                    },
                    {
                      value: "2",
                      text: "I worried about retaliation from the person who discriminated against/harassed me",
                    },
                    {
                      value: "3",
                      text: "I didn’t think anything would be done about it",
                    },
                    {
                      value: "4",
                      text: "I didn’t think anything could be done about it because the person who discriminated against/harassed me is not an employee of the museum (e.g., visitor, board member, artist...)",
                    },
                    {
                      value: "5",
                      text: "I didn’t know about what actions I could take",
                    },
                    {
                      value: "6",
                      text: "My workplace doesn’t provide any mechanisms to report discrimination and/or harassment",
                    },
                    {
                      value: "7",
                      text: "I always reported my experiences of discrimination and harassment",
                    },
                    {
                      value: "8",
                      text: "I haven't experienced discrimination or harassment",
                    },
                  ],
                },
              ],
              description: "The next few questions may be distressing for some staff members. We’ll be asking about experiences of discrimination or harassment in your current workplace.",
            },
          ],
        },
        {
          name: "page10",
          elements: [
            {
              type: "matrix",
              name: "question32",
              title:
                "In your current employment situation, how satisfied are you with each of the following characteristics?",
              "alternateRows": true,
              "isAllRowRequired": true,
              columns: [
                {
                  value: "1",
                  text: "not at all satisfied",
                },
                {
                  value: "2",
                  text: "",
                },
                {
                  value: "3",
                  text: "",
                },
                {
                  value: "4",
                  text: "",
                },
                {
                  value: "5",
                  text: "extremely satisfied",
                },
              ],
              rows: [
                {
                  value: "1",
                  text: "Level of pay",
                },
                { 
                  value: "2",
                  text: "Stable and predictable pay"
                },
                {
                  value: "3",
                  text: "Stable and predictable hours",
                },
                {
                  value: "4",
                  text: "Control over hours and/or location (e.g., ability to work flexible hours, work remotely)",
                },
                {
                  value: "5",
                  text: "Job security",
                },
                {
                  value: "6",
                  text: "Employee benefits (e.g., health care, retirement)",
                },
                {
                  value: "7",
                  text: "Career advancement opportunities (e.g., promotion path, learning new skills)",
                },
                {
                  value: "8",
                  text: "Enjoying your day-to-day work (e.g., good coworkers/managers, pleasant work environment, manageable stress level)",
                },
                {
                  value: "9",
                  text: "Having a sense of purpose and dignity in your work",
                },
                {
                  value: "10",
                  text: "Having the power to change things about your job that you’re not satisfied with",
                },
              ],
            },
          ],
        },
        {
          name: "page11",
          elements: [
            {
              type: "checkbox",
              name: "question33",
              title:
                "Thinking about the past 12 months in your workplace (or your total tenure if less than 12 months), which of the following 3 emotions do you most associate with working at your museum? Select up to THREE.",
              maxSelectedChoices: 3,
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Content",
                },
                {
                  value: "2",
                  text: "Worried",
                },
                {
                  value: "3",
                  text: "Excited",
                },
                {
                  value: "4",
                  text: "Sad",
                },
                {
                  value: "5",
                  text: "Connected to others",
                },
                {
                  value: "6",
                  text: "Bored",
                },
                {
                  value: "7",
                  text: "Angry",
                },
                {
                  value: "8",
                  text: "Hopeful",
                },
                {
                  value: "9",
                  text: "Disappointed",
                },
                {
                  value: "10",
                  text: "Inspired",
                },
                {
                  value: "11",
                  text: "None of the above",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question34",
              title:
                "What kind of role, if any, do you have in your museum’s diversity, equity, and inclusion efforts? Select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "I personally incorporate principles of diversity, equity, and inclusion in my overall work",
                },
                {
                  value: "2",
                  text: "I am currently a member of a diversity, equity, and inclusion committee at work",
                },
                {
                  value: "3",
                  text: "I was previously a member of a diversity, equity, and inclusion committee at work",
                },
                {
                  value: "4",
                  text: "My position specifically focuses on diversity, equity, and inclusion",
                },
                {
                  value: "5",
                  text: "None of the above – I am not involved in my museum’s diversity, equity, and inclusion efforts",
                },
                {
                  value: "6",
                  text: "None of the above – I am not clear about how to get involved in my museum’s diversity, equity, and inclusion efforts",
                },
                {
                  value: "7",
                  text: "Not applicable – my museum does not have any efforts towards diversity, equity, and inclusion",
                },                
              ],
            },
            {
              type: "checkbox",
              name: "question35",
              title:
                "To your knowledge, has your museum measured the composition of any of the following groups with respect to gender, race, and ethnicity within the last 3 years? Select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Artists in the collection",
                },
                {
                  value: "2",
                  text: "Board and/or trustee members",
                },
                {
                  value: "3",
                  text: "Staff members",
                },
                {
                  value: "4",
                  text: "Volunteers",
                },
                {
                  value: "5",
                  text: "None of the above",
                },
                {
                  value: "6",
                  text: "I don’t know",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question36",
              title:
                "What/Who do you believe has a large impact on your museum leadership’s decisions? Please select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "The museum’s mission, vision, and/or values",
                },
                {
                  value: "2",
                  text: "The museum board’s priorities",
                },
                {
                  value: "3",
                  text: "Input from museum staff members",
                },
                {
                  value: "4",
                  text: "The interests of current museum visitors",
                },
                {
                  value: "5",
                  text: "The interests of the communities around the museum",
                },
                {
                  value: "6",
                  text: "None of the above/ I don't know",
                },
              ],
            },            

          ],
        },
        { 
          name: "page12",
          elements: [
            {
              type: "panel",
              name: "panel7",
              elements: [
                {
                  type: "text",
                  name: "question37",
                  title: "In what year were you born?",
                  isRequired: true,
                  inputType: "number",
                  autoComplete: "bday-year",
                  min: 1922,
                  max: 2022,
                  step: 1,
                },
                {
                  type: "radiogroup",
                  name: "question38",
                  title: "What is your gender? Please select all that apply.",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "Woman",
                    },
                    {
                      value: "2",
                      text: "Man",
                    },
                    {
                      value: "3",
                      text: "Non-binary/genderqueer/third gender",
                    },
                    {
                      value: "4",
                      text: "Another gender",
                    },                
                    {
                      value: "5",
                      text: "Prefer not to answer",
                    },
                  ],
                },
                {
                  type: "radiogroup",
                  name: "question39",
                  title: "How would you define your sexual orientation?",
                  isRequired: true,
                  choices: [
                    {
                      value: "1",
                      text: "Heterosexual ",
                    },
                    {
                      value: "2",
                      text: "Lesbian ",
                    },
                    {
                      value: "3",
                      text: "Gay",
                    },
                    {
                      value: "4",
                      text: "Bisexual ",
                    },
                    {
                      value: "5",
                      text: "Pansexual ",
                    },
                    {
                      value: "6",
                      text: "Asexual",
                    },
                    {
                      value: "7",
                      text: "I don’t label myself as anything",
                    },
                    {
                      value: "8",
                      text: "Another sexual orientation",
                    },
                    {
                      value: "9",
                      text: "Prefer not to answer",
                    },
                  ],
                },
              ],
              title: "Section 3: DEMOGRAPHICS",
              description: "In this section, we will ask you some personal questions about who you are. We are asking these questions to make sure a diverse group of people participate in this survey. As a reminder, your responses to this survey, including all personal information, will be kept anonymous.",
            },
          ],
        },
        {
          name: "page13",
          elements: [
            {
              type: "checkbox",
              name: "question40",
              title:
                "With which of the following racial and ethnic groups do you identify as? Please select all that apply.",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Black or African American",
                },
                {
                  value: "2",
                  text: "East Asian (including Chinese, Japanese, Korean, Mongolian, Tibetan, and Taiwanese)",
                },
                {
                  value: "3",
                  text: "Hispanic, Latina, Latino, or Latinx",
                },
                {
                  value: "4",
                  text: "Middle Eastern or North African",
                },
                {
                  value: "5",
                  text: "Native American/Alaska Native/First Nations",
                },
                {
                  value: "6",
                  text: "Native Hawaiian or other Pacific Islander",
                },
                {
                  value: "7",
                  text: "South Asian (including Bangladeshi, Bhutanese, Indian, Nepali, Pakistani, and Sri Lankan)",
                },
                {
                  value: "8",
                  text: "Southeast Asian (including Burmese, Cambodian, Filipino, Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean, Thai, and Vietnamese)",
                },
                {
                  value: "9",
                  text: "White",
                },
                {
                  value: "10",
                  text: "Another race of ethnicity",
                },
                {
                  value: "11",
                  text: "Prefer not to answer",
                },
              ],
            },
            {
              type: "radiogroup",
              name: "question41",
              title:
                "What is the highest level of education that you’ve completed?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Some high school",
                },
                {
                  value: "2",
                  text: "High school graduate (high school diploma or the equivalent GED)",
                },
                {
                  value: "3",
                  text: "Some college/Associates degree",
                },
                {
                  value: "4",
                  text: "Bachelor’s degree",
                },
                {
                  value: "5",
                  text: "Master’s degree",
                },
                {
                  value: "6",
                  text: "Professional or doctorate degree",
                },
                {
                  value: "7",
                  text: "Prefer not to answer",
                },                
              ],
            },
            {
              type: "radiogroup",
              name: "question42",
              title:
                "Do you identify as a person with a disability and/or as neuroatypical/neurodivergent?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes",
                },
                {
                  value: "2",
                  text: "No",
                },
                {
                  value: "3",
                  text: "Prefer not to answer",
                },
              ],
            },
          ],
        },
        {
          name: "page14",
          elements: [
            {
              type: "text",
              name: "password",
              title: "Final step: You must create a password to log back in to view results. DO NOT LOSE YOUR PASSWORD as there is no recovery mechanism! This is critical for the preservation of privacy.",
              placeHolder: "Password",
              isRequired: true,
            },
          ],
          title: "Page 13"
        }
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
      completedHtml: "<p><h4>Your answers are being submitted.  <b>Please don't close the page until you see a popup</b> confirming your submission. Please be patient-this might take as long as 1 minute.</h4></p>",
      completeText: "Submit Answers",
      widthMode: "responsive",
    },
    usability: [
      "data_prefilled",
      {
        time_spent: [
          "page",
          "session-area",
          "tables-area",
          "amount-spent",
          "number-MBEs",
          "addressable-spend",
          "review-and-submit",
        ],
      },
      {
        browser: [
          "chrome",
          "edge",
          "msie",
          "firefox",
          "opera",
          "other",
          "safari",
        ],
      },
      {
        validation_errors: [
          "SESSION_KEY_ERROR",
          "SESSION_INFO_ERROR",
          "PARTICIPATION_CODE_ERROR",
          "SESSION_PARTICIPATION_CODE_SERVER_ERROR",
          "UNCHECKED_ERR",
          "GENERIC_TABLE_ERR",
          "SERVER_ERR",
          "GENERIC_SUBMISSION_ERR",
          "NAN_EMPTY_CELLS",
          "SEMANTIC_CELLS",
          "CELL_ERROR",
        ],
      },
    ],
    "cohort_selection": false,
    'cohorts': [
      {"name":"Abroms-Engel Institute for the Visual Arts", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size1"]},
      {"name":"Aldrich", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "New England", "size2"]},
      {"name":"ASU", "tags" : ["College or university-affiliated", "Collecting", "Western", "size2"]},
      {"name":"BAMPFA", "tags" : ["College or university-affiliated", "Collecting", "Western", "size5"]},
      {"name":"Brooklyn", "tags" : ["Culturally-specific", "Collecting", "Mid-Atlantic", "size7"]},
      {"name":"Buffalo AKG", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mid-Atlantic", "size5"]},
      {"name":"CAM Houston", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Mountain Plains", "size2"]},
      {"name":"CAM St Louis", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Midwest", "size2"]},
      {"name":"Chazen", "tags" : ["College or university-affiliated", "Collecting", "Midwest", "size2"]},
      {"name":"Columbus", "tags" : ["Encyclopedic", "Collecting", "Midwest", "size5"]},
      {"name":"Contemporary Austin", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Mountain Plains", "size3"]},
      {"name":"Crocker", "tags" : ["City, state, or county-affiliated", "Collecting", "Western", "size4"]},
      {"name":"Dallas", "tags" : ["City, state, or county-affiliated", "Encyclopedic", "Collecting", "Mountain Plains", "size1"]},
      {"name":"Des Moines", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Midwest", "size3"]},
      {"name":"Dia", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mid-Atlantic", "size6"]},
      {"name":"FAMSF", "tags" : ["City, state, or county-affiliated", "Culturally-specific", "Encyclopedic", "Collecting", "Western", "size7"]},
      {"name":"Frye", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Western", "size3"]},
      {"name":"Guggenheim", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mid-Atlantic", "size7"]},
      {"name":"Harn", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size2"]},
      {"name":"Honolulu", "tags" : ["Encyclopedic", "Collecting", "Western", "size5"]},
      {"name":"ICA LA", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Western", "size1"]},
      {"name":"ICA Philly", "tags" : ["College or university-affiliated", "Contemporary and/or modern-specific", "Non-Collecting", "Mid-Atlantic", "size1"]},
      {"name":"LAPCA", "tags" : ["City, state, or county-affiliated, Culturally-specific", "Non-Collecting", "Western", "size1"]},
      {"name":"Menil", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mountain Plains", "size7"]},
      {"name":"Mint", "tags" : ["City, state, or county-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Collecting", "Southeast", "size5"]},
      {"name":"Mississippi", "tags" : ["Encyclopedic", "Collecting", "Southeast", "size2"]},
      {"name":"MOCA Cleveland", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Midwest", "size2"]},
      {"name":"MOCA LA", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Western", "size7"]},
      {"name":"MOCA North Miami", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Southeast", "size2"]},
      {"name":"Morgan", "tags" : ["Encyclopedic", "Collecting", "Mid-Atlantic", "size6"]},
      {"name":"Nasher at Duke", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size2"]},
      {"name":"Nasher Sculpture", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mountain Plains", "size5"]},
      {"name":"National Gallery", "tags" : ["City, state, or county-affiliated", "Collecting", "Mid-Atlantic", "size7"]},
      {"name":"New Museum", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Mid-Atlantic", "size5"]},
      {"name":"Newark", "tags" : ["Culturally-specific", "Collecting", "Mid-Atlantic", "size6"]},
      {"name":"Oakland", "tags" : ["Culturally-specific", "Collecting", "Western", "size6"]},
      {"name":"Palo Alto Art Center", "tags" : ["City, state, or county-affiliated", "Non-Collecting", "Western", "size1"]},
      {"name":"Parrish", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mid-Atlantic", "size3"]},
      {"name":"Portland Art Museum", "tags" : ["Encyclopedic", "Collecting", "Western", "size6"]},
      {"name":"Queens", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Mid-Atlantic", "size2"]},
      {"name":"Reynolda House Museum of American Art", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size2"]},
      {"name":"Ringling", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size6"]},
      {"name":"SFMOMA", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Western", "size7"]},
      {"name":"SLAM", "tags" : ["City, state, or county-affiliated", "Encyclopedic", "Collecting", "Midwest", "size7"]},
      {"name":"Spelman", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size1"]},
      {"name":"Studio", "tags" : ["Culturally-specific", "Collecting", "Mid-Atlantic", "size6"]},
      {"name":"Toledo", "tags" : ["City, state, or county-affiliated", "Collecting", "Midwest", "size6"]},
      {"name":"UMMA", "tags" : ["College or university-affiliated", "Collecting", "Midwest", "size4"]},
      {"name":"Visual Arts Center NJ", "tags" : ["Contemporary and/or modern-specific", "Non-Collecting", "Mid-Atlantic", "size2"]},
      {"name":"Walker", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Midwest", "size7"]},
      {"name":"Weatherspoon", "tags" : ["College or university-affiliated", "Collecting", "Southeast", "size1"]},
      {"name":"Weisman", "tags" : ["College or university-affiliated", "Collecting", "Midwest", "size2"]},
      {"name":"Williams", "tags" : ["College or university-affiliated", "Collecting", "New England", "size2"]},
      {"name":"Worcester", "tags" : ["Encyclopedic", "Collecting", "New England", "size5"]},
      {"name":"Perez Art Museum Miami", "tags" : ["Contemporary and/or modern-specific", "Culturally-specific", "Collecting", "Southeast", "size5"]},
      {"name":"Portland Museum of Art", "tags" : ["Contemporary and/or modern-specific", "Collecting", "New England", "size4"]},
      {"name":"Kemper Museum of Contemporary Art", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Midwest", "size2"]},
      {"name":"Modern Fort Worth", "tags" : ["Contemporary and/or modern-specific", "Collecting", "Mountain Plains", "size5"]},
      {"name":"San Antonio Museum of Art", "tags" : ["Encyclopedic", "Collecting", "Mountain Plains", "size4"]},
    ],
    'cohort_threshold': 8,    
    "send_submitter_ids": false,
    "dragAndDropInput" : false,
    contains_tables: false,
    contains_survey: true
  };
});
