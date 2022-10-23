if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    tables: [
      {
        name: "Table 1 - How many people are currently employed by your organization in each of the following categories? Please choose the best single category for each employee if more than one could apply.",
        element: "position-employee",
        //The format for linear regression is an array of pairs where each pair is an array of the independent variable
        //followed by the dependent variable. The independent variable and dependent variable are both arrays of two elements,
        //the first is the name of the row, the second is the name of the column
        operations: {
          SUM: true,
          STD: true,
          LIN: [
            [
              ["num_paintings", "value"],
              ["age", "value"],
            ],
          ],
        },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "ft_employees",
            label: "Full-Time Employees",
          },
          {
            key: "pt_employees",
            label: "Part-time",
          },
          {
            key: "temp_employees",
            label: "Temporary",
          },
          {
            key: "seasonal_employees",
            label: "Seasonal employee",
          },
          {
            key: "paid_intern",
            label: "Paid intern",
          },
          {
            key: "unpaid_intern",
            label: "Unpaid Intern",
          },
          {
            key: "apprentice",
            label: "Apprentice/Fellow",
          },
        ],
        cols: [
          [
            {
              key: "num",
              label: "Number of employees",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 1000,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "1. Employee general",
            start: "B9",
            end: "B15",
            firstrow: "Full-Time Employees",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 2 - In the past calendar year, how many full-time staff in your organization received an annual salary/compensation of...",
        element: "ft-comp",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "lessthan25",
            label: "Less than $25,000",
          },
          {
            key: "25to50",
            label: "$25,000 - $49,999",
          },
          {
            key: "50to75",
            label: "$50,000 - $74,999",
          },
          {
            key: "75to100",
            label: "$75,000 - $99,999",
          },
          {
            key: "100to150",
            label: "$100,000 - $149,999",
          },
          {
            key: "150to200",
            label: "$150,000 - $199,999",
          },
          {
            key: "200to300",
            label: "$200,000 - $299,999",
          },
          {
            key: "morethan300",
            label: "More than $300,000",
          },
        ],
        cols: [
          [
            {
              key: "num",
              label: "Number of employees",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 1000,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "2. Compensation",
            start: "B10",
            end: "B17",
            firstrow: "Less than $25,000",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 3 - In the past calendar year, how many part-time staff, seasonal staff, temporary staff, and paid interns in your organization received an annual salary/compensation of...",
        element: "pt-comp",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "lessthan25",
            label: "Less than $25,000",
          },
          {
            key: "25to50",
            label: "$25,000 - $49,999",
          },
          {
            key: "50to75",
            label: "$50,000 - $74,999",
          },
          {
            key: "75to100",
            label: "$75,000 - $99,999",
          },
          {
            key: "100to150",
            label: "$100,000 - $149,999",
          },
          {
            key: "150to200",
            label: "$150,000 - $199,999",
          },
          {
            key: "200to300",
            label: "$200,000 - $299,999",
          },
          {
            key: "morethan300",
            label: "More than $300,000",
          },
        ],
        cols: [
          [
            {
              key: "num",
              label: "Number of employees",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 1000,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "2. Compensation",
            start: "B23",
            end: "B30",
            firstrow: "Less than $25,000",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 4 - In the past calendar year, how many staff received a promotion (with title change and pay increase beyond cost of living) that resulted in a salary within each of the following pay levels?",
        element: "promotion-comp",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "lessthan25",
            label: "Less than $25,000",
          },
          {
            key: "25to50",
            label: "$25,000 - $49,999",
          },
          {
            key: "50to75",
            label: "$50,000 - $74,999",
          },
          {
            key: "75to100",
            label: "$75,000 - $99,999",
          },
          {
            key: "100to150",
            label: "$100,000 - $149,999",
          },
          {
            key: "150to200",
            label: "$150,000 - $199,999",
          },
          {
            key: "200to300",
            label: "$200,000 - $299,999",
          },
          {
            key: "morethan300",
            label: "More than $300,000",
          },
        ],
        cols: [
          [
            {
              key: "num",
              label: "Number of employees",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 1000,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "2. Compensation",
            start: "B36",
            end: "B43",
            firstrow: "Less than $25,000",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 5 - Over the past calendar year, how many staff members were hired by your organization at pay level...",
        element: "hired-comp",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "lessthan25",
            label: "Less than $25,000",
          },
          {
            key: "25to50",
            label: "$25,000 - $49,999",
          },
          {
            key: "50to75",
            label: "$50,000 - $74,999",
          },
          {
            key: "75to100",
            label: "$75,000 - $99,999",
          },
          {
            key: "100to150",
            label: "$100,000 - $149,999",
          },
          {
            key: "150to200",
            label: "$150,000 - $199,999",
          },
          {
            key: "200to300",
            label: "$200,000 - $299,999",
          },
          {
            key: "morethan300",
            label: "More than $300,000",
          },
        ],
        cols: [
          [
            {
              key: "num",
              label: "Number of employees",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 1000,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "3. New hires and departures",
            start: "B9",
            end: "B16",
            firstrow: "Less than $25,000",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 6 - In the past TWO calendar years (2020 and 2021), how many full-time regular employees have been hired by your organization?",
        element: "hires",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "recenthires",
            label: "Full-Time Hires",
          },
        ],
        cols: [
          [
            {
              key: "hires",
              label: "Number of hires",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 500,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "3. New hires and departures",
            start: "B21",
            end: "B21",
            firstrow: "Number of hires",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 7 - How many of your recent full-time regular hires from the last two years (from Table 6 above) still work for your organization?",
        element: "retentions",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "q6anwsered",
            label: "Was Q6 Anwsered?",
          },
          {
            key: "retention",
            label: "Number Retained",
          },
        ],
        cols: [
          [
            {
              key: "hires",
              label: "Number of hires",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 500,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B76",
            end: "B77",
            firstrow: "Was Q6 Anwsered?",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 8 - Are new employees required to sign binding arbitration or confidentiality agreements during their onboarding process (e.g., in an employment letter, employee handbook)?",
        element: "nda",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "yes",
            label: "Yes, for all positions",
          },
          {
            key: "yesspecifc",
            label: "Yes, but only for specific positions",
          },
          {
            key: "no",
            label: "No",
          },
        ],
        cols: [
          [
            {
              key: "hires",
              label: "Yes, for all positions",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B6",
            end: "B8",
            firstrow: "Number of hires",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 9 - Over the past calendar year, how many staff members departed your organization (voluntary or involuntary) at pay level:",
        element: "departed-comp",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "lessthan25",
            label: "Less than $25,000",
          },
          {
            key: "25to50",
            label: "$25,000 - $49,999",
          },
          {
            key: "50to75",
            label: "$50,000 - $74,999",
          },
          {
            key: "75to100",
            label: "$75,000 - $99,999",
          },
          {
            key: "100to150",
            label: "$100,000 - $149,999",
          },
          {
            key: "150to200",
            label: "$150,000 - $199,999",
          },
          {
            key: "200to300",
            label: "$200,000 - $299,999",
          },
          {
            key: "morethan300",
            label: "More than $300,000",
          },
        ],
        cols: [
          [
            {
              key: "num",
              label: "Number of employees",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "3. New hires and departures",
            start: "B39",
            end: "B46",
            firstrow: "Less than $25,000",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 10 - How many of those staff who departed your organization (voluntary or involuntary) over the past calendar year signed NDAs (Non-Disclosure Agreements)?",
        element: "nda-departures",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "nda",
            label: "Number NDA",
          },
        ],
        cols: [
          [
            {
              key: "departures",
              label: "Number of departures",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "3. New hires and departures",
            start: "B51",
            end: "B51",
            firstrow: "Number of departures",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 11 - Is any portion of your employee workforce unionized?",
        element: "unionization",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
            {
              key: "unionized-yes",
              label: "Unionization - Yes",
            },
            {
              key: "unionized-no",
              label: "Unionization - No",
            },
            {
              key: "unionized-neg",
              label: "Unionization - Negotiation",
            },
        ],
        cols: [
          [
            {
              key: "nda",
              label: "Is any portion of your employee workforce unionized?",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B13",
            end: "B15",
            firstrow: "Unionization - Yes",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 12 - If your employee workforce is unionized, in what year was the union first established? ",
        element: "unionization-year",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "nda",
            label: "What year was the union first established",
          },
        ],
        cols: [
          [
            {
              key: "unionization-year",
              label: "Unionization - Year",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 2023,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B81",
            end: "B81",
            firstrow: "What year was the union first established",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 13 - Has your organization measured the composition of any of the following groups with respect to gender, race, and ethnicity within the last 3 years? Select all that apply.",
        element: "measured",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
            {
              key: "artists",
              label: "Artists in the collection",
            },
            {
              key: "board",
              label: "Board and/or trustee members",
            },
            {
              key: "staff",
              label: "Staff members",
            },
            {
              key: "volunteers",
              label: "Volunteers",
            },
            {
              key: "none",
              label: "None of the above",
            },
            {
              key: "idk",
              label: "I don't know",
            },
        ],
        cols: [
          [
            {
              key: "measured",
              label: "Measured",
            },
          ]
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B20",
            end: "B25",
            firstrow: "Artists in the collection",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },

      {
        name: "Table 14 - Which of the following benefits does your organization provide for the following types of employees? Select all that apply.",
        element: "benefits",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 1600,
          colWidths: [200, 200, 200],
          stretchH: "none",
        },
        rows: [
          {
            key: "health100",
            label: "Health insurance (covered 100% by the employer)",
          },
          {
            key: "healthpartial",
            label: "Health insurance (covered partially by the employer)",
          },
          {
            key: "disability",
            label: "Disability insurance (long and short-term)",
          },
          {
            key: "life",
            label: "Life Insurance",
          },
          {
            key: "pto",
            label: "Paid time-off",
          },
          {
            key: "psick",
            label: "Paid sick leave",
          },
          {
            key: "pflmin",
            label: "Paid family leave (equal to the statutory requirement)",
          },
          {
            key: "pflmid",
            label: "Paid family leave (beyond the statutory requirement but not including paternal or maternal leave)",
          },
          {
            key: "pflmax",
            label: "Paid paternal and/or maternal leave beyond any statutory requirement",
          },
          {
            key: "workplace",
            label: "Workplace safety protections",
          },
          {
            key: "401kcontrib",
            label: "401k/ 403b/ other retirement funds (with employer contribution)",
          },
          {
            key: "401knocontrib",
            label: "401k/ 403b/ other retirement funds (without employer contribution)",
          },
          {
            key: "mentalhealth",
            label: "Mental health coverage (beyond health insurance)",
          },
          {
            key: "eap",
            label: "Employee Assistance Program (other than mental health coverage)",
          },
          {
            key: "dental",
            label: "Dental insurance (fully covered or shared by employer)",
          },
          {
            key: "vision",
            label: "Vision insurance (fully covered or shared by employer)",
          },
          {
            key: "bereavement",
            label: "Bereavement leaves",
          },
          {
            key: "professionaldev",
            label: "Funding for professional development",
          },
          {
            key: "commuter",
            label: "Commuter benefits",
          },
          {
            key: "pet",
            label: "Pet insurance (fully covered or shared by employer",
          },
        ],
        cols: [
          [
            {
              key: "ft",
              label: "Full-time",
            },
            {
              key: "pt",
              label: "Part-time",
            },
            {
              key: "temp",
              label: "Temporary/Seasonal",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B30",
            end: "D49",
            firstrow: "Health insurance (covered 100% by the employer)",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 15 - Which of the following statements best reflect the salary sharing practices of your museum? Select all that apply.",
        element: "salarysharing",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 500,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
              key: "specific",
              label: "The museum shares the specific salaries of all employees publicly",
            },
            {
              key: "handbook",
              label: "A union handbook lists salary levels for each job at the museum",
            },
            {
              key: "positions",
              label: "The museum shares salary ranges for all positions or levels with employees",
            },
            {
              key: "ranges",
              label: "The museum posts salary ranges for each open position ",
            },
            {
              key: "discourages",
              label: "The museum actively discourages employees from discussing their salaries",
            },
            {
              key: "none",
              label: "None of the above",
            },
        ],
        cols: [
          [
            {
              key: "practices",
              label: "Practices",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B54",
            end: "B59",
            firstrow: "The museum shares the specific salaries of all employees publicly",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 16 - What kind of reporting mechanisms for workplace disputes, harassment, or discrimination are currently in place at your organization? Select all that apply.",
        element: "harassment",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 650,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
              key: "form",
              label: "An HR complaint form (i.e., in-person or online)",
            },
            {
              key: "staff",
              label: "An HR staff member who is available to employees",
            },
            {
              key: "union",
              label: "A union-provided grievance process for reporting",
            },
            {
              key: "anonymous",
              label: "An anonymous reporting mechanism",
            },
            {
              key: "hotline",
              label: "An employee complaint hotline",
            },
            {
              key: "neutral",
              label: "A neutral employee or manager who can communicate the issues to HR",
            },
            {
              key: "ombudsman",
              label: "A third-party reporting process (e.g., use of an ombudsman)",
            },
            {
              key: "another",
              label: "Another reporting mechanism",
            },
            {
              key: "none",
              label: "My organization doesn’t have any reporting mechanisms",
            },
        ],
        cols: [
          [
            {
              key: "practices",
              label: "Practices",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B64",
            end: "B72",
            firstrow: "An HR complaint form (i.e., in-person or online)",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },

      {
        name: "Table 17 - In the past calendar year, how many staff (please consider ALL staff members, including Full-Time and Part-Time) have formally and/or informally expressed concern or dissatisfaction related to the following topics.  If you don't track informal complaints, please make your best estimate.",
        element: "complaints",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 550,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "culture",
            label: "Workplace culture (e.g., being welcomed or included)",
          },
          {
            key: "comp",
            label: "Compensation or Salary",
          },
          {
            key: "title",
            label: "Title or Promotion or Advancement",
          },
          {
            key: "racism",
            label: "Racism, race-based discrimination, microaggressions",
          },
          {
            key: "gender",
            label: "Gender, sexual orientation, gender expression, gender-based discrimination",
          },
        ],
        cols: [
          [
            {
              key: "formal",
              label: "Formal complaints (e.g., filing a report or complaint form)",
            },
            {
              key: "informal",
              label: "Informal complaints",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 100,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "5. Complaints",
            start: "B21",
            end: "C25",
            firstrow: "Workplace culture (e.g., being welcomed or included)",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 18 - In the past calendar year, how many staff (please consider ALL staff members, including Full-Time and Part-Time) have formally and/or informally expressed concern or dissatisfaction related to the following topics.  If you don't track informal complaints, please make your best estimate.",
        element: "complaints2",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 550,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "culture",
            label: "Workplace culture (e.g., being welcomed or included)",
          },
          {
            key: "comp",
            label: "Compensation or Salary",
          },
          {
            key: "title",
            label: "Title or Promotion or Advancement",
          },
          {
            key: "racism",
            label: "Racism, race-based discrimination, microaggressions",
          },
          {
            key: "gender",
            label: "Gender, sexual orientation, gender expression, gender-based discrimination",
          },
        ],
        cols: [
          [
            {
              key: "legal",
              label: "Complaints resulted in legal action",
            },
            {
              key: "internalinvestigation",
              label: "Complaints resulted in an internal investigation",
            },
            {
              key: "externalinvestigation",
              label: "Complaints resulted in an external investigation",
            },
            {
              key: "disciplinary",
              label: "Complaints resulted in disciplinary action",
            },
          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_error: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "5. Complaints",
            start: "B30",
            end: "E34",
            firstrow: "Workplace culture (e.g., being welcomed or included)",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 19 - How many claims were filed with the EEOC (Equal Employment Opportunity Commission) last calendar year?",
        element: "eeocclaims",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 150,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "eeoc",
            label: "EEOC Claims",
          },
        ],
        cols: [
          [
            {
              key: "claims",
              label: "Number of claims",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 500,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "5. Complaints",
            start: "B38",
            end: "B38",
            firstrow: "EEOC Claims",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
      {
        name: "Table 20 - How many claims were filed with your city or state municipality in the last calendar year?",
        element: "stateclaims",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 150,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "state",
            label: "State Claims",
          },
        ],
        cols: [
          [
            {
              key: "claims",
              label: "Number of claims",
            },

          ],
        ],
        types: [
          {
            range: {
              row: "*",
              col: "*",
            },
            type: "int",
            min: 0,
            max_warning: 500,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "5. Complaints",
            start: "B42",
            end: "B42",
            firstrow: "State Claims",
          },
        ],
        tooltips: [
          {
            range: {
              row: "*",
              col: "*",
            },
            tooltip: {
              errorTitle: "Invalid Data Entry",
              error:
                "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
              warningTitle: "Warning: Data is too big",
              warning: "Are you sure this value is correct?",
            },
          },
        ],
      },
    ],
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
    send_submitter_ids: true,
    "dragAndDropInput" : true,
    contains_tables: true,
    contains_survey: false
  };
});
