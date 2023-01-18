if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    computation: {
      newVariables: {
        "newVarSeniority": {
          operation: "bin",
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
      },
      filters: {
        "filterSeniority" : {
          question: "newVarSeniority",
        },
        "filterPosition" : {
          question: "question4",
        },
      },
      outputs: [
        {
          name: "test-survey-1",
          inputQuestions: ["question1"],
          function: "mean",
          filters: ["filterSeniority"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags: [],
          },
        },
        {
          name: "test-survey-2",
          inputQuestions: ["question2"],
          function: "mean",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags: [],
          },
        },
        {
          name: "test-survey-3",
          inputQuestions: ["newVarSeniority"],
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags: [],
          },
        },
        {
          name: "test-survey-4",
          inputQuestions: ["question4"],
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags: [],
          },
        },
      ],
    },
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
              defaultValue: {
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
                "And how long have you been working at your current museum (this could be the same as the previous question)?",
              defaultValue: {
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
                  text: "Manager",
                },
                {
                  value: "5",
                  text: "Director",
                },
                {
                  value: "6",
                  text: "Executive",
                },
                {
                  value: "7",
                  text: "Prefer not to answer",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question4",
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
          title: "Page 1",
        },
        {
          name: "page2",
          elements: [
            {
              type: "text",
              name: "password",
              title: "Final step: You must create a password to log back in to view results. DO NOT LOSE YOUR PASSWORD as there is no recovery mechanism! This is critical for the preservation of privacy.",
              placeHolder: "Password",
              isRequired: true,
            },
          ],
          title: "Page 2"
        },
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
      completedHtml: "<p><h4>Your answers are being submitted.  Please don't close the page until you see a popup confirming your submission.</h4></p>",
      completeText: "Proceed to Data Submission Step",
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
      {"name": 'Abroms-Engel Institute for the Visual Arts at the University of Alabama Birmingham', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Aldrich Contemporary Art Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Arizona State University Art Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Berkeley Art Museum & Pacific Film Archive', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Birmingham Museum of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Brooklyn Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Buffalo AKG', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Cincinnati Museum of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Contemporary Art Museum Houston', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Contemporary Art Museum St. Louis', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Crocker Art Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Dallas Museum of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Dia Art Foundation', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Fine Arts Museums of San Francisco', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Henry Art Gallery', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Institute of Contemporary Art Los Angeles', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Institute of Contemporary Art Philadelphia', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'MASS MoCA', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'McNay Art Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Mississippi Museum of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Museum of Contemporary Art Chicago', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Museum of Contemporary Art Cleveland', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Museum of Contemporary Art Denver', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Museum of Contemporary Art Los Angeles', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Museum of Fine Art Houston', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'National Gallery of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'New Orleans Museum of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Oakland Museum of California', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Perez Art Museum Miami', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Pulitzer Arts Foundation', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Queens Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Saint Louis Art Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'SFMOMA', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Speed Art Museum', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Spelman College Museum of Fine Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Studio Museum in Harlem', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'The Contemporary Austin', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'Toledo Museum of Art', "tags":["EastCoast", "Large", "Archival"]},
      {"name": 'University of Michigan Museum of Art', "tags":["EastCoast", "Large", "Archival"]}
    ],
    'cohort_threshold': 8,    
    "send_submitter_ids": false,
    "dragAndDropInput" : false,
    "contains_tables": false,
    "contains_survey": true,
  };
});
