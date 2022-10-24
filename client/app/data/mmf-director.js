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
                "In your last complete fiscal year, approximately what proportion (%) of your annual budget was allocated to staff compensation and benefits? (Please exclude any non-numeric characters)",
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
                "For your last complete fiscal year, approximately what proportion (%) of your organization’s revenue was directly contributed by board members? (Please exclude any non-numeric characters)",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
                      },
                    ],
                },
              ],
            },
            {
              type: "multipletext",
              name: "question6",
              title:
                "Keeping in mind just your board members who are on the Finance and/or Executive committees, how many members of each race and ethnicity do you have? Please mark 0 where applicable in the categories below. (if any of the committee members fall into more than one of these categories, please select “another race or ethnicity”)",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
                        maxValue: 75,
                        text: "Please enter a number between 0 and 75",
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
              title: "What’s the governance structure of your museum?",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "My museum has an independent governance board",
                },
                {
                  value: "2",
                  text: "My museum has the same board as the university",
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
      completedHtml: "<p><h4>Your answers are being submitted.  <b>Please don't close the page until you see a popup</b> confirming your submission.  Please be patient-this might take as long as 1 minute.</h4></p>",
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
    "contains_tables": false,
    "contains_survey": true
    };
});
