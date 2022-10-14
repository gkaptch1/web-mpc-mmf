if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    tables: [
      {
        name: "Table 1 - Numbers of employees by position",
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
            sheet: "Test",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 2 - Full-time employees by compensation",
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
            label: "$100,000 - $150,000",
          },
          {
            key: "150to200",
            label: "$150,000 - $200,000",
          },
          {
            key: "200to300",
            label: "$200,000 - $30,000",
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
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 3 - Part-time of employees by compensation",
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
            label: "$100,000 - $150,000",
          },
          {
            key: "150to200",
            label: "$150,000 - $200,000",
          },
          {
            key: "200to300",
            label: "$200,000 - $30,000",
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
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 4 - Promotion rates by compensation",
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
            label: "$100,000 - $150,000",
          },
          {
            key: "150to200",
            label: "$150,000 - $200,000",
          },
          {
            key: "200to300",
            label: "$200,000 - $30,000",
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
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 5 - Hired by compensation",
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
            label: "$100,000 - $150,000",
          },
          {
            key: "150to200",
            label: "$150,000 - $200,000",
          },
          {
            key: "200to300",
            label: "$200,000 - $30,000",
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
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 6 - Covid hires",
        element: "covid-hire",
        operations: { SUM: true, STD: true, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 230,
          colWidths: [150],
          stretchH: "none",
        },
        rows: [
          {
            key: "hired",
            label: "Hired",
          },
          {
            key: "stillemployed",
            label: "Still Employedd",
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
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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

        name: "Table 7 - Departed by compensation",
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
            label: "$100,000 - $150,000",
          },
          {
            key: "150to200",
            label: "$150,000 - $200,000",
          },
          {
            key: "200to300",
            label: "$200,000 - $30,000",
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
            max_warning: 200,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 8 - Employee Benefits",
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
            key: "pflmid",
            label: "Paid family leave (beyond the statutory requirement but not including paternal or maternal leave)",
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
            max_warning: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 9 - Complains",
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
            max_warning: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
        name: "Table 10 - Climes Filed",
        element: "claims",
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
            key: "eeoc",
            label: "How many claims were filed with the EEOC (Equal Employment Opportunity Commission) last calendar year?",
          },
          {
            key: "state",
            label: "How many claims were filed with your city or state municipality in the last calendar year?",
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
            max_warning: 1,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "Test2",
            start: "B2",
            end: "B2",
            firstrow: "Test",
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
    send_submitter_ids: true,
    "dragAndDropInput" : true,
    contains_tables: true,
    contains_survey: false
  };
});
