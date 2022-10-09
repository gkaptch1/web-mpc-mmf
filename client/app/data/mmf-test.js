if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    tables: [
    ],
    "survey": {
      title: "2022 MMF Data Study",
      logoPosition: "right",
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
          ],
          title: "Page 1",
        },
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
      showPreviewBeforeComplete: "showAnsweredQuestions",
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
  };
});
