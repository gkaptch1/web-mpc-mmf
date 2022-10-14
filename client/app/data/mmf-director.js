if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    tables: [],
    survey: {
      title: "2022 MMF Data Study - Directory Survey",
      logoPosition: "right",
      pages: [
        {
          name: "page1",
          title: "Page 1",
          elements: [
            {
              type: "radiogroup",
              name: "question1",
              title: "Through what group or fund is your salary as a museum director predominantly (or wholly) paid??",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "The general budget of my museum",
                },
                {
                  value: "2",
                  text: "An endowment for a named position",
                },
                {
                  value: "3",
                  text: "Another form of endowment",
                },
                {
                  value: "4",
                  text: "A municipality",
                },
                {
                  value: "5",
                  text: "A university",
                },
                {
                  value: "6",
                  text: "Other",
                },
              ],
            },
            {
              type: "text",
              name: "question2",
              title:
                "In your last complete fiscal year, what proportion of your annual budget was allocated to staff compensation and benefits? ",
              placeHolder : "XX%",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "Must be between 0 and 100",
                  expression:
                    "{question2} <= 100 and {question2} >= 0",
                },
              ],
            },
            {
              type: "text",
              name: "question3",
              title:
                "For your last complete fiscal year, what proportion of your organization’s revenue was directly contributed by board members?",
              placeHolder : "XX%",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "expression",
                  text: "Must be between 0 and 100",
                  expression:
                    "{question3} <= 100 and {question3} >= 0",
                },
              ],
            },
          ],
        },
        {
          name: "page2",
          title: "Page 2",
          elements: [
            {
              type: "radiogroup",
              name: "question4",
              title: "Do you know the gender, race, and ethnicity of each of your board members",
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
              type: "multipletext",
              name: "question5",
              title: "Keeping in mind just your board members who are on the Finance and/or Executive committees, how many members of each gender do you have?",
              visibleIf: "{question4} = 1",
              isRequired: true,             
              colCount: 2,
              items: [
                {
                  name: "female",
                  isRequired: true,
                  inputType: "number",
                  title: "Female",
                },
                {
                  name: "male",
                  isRequired: true,
                  inputType: "number",
                  title: "Male",
                },
                {
                  name: "queergender",
                  isRequired: true,
                  inputType: "number",
                  title: "Queergender",
                },
                {
                  name: "another",
                  isRequired: true,
                  inputType: "number",
                  title: "Another Gender",
                },
              ],
            },
            {
              type: "multipletext",
              name: "question6",
              title:
                "Keeping in mind just your board members who are on the Finance and/or Executive committees, how many members of each gender do you have?",
              visibleIf: "{question4} = 1",
              isRequired: true,
              items: [
                {
                  name: "black",
                  isRequired: true,
                  inputType: "number",
                  title: "African American or Black",
                },
                {
                  name: "eastasian",
                  isRequired: true,
                  inputType: "number",
                  title: "East Asian (including Chinese, Japanese, Korean, Mongolian, Tibetan, and Taiwanese)",
                },
                {
                  name: "hispanic",
                  isRequired: true,
                  inputType: "number",
                  title: "Hispanic, Latina, Latino, or Latinx",
                },
                {
                  name: "middleeastern",
                  isRequired: true,
                  inputType: "number",
                  title: "Middle Eastern or North African",
                },
                {
                  name: "nativeamerican",
                  isRequired: true,
                  inputType: "number",
                  title: "Native American/Alaska Native/First Nations",
                },
                {
                  name: "nativehawaiian",
                  isRequired: true,
                  inputType: "number",
                  title: "Native Hawaiian or other Pacific Islander",
                },
                {
                  name: "southasian",
                  isRequired: true,
                  inputType: "number",
                  title: "South Asian (including Bangladeshi, Bhutanese, Indian, Nepali, Pakistani, and Sri Lankan)",
                },
                {
                  name: "southeastasian",
                  isRequired: true,
                  inputType: "number",
                  title: "Southeast Asian (including Burmese, Cambodian, Filipino, Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean, Thai, and Vietnamese)",
                },
                {
                  name: "white",
                  isRequired: true,
                  inputType: "number",
                  title: "White",
                },
                {
                  name: "another",
                  isRequired: true,
                  inputType: "number",
                  title: "Another race or ethnicity",
                  validators: [
                    {
                      type: "expression",
                      text: "Values must be between 0 and 100",
                      expression:
                        "question5.black <= 100 and question5.eastasian <= 100 and question5.hispanic <= 100 and question5.middleeastern <= 100 and question5.nativeamerican <= 100 and question5.nativehawaiian <= 100 and question5.southasian <= 100 and question5.southeastasian <= 100 and question5.white <= 100 and question5.another <= 100",
                    },
                  ],
                },
              ],
              colCount: 1,
            },
          ],
        },
        {
          name: "page3",
          elements: [
            {
              type: "radiogroup",
              name: "question7",
              title: "Is your museum part of a university or college?",
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
              type: "radiogroup",
              name: "question8",
              visibleIf: "{question7} = 1",
              title: "Is your museum part of a university or college?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Yes, my museum has an independent governance board",
                },
                {
                  value: "2",
                  text: "No, my museum has the same board as the university",
                },
              ],
            },
          ]
        },
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
      completedHtml: "<p><h4>Almost there!  Please make a password and hit Submit below!</h4></p>",
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
    cohort_selection: false,
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
    send_submitter_ids: true,
    "dragAndDropInput" : true,
    contains_tables: false,
    contains_survey: true
    };
});
