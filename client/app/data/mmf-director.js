if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    tables: [],
    survey: {
      pages: [
        {
          name: "page1",
          title: "Page 1",
          elements: [
            {
              type: "radiogroup",
              name: "question1",
              title: "Through what group or fund is your salary as a museum director predominantly (or wholly) paid?",
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
                "In your last complete fiscal year, approximately what proportion of your annual budget was allocated to staff compensation and benefits? (Please exclude any non-numeric characters)",
              placeHolder : "XX",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "numeric",
                  text: "Must be between 0 and 100, and exclude any non-numeric characters (eg. no % symbol)",
                  minValue: 0,
                  maxValue: 100,
                },
              ],
            },
            {
              type: "text",
              name: "question3",
              title:
                "For your last complete fiscal year, approximately what proportion of your organization’s revenue was directly contributed by board members? (Please exclude any non-numeric characters)",
              placeHolder : "XX",
              inputType: "number",
              isRequired: true,
              validators: [
                {
                  type: "numeric",
                  text: "Must be between 0 and 100, and exclude any non-numeric characters (eg. no % symbol)",
                  minValue: 0,
                  maxValue: 100,
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
              title: "Keeping in mind just your board members who are on the Finance and/or Executive committees, how many members of each gender do you have? Please mark 0 where applicable in the categories below.",
              visibleIf: "{question4} = 1",
              isRequired: true,             
              colCount: 2,
              items: [
                {
                  name: "woman",
                  isRequired: true,
                  inputType: "number",
                  title: "Woman",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "man",
                  isRequired: true,
                  inputType: "number",
                  title: "Man",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "queergender",
                  isRequired: true,
                  inputType: "number",
                  title: "Non-binary/genderqueer/third gender",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "another",
                  isRequired: true,
                  inputType: "number",
                  title: "Another Gender",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
              ],
            },
            {
              type: "multipletext",
              name: "question6",
              title:
                "Keeping in mind just your board members who are on the Finance and/or Executive committees, how many members of each gender do you have? Please mark 0 where applicable in the categories below.",
              visibleIf: "{question4} = 1",
              isRequired: true,
              items: [
                {
                  name: "black",
                  isRequired: true,
                  title: "African American or Black",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],    
                },
                {
                  name: "eastasian",
                  isRequired: true,
                  title: "East Asian (including Chinese, Japanese, Korean, Mongolian, Tibetan, and Taiwanese)",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],    
                },
                {
                  name: "hispanic",
                  isRequired: true,
                  title: "Hispanic, Latina, Latino, or Latinx",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "middleeastern",
                  isRequired: true,
                  title: "Middle Eastern or North African",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],                },
                {
                  name: "nativeamerican",
                  isRequired: true,
                  title: "Native American/Alaska Native/First Nations",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "nativehawaiian",
                  isRequired: true,
                  title: "Native Hawaiian or other Pacific Islander",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "southasian",
                  isRequired: true,
                  title: "South Asian (including Bangladeshi, Bhutanese, Indian, Nepali, Pakistani, and Sri Lankan)",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "southeastasian",
                  isRequired: true,
                  title: "Southeast Asian (including Burmese, Cambodian, Filipino, Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean, Thai, and Vietnamese)",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "white",
                  isRequired: true,
                  title: "White",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
                      },
                    ],
                },
                {
                  name: "another",
                  isRequired: true,
                  title: "Another race or ethnicity",
                  validators: [
                      {
                        type: "numeric",
                        minValue: 0,
                        maxValue: 100,
                        text: "Please enter a number between 0 and 100",
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
        {
          name: "page4",
          elements: [
            {
              type: "text",
              name: "password",
              title: "Final step: You must create a password to log back in to view results. DO NOT LOSE YOUR PASSWORD as there is no recovery mechanism! This is critical for the preservation of privacy.",
              placeHolder: "Password",
              isRequired: true,
            },
          ],
          title: "Page 4"
        },
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
      completedHtml: "<p><h4>Thank you for completing the survey! We are grateful for your time and for your contribution to this fieldwide initiative.</h4></p><p><h4>Your answers are being submitted.  Please don't close the page until you see a popup confirming your submission.</h4></p>",
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
    "send_submitter_ids": false,
    "dragAndDropInput" : false,
    "contains_tables": false,
    "contains_survey": true
    };
});
