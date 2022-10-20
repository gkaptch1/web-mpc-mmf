if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
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
                  text: "Paid intern",
                },
                {
                  value: "5",
                  text: "Unpaid intern",
                },
                {
                  value: "6",
                  text: "Apprentice / Fellow",
                },
                {
                  value: "7",
                  text: "Freelancer/consultant/contractor who works across institutions",
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
                  text: "Conservation",
                },
                {
                  value: "2",
                  text: "Curatorial",
                },
                {
                  value: "3",
                  text: "Digital Strategy/Web Development (e.g., graphic design)",
                },
                {
                  value: "4",
                  text: "Diversity/Equity/Inclusion",
                },
                {
                  value: "5",
                  text: "Education",
                },
                {
                  value: "6",
                  text: "Exhibition Design and Construction (includes Fabrication)",
                },
                {
                  value: "7",
                  text: "Facilities / Operations",
                },
                {
                  value: "8",
                  text: "Finance / Accounting",
                },
                {
                  value: "9",
                  text: "Gardens/Grounds",
                },
                {
                  value: "10",
                  text: "Human Resources",
                },
                {
                  value: "11",
                  text: "Information Technology",
                },
                {
                  value: "12",
                  text: "Library",
                },
                {
                  value: "13",
                  text: "Marketing/Public Relations",
                },
                {
                  value: "14",
                  text: "Membership/Development (includes Event Planning)",
                },
                {
                  value: "15",
                  text: "Museum Leadership (includes executive positions)",
                },
                {
                  value: "16",
                  text: "Preparators/Art Handlers",
                },
                {
                  value: "17",
                  text: "Public Engagement",
                },
                {
                  value: "18",
                  text: "Publication/Editorial",
                },
                {
                  value: "19",
                  text: "Registration",
                },
                {
                  value: "20",
                  text: "Retail / Museum Store",
                },
                {
                  value: "21",
                  text: "Rights/Reproduction (includes Photography)",
                },
                {
                  value: "22",
                  text: "Security",
                },
                {
                  value: "23",
                  text: "Administration",
                },
                {
                  value: "24",
                  text: "Visitor Services",
                },
                {
                  value: "25",
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
                  text: "No, I’m employed by a government agency (e.g., city, county, state, etc.)"
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
                  max: 600000,
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
                      visibleIf: "{question4} < 5 or {question4} > 5 and {question9} < 4",
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
                      visibleIf: "{question13} = 1",
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
                      visibleIf: "{question13} = 2",
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
                      visibleIf: "{question13} = 3",
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
                  text: "My manager is there for me and supports me",
                },
                {
                  value: "4",
                  text: "Diversity and difference are not celebrated in this organization",
                },
                {
                  value: "5",
                  text: "I believe that what I do here is meaningful",
                },
                {
                  value: "6",
                  text: "The culture of my workplace negatively affects my mental and/or physical health",
                },
                {
                  value: "7",
                  text: "Mistakes are held against you in this organization",
                },
                {
                  value: "8",
                  text: "I would recommend this workplace to friends and family",
                },
                {
                  value: "9",
                  text: "I don’t feel that I have a voice in decision making in this organization",
                },
                {
                  value: "10",
                  text: "I feel comfortable speaking up about unfairness, discrimination, and harassment without fear of retaliation in this organization",
                },
                {
                  value: "11",
                  text: "I feel like I have to hide some of who I am working in this organization",
                },
              ],
            },
          ],
          title: "WORKPLACE CLIMATE",
          description:
            "In this section, we will ask you some questions about your museum’s workplace conditions and\norganizational culture. Some of these questions might touch on sensitive topics such as discrimination or\nother negative instances. If you don’t feel comfortable answering any of these questions, please feel\nfree to skip them or select “prefer not to answer”.",
        },
        {
          name: "page5",
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
                  text: "I received a performance review",
                },
                {
                  value: "9",
                  text: "Another employee yelled, raised their voice, or spoke to me in an unprofessional manner",
                },
                {
                  value: "10",
                  text: "None of these",
                },
              ],
            },
          ],
        },
        {
          name: "page6",
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
                  text: "Experiences of discrimination or harassment",
                },
                {
                  value: "5",
                  text: "Lack of opportunities for growth",
                },
                {
                  value: "6",
                  text: "Unsafe working conditions",
                },
                {
                  value: "7",
                  text: "Burnout",
                },
                {
                  value: "8",
                  text: "Interpersonal issues with other staff members",
                },
                {
                  value: "9",
                  text: "Poor management",
                },
                {
                  value: "10",
                  text: "I don’t believe my institution can change for the better",
                },
                {
                  value: "11",
                  text: "Personal reasons unrelated to my current museum workplace",
                },
                {
                  value: "12",
                  text: "None of the above",
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
                  text: "Full-time work is unavailable to me in most art museums",
                },
                {
                  value: "4",
                  text: "Experiences of discrimination or harassment in art museums",
                },
                {
                  value: "5",
                  text: "Lack of opportunities for growth in art museums",
                },
                {
                  value: "6",
                  text: "Unsafe working conditions in art museums",
                },
                {
                  value: "7",
                  text: "Burnout in the art museum field",
                },
                {
                  value: "8",
                  text: "Interpersonal issues with other staff members are common in art museums",
                },
                {
                  value: "9",
                  text: "Poor management in art museums",
                },
                {
                  value: "10",
                  text: "Less interested in art or art museums",
                },
                {
                  value: "11",
                  text: "I don’t believe art museums can change for the better",
                },
                {
                  value: "12",
                  text: "Personal reasons unrelated to art and/or museums",
                },
                {
                  value: "13",
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
              name: "question26",
              title:
                "Have you felt discriminated against or harassed on the basis of a protected characteristic (e.g., gender, sexual orientation, racial or ethnic background, social or economic status, age, disability...) while working in your current museum workplace?",
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
                "Which of the following forms of discrimination and/or harassment, have you experienced in your current museum workplace? Please select ALL that apply.",
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
                  text: "Discrimination and/or harassment based on age",
                },
                {
                  value: "6",
                  text: "Discrimination and/or harassment based on disability",
                },
                {
                  value: "7",
                  text: "Another form of discrimination and/or harassment",
                },
                {
                  value: "8",
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
              visibleIf: "{question29} < 9",
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
        },
        {
          name: "page9",
          elements: [
            {
              type: "checkbox",
              name: "question32",
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
              name: "question33",
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
              name: "question34",
              title:
                "To your knowledge, has your museum measured the composition of any of the following groups with respect to gender, race, and ethnicity within the last 3 years? Select ALL that apply.",
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
                  text: "None of the above",
                },
                {
                  value: "5",
                  text: "I don’t know",
                },
              ],
            },
            {
              type: "checkbox",
              name: "question35",
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
                  text: "None of the above",
                },
              ],
            },            

          ],
        },
        {
          name: "page10",
          elements: [
            {
              type: "text",
              name: "question36",
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
              name: "question37",
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
              name: "question38",
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
          description:
            "In this section, we will ask you some personal questions about who you are. We are asking these questions to make sure a diverse group of people participate in this survey. As a reminder, your responses to this survey, including all personal information, will be kept anonymous.",
        },
        {
          name: "page11",
          elements: [
            {
              type: "checkbox",
              name: "question39",
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
              name: "question40",
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
              name: "question41",
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
          name: "page12",
          elements: [
            {
              type: "text",
              name: "password",
              title: "Final step: You must create a password to log back in to view results. DO NOT LOSE YOUR PASSWORD as there is no recovery mechanism! This is critical for the preservation of privacy.",
              placeHolder: "Password",
              isRequired: true,
            },
          ],
          title: "Page 12"
        }
      ],
      showPageTitles: false,
      clearInvisibleValues: "none",
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
    contains_tables: false,
    contains_survey: true
  };
});
