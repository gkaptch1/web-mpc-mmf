if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
  
define([], function () {
    return {
        "tables": [
        {
            "name": "Table 1",
            "element": "number-paintings", 
            //The format for linear regression is an array of pairs where each pair is an array of the independent variable 
            //followed by the dependent variable. The independent variable and dependent variable are both arrays of two elements,
            //the first is the name of the row, the second is the name of the column 
            "operations": {SUM: true, STD: true, LIN: [[["num_paintings","value"],["age","value"]]]}, 
            "cohortOperations": {SUM: true},
            "hot_parameters": {
            "rowHeaderWidth": 150,
            "height": 330,
            "colWidths": [150],
            "stretchH": "none"
            },
            "rows": [
            {
                "key": "num_paintings",
                "label": "Number of paintings"
            },
            {
                "key": "age",
                "label": "Museum age"
            },
            {
                "key": "num_statues",
                "label": "Number of statues"
            }, 
            {
                "key" : "num_photos",
                "label": "Number of photos"
            }
            ],
            "cols": [
            [
                {
                "key": "value",
                "label": "Value"
                }
            ]
            ],
            "types": [
            {
                "range": {
                "row": "*",
                "col": "*"
                },
                "type": "int",
                "min": 0,
                "max_warning": 200,
                "empty": false
            }
            ],
            "excel": [
            {
                "sheet": "Test",
                "start": "B2",
                "end": "B2",
                "firstrow": "Test"
            }
            ],
            "tooltips": [
            {
                "range": {
                "row": "*",
                "col": "*"

                },
                "tooltip": {
                "errorTitle": "Invalid Data Entry",
                "error": "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
                "warningTitle": "Warning: Data is too big",
                "warning": "Are you sure this value is correct?"
                }
            }
            ]
        },
        {
            "name": "Table 2",
            "element": "number-emps",
            "operations": {SUM: true, STD: true, LIN: null},
            "cohortOperations": {SUM: true},
            "hot_parameters": {
            "rowHeaderWidth": 150,
            "height": 230,
            "colWidths": [150],
            "stretchH": "none"
            },
            "rows": [
            {
                "key": "number_emp",
                "label": "Number of employees"
            },
            ],
            "cols": [
            [
                {
                "key": "value",
                "label": "Value"
                }
            ]
            ],
            "types": [
            {
                "range": {
                "row": "*",
                "col": "*"
                },
                "type": "int",
                "min": 0,
                "max_warning": 200,
                "empty": false
            }
            ],
            "excel": [
            {
                "sheet": "Test2",
                "start": "B2",
                "end": "B2",
                "firstrow": "Test"
            }
            ],
            "tooltips": [
            {
                "range": {
                "row": "*",
                "col": "*"

                },
                "tooltip": {
                "errorTitle": "Invalid Data Entry",
                "error": "Please do not input any text or leave any cells blank. If the value is zero, please input zero.",
                "warningTitle": "Warning: Data is too big",
                "warning": "Are you sure this value is correct?"
                }
            }
            ]
        }
        ],
        'survey': {
            "header": "Answer Additional Questions",
            "directions": "Please answer the following questions.",
            "questions": [
                {
                    "question_text": "Which department are you in?",
                    "input_type": "radio",
                    "inputs": [
                    {
                        "label": "Human Resources (e.g. HR Manager, HRIS Manager, Compensation Manager, Talent &amp; Development)",
                        "value": "1"
                    },
                    {
                        "label": "Operations (e.g. Director of Operations)",
                        "value": "2"
                    },
                    {
                        "label": "Diversity (e.g. Chief Diversity Officer)",
                        "value": "3"
                    },
                    {
                        "label": "Upper Management (e.g. COO, CEO, Executive Director)",
                        "value": "4"
                    },
                    ]
                },
                {
                    "question_text":"How easy was it to understand what data was required given the template and instructions?",
                    "input_type":"radio",
                    "inputs":[
                      {
                        "label":"Extremely easy",
                        "value":"1"
                      },
                      {
                        "label":"Moderately easy",
                        "value":"2"
                      },
                      {
                        "label":"Slightly easy",
                        "value":"3"
                      },
                      {
                        "label":"Neither easy nor difficult",
                        "value":"4"
                      },
                      {
                        "label":"Slightly difficult",
                        "value":"5"
                      },
                      {
                        "label":"Moderately difficult",
                        "value":"6"
                      },
                      {
                        "label":"Extremely difficult",
                        "value":"7"
                      }
                    ]
                  },
            ]
        },
        'usability': [
        'data_prefilled',
        {'time_spent': ['page', 'session-area', 'tables-area', 'amount-spent', 'number-MBEs', 'addressable-spend', 'review-and-submit']},
        {'browser': ['chrome', 'edge', 'msie', 'firefox', 'opera', 'other', 'safari']},
        {'validation_errors': [
            'SESSION_KEY_ERROR',
            'SESSION_INFO_ERROR',
            'PARTICIPATION_CODE_ERROR',
            'SESSION_PARTICIPATION_CODE_SERVER_ERROR',
            'UNCHECKED_ERR',
            'GENERIC_TABLE_ERR',
            'SERVER_ERR',
            'GENERIC_SUBMISSION_ERR',
            'NAN_EMPTY_CELLS',
            'SEMANTIC_CELLS',   
            'CELL_ERROR'
            ]
        }
        ],
        'cohort_selection': false,
        'send_submitter_ids': true
    };
}); 