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
        "newVarSalaryCategories": {
          operation: "numericBin",
          choices: [
            {
              value: "1",
              waysToGetThere: [
                {
                  question: "question10",
                  minValue : 0,
                  maxValue : 24999,
                },
                {
                  question: "question10",
                  minValue : 25000,
                  maxValue : 49999,
                },
                {
                  question: "question10",
                  minValue : 50000,
                  maxValue : 74999,
                },
                {
                  question: "question10",
                  minValue : 75000,
                  maxValue : 99999,
                },
                {
                  question: "question10",
                  minValue : 100000,
                  maxValue : 149999,
                },
                {
                  question: "question10",
                  minValue : 150000,
                  maxValue : 199999,
                },
                {
                  question: "question10",
                  minValue : 200000,
                  maxValue : 299999,
                },
                {
                  question: "question10",
                  minValue : 300000,
                  maxValue : "Infinity",
                },
              ]
            }
          ]
        },
        "newVarSalaryParityGender" : {
          "_comment" : "GABE TODO",
        },
        "newVarSalaryParityRace" : {
          "_comment" : "GABE TODO",
        },
        "newVarPerceptionAccuracy" : {
          "_comment" : "GABE TODO",
        },
        "newVarPromotionRate" : {
          "_comment" : "GABE TODO",
        },
        "newVarPromotionParityGender" : {
          "_comment" : "GABE TODO",
        },
        "newVarPostCovidWork" : {
          "_comment" : "GABE TODO",
        },
        "newVarTransparencyScore" : {
          "_comment" : "GABE TODO",
        },
        "newVarCultureScore" : {
          "_comment" : "GABE TODO",
        },
        "newVarCultureParityGender" :{
          "_comment" : "GABE TODO",
        },
        "newVarCultureParityRace" :{
          "_comment" : "GABE TODO",
        },
      },
      filters: {
        "seniority-entry": {
          options: [
            {
              question: "newVarSeniority",
              type: "newVariables",
              value: "1"
            }
          ]
        },
        "seniority-mid": {
          options: [
            {
              question: "newVarSeniority",
              type: "newVariables",
              value: "2"
            }
          ]
        },
        "seniority-senior": {
          options: [
            {
              question: "newVarSeniority",
              type: "newVariables",
              value: "3"
            }
          ]
        },
        "typeOfPosition": {
        },
        "positionCategories":  {
        },
        "employerType":  {
        },
        "unionMembership":  {
        },
        "postCovidWork":  {
        },
        "discrimination":  {
        },
        "age":  {
        },
        "gender":  {
        },
        "sexualOrientation":  {
        },
        "raceAndEthnicity":  {
        },
        "education":  {
        },
        "disability":  {
        },
      },
      outputs: [
        {
          name: "staff-survey-1",
          inputQuestions: ["question1"],
          timing: "beforeOpening",
          function: "mean",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags: [],
          },
        },
        {
          name: "staff-survey-2",
          inputQuestions: ["question2"],
          timing: "beforeOpening",
          function: "mean",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-3",
          inputQuestions: ["newVarSeniority"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-4",
          inputQuestions: ["question4"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-5",
          inputQuestions: ["question5"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-6",
          inputQuestions: ["question6"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-7",
          inputQuestions: ["question7"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-8",
          inputQuestions: ["question8"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-9",
          inputQuestions: ["question9"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-10",
          inputQuestions: ["question10"],
          timing: "beforeOpening",
          function: "mean",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-11",
          inputQuestions: ["question11"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-11",
          inputQuestions: ["question11"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-12",
          inputQuestions: ["question12"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-13",
          inputQuestions: ["question13"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-14",
          inputQuestions: ["question14","question2"],
          timing: "afterOpening",
          function: "division",
          _comment: "We can just compute this as a linear function of existing outputs.  Division not worth it"
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-15",
          inputQuestions: ["question15","question2"],
          timing: "afterOpening",
          function: "division",
          _comment: "We can just compute this as a linear function of existing outputs.  Division not worth it"
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-16",
          inputQuestions: ["question16","question2"],
          timing: "afterOpening",
          function: "division",
          _comment: "We can just compute this as a linear function of existing outputs.  Division not worth it"
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-17",
          inputQuestions: ["question17"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-18",
          inputQuestions: ["question18"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-19",
          _comment : "TODO After the computation we need to combine the boxes"
          inputQuestions: ["question19"],
          timing: "beforeOpening",
          function: "matrixSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-20",
          inputQuestions: ["question20"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-21",
          inputQuestions: ["question21"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-22",
          inputQuestions: ["question22"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-23",
          inputQuestions: ["question23"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-24",
          inputQuestions: ["question24"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-25",
          inputQuestions: ["question25"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-26",
          inputQuestions: ["question26"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-27",
          inputQuestions: ["question27"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-28",
          inputQuestions: ["question28"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-29",
          inputQuestions: ["question29"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-30",
          inputQuestions: ["question30"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-31",
          inputQuestions: ["question31"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-32",
          _comment : "TODO After the computation we need to combine the boxes"
          inputQuestions: ["question32"],
          timing: "beforeOpening",
          function: "matrixSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-33",
          inputQuestions: ["question33"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-34",
          inputQuestions: ["question34"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-35",
          inputQuestions: ["question35"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-36",
          inputQuestions: ["question36"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-37",
          inputQuestions: ["question37"],
          timing: "beforeOpening",
          function: "mean",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-38",
          inputQuestions: ["question38"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-39",
          inputQuestions: ["question39"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-40",
          inputQuestions: ["question40"],
          timing: "beforeOpening",
          function: "checkboxSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-41",
          inputQuestions: ["question41"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
        {
          name: "staff-survey-42",
          inputQuestions: ["question42"],
          timing: "beforeOpening",
          function: "radiogroupSum",
          filters: [],
          outputParties: {
            analyst: "true",
            cohort: "true",
            tags : [],
          }
        },
      ]
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
