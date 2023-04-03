if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define([], function () {
  return {
    name: "mmf-hr",
    computation: {
      newVariables: {
      },
      filters: {
      },
      outputs: [
        {
          name: "001-employee-by-type-count",
          inputs: [0,1,2,3,4,5,6],
           "labels" : ["Full-Time employee","Part-time","Temporary","Seasonal employee","Paid intern","Unpaid intern","Apprentice / Fellow"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "002-employee-by-salary-full-time-count",
          inputs: [7,8,9,10,11,12,13,14],
          "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "003-employee-by-salary-part-time-count",
          inputs: [15,16,17,18,19,20,21,22],
            "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000", "Uncategorized Promotions"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "004-employee-promotions-by-salary-count",
          inputs: [23,24,25,26,27,28,29,30,31], // we drop 32
            "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000", "Uncategorized Hires"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "005-employee-hires-by-salary-count",
          inputs: [33,34,35,36,37,38,39,40,41], // we drop 42
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "006-employee-total-hires-count",
          inputs: [43],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "007-employee-total-retention-count",
          inputs: [45],// skipping 44
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "007-employee-binding-arbitration",
          inputs: [46,47,48],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "008-employee-departures-by-salary-count",
          inputs: [49,50,51,52,53,54,55,56,57], // dropping 58
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "009-employee-departures-NDA-count",
          inputs: [59],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "010-org-measured-gender-race-by-category",
          inputs: [64,65,66,67,68,69],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "011-org-benefits-health-insurance-fully-covered",
          inputs: [70,71,72],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "012-org-benefits-health-insurance-partially-covered",
          inputs: [73,74,75],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "013-org-benefits-disability-insurance",
          inputs: [76,77,78],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "014-org-benefits-life-insurance",
          inputs: [79,80,81],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "015-org-benefits-pto",
          inputs: [82,83,84],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "016-org-benefits-paid-sick-leave",
          inputs: [85,86,87],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "017-org-benefits-paid-family-leave-equal",
          inputs: [88,89,90],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "018-org-benefits-paid-family-leave-beyond",
          inputs: [91,92,93],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "019-org-benefits-paid-paternal-maternal-leave",
          inputs: [94,95,96],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "020-org-benefits-workplace-safety",
          inputs: [97,98,99],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "021-org-benefits-retirement-with-contribution",
          inputs: [100,101,102],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "022-org-benefits-retirement-without-contribution",
          inputs: [103,104,105],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "023-org-benefits-mental-health-coverage",
          inputs: [106,107,108],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "024-org-benefits-eap",
          inputs: [109,110,111],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "025-org-benefits-dental-insurance",
          inputs: [112,113,114],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "026-org-benefits-vision-insurance",
          inputs: [115,116,117],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "027-org-benefits-bereavement-leave",
          inputs: [118,119,120],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "028-org-benefits-professional-development",
          inputs: [121,122,123],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "029-org-benefits-commuter-benefits",
          inputs: [124,125,126],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "030-org-benefits-pet-insurance",
          inputs: [127,128,129],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "031-org-salary-sharing",
          inputs: [130,131,132,133,134,135],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "032-complaint-reporting-mechanisms",
          inputs: [136,137,138,139,140,141,142,143,144],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "033-complaint-staff-concerns-count",
          inputs: [145,146,147,148,149,150,151,152,153,154],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "034-complaint-outcomes-workplace-culture",
          inputs: [155,156,157,158],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "035-complaint-outcomes-compensation",
          inputs: [159,160,161,162],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "036-complaint-outcomes-title-promotion-advancement",
          inputs: [163,164,165,166],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "037-complaint-outcomes-racism",
          inputs: [167,168,169,170],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "038-complaint-outcomes-gender",
          inputs: [171,172,173,174],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "039-complaint-eeoc-claims",
          inputs: [175],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
        {
          name: "040-complaint-city-claims",
          inputs: [176],
          labels : ["total months"],
          outputParties: {
            analyst: "true",
            cohort: "true",
            // tags : ["City, state, or county-affiliated", "Collecting", "College or university-affiliated", "Contemporary and/or modern-specific", "Culturally-specific", "Encyclopedic", "Mid-Atlantic", "Midwest", "Mountain Plains", "New England", "Non-Collecting", "Southeast", "Western", "size1", "size2", "size3", "size4", "size5", "size6", "size7"],
            tags: [ ],
          },
        },
      ],
    },
    visualization : [
    {
      section_title: "Results from HR Survey",
      charts: [
        {
          graphType: "column",
          "labels" : ["Full-Time employee","Part-time","Temporary","Seasonal employee","Paid intern","Unpaid intern","Apprentice / Fellow"],
          "questionName": "How many people are currently employed by your organization in each of the following categories? Please choose the best single category for each employee if more than one could apply.   If the value is zero, please input 0.",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "0" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "1" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "2" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "3" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "4" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "5" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "6" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
          "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000"],
            "questionName": "In the past calendar year (2021), how many full-time staff in your organization received an annual salary/compensation of...",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "7" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "8" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "9" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "10" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "11" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "12" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "13" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
          "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000"],
            "questionName": "In the past calendar year (2021), how many part-time staff, seasonal staff, temporary staff, and paid interns in your organization received an annual salary/compensation of...",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "15" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "16" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "17" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "18" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "19" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "20" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "21" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "22" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000", "Uncategorized Promotions"],
            "questionName": "In the past calendar year (2021), how many staff received a promotion (with title change and pay increase beyond cost of living) that resulted in a salary within each of the following pay levels?...",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "23" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "24" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "25" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "26" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "27" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "28" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "29" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "30" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "31" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000", "Uncategorized Hires"],
            "questionName": "Over the past year (2021), how many staff members were hired by your organization at pay level:",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "33" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "34" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "35" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "36" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "37" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "38" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "39" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "40" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "41" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Number of Hires"],
            "questionName": "In the past TWO calendar years (2020 and 2021), how many full-time regular employees have been hired by your organization. If zero, please write 0.",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "43" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Number of Employees"],
            "questionName": "How many of those full-time regular employees you hired in the past TWO calendar years (mentioned in the previous question) still work for your organization?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "45" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Yes, for all positions", "Yes, but only for specific positions", "No"],
            "questionName": "Are new employees required to sign binding arbitration or confidentiality agreements during their onboarding process (e.g., in an employment letter, employee handbook)?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "46" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "47" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "48" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Less than $25,000", "$25,000 – 49,999" ,"$50,000 – 74,999" ,"$75,000 – 99,999" ,"$100,000 – 149,999" ,"$150,000 – 199,000", "$200,000 – 299,999", "More than $300,000", "Uncategorized Departures"],
            "questionName": "Over the past calendar year (2021), how many staff members departed your organization (voluntary or involuntary) at pay level:",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "49" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "50" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "51" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "52" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "53" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "54" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "55" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "56" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "57" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Number of Staff"],
            "questionName": "How many of those staff who departed your organization (voluntary or involuntary) over the past calendar year signed NDAs (Non-Disclosure Agreements)?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "59" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Artists in the collection","Board and/or trustee members","Staff members","Volunteers","None of the above", "I don’t know"],
            "questionName": "Has your organization measured the composition of any of the following groups with respect to gender, race, and ethnicity within the last 3 years?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "64" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "65" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "66" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "67" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "68" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "69" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Health insurance (covered 100% by the employer)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "70" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "71" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "72" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Health insurance (covered partially by the employer)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "73" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "74" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "75" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Disability insurance (long and short-term)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "76" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "77" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "78" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Life Insurance",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "79" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "80" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "81" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Paid time-off",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "82" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "83" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "84" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Paid sick leave",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "85" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "86" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "87" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Paid family leave (equal to the statutory requirement)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "88" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "89" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "90" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Paid family leave (beyond the statutory requirement but not including paternal or maternal leave)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "91" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "92" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "93" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Paid paternal and/or maternal leave beyond any statutory requirement",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "94" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "95" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "96" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Workplace safety protections",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "97" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "98" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "99" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? 401k/403b/other retirement funds (with employer contribution)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "100" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "101" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "102" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? 401k/403b/other retirement funds (without employer contribution)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "103" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "104" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "105" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Mental health coverage (beyond health insurance)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "106" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "107" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "108" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Employee Assistance Program (other than mental health coverage)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "109" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "110" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "111" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Dental insurance (fully covered or shared by employer)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "109" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "110" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "111" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Vision insurance (fully covered or shared by employer)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "112" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "113" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "114" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Bereavement leave",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "115" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "116" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "117" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Funding for professional development",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "118" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "119" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "120" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Commuter benefits",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "121" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "122" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "123" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Pet insurance (fully covered or shared by employer)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "124" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "125" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "126" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Full-time", "Part-time", "Temporary/Seasonal"],
            "questionName": "Which of the following benefits does your organization provide for the following types of employees? Pet insurance (fully covered or shared by employer)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "127" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "128" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "129" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["The museum shares the specific salaries of all employees publicly","A union handbook lists salary levels for each job at the museum","The museum shares salary ranges for all positions or levels with employees","The museum posts salary ranges for each open position ","The museum actively discourages employees from discussing their salaries","None of the above"],
            "questionName": "Which of the following statements best reflect the salary sharing practices of your museum?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "130" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "131" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "132" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "133" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "134" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "135" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["An HR complaint form (i.e., in-person or online)","An HR staff member who is available to employees","A union-provided grievance process for reporting","An anonymous reporting mechanism","An employee complaint hotline","A neutral employee or manager who can communicate the issues to HR","A third-party reporting process (e.g., use of an ombudsman)","Another reporting mechanism","My organization doesn’t have any reporting mechanisms"],
            "questionName": "What kind of reporting mechanisms for workplace disputes, harassment, or discrimination are currently in place at your organization?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "136" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "137" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "138" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "139" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "140" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "141" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "142" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "143" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "144" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Formal Complaints: Workplace culture (e.g., being welcomed/included)", "Informal Complaints: Workplace culture (e.g., being welcomed/included)","Formal Complaints: Compensation/Salary", "Informal Complaints: Compensation/Salary","Formal Complaints: Title/Promotion/Advancement", "Informal Complaints: Title/Promotion/Advancement","Formal Complaints: Racism, race-based discrimination, microaggressions", "Informal Complaints: Racism, race-based discrimination, microaggressions","Formal Complaints: Gender, sexual orientation, gender expression, gender-based discrimination", "Informal Complaints: Gender, sexual orientation, gender expression, gender-based discrimination"],
            "questionName": "In the past calendar year (2021), how many staff (please consider ALL staff members, including Full-Time and Part-Time) have formally and/or informally expressed concern or dissatisfaction related to the following topics:",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "145" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "146" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "147" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "148" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "149" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "150" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "151" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "152" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "153" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "154" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Complaints resulted in legal action","Complaints resulted in internal investigation ","Complaints resulted in external investigation ","Complaints resulted in disciplinary action"],
            "questionName": "In the previous question, you reported how many staff members made formal and/or informal complaints about various workplace issues in the past calendar year (2021). How many of these complaints resulted in the following outcome? Workplace culture (e.g., being welcomed/included)",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "155" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "156" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "157" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "158" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Complaints resulted in legal action","Complaints resulted in internal investigation ","Complaints resulted in external investigation ","Complaints resulted in disciplinary action"],
            "questionName": "In the previous question, you reported how many staff members made formal and/or informal complaints about various workplace issues in the past calendar year (2021). How many of these complaints resulted in the following outcome? Compensation/Salary",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "159" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "160" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "161" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "162" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Complaints resulted in legal action","Complaints resulted in internal investigation ","Complaints resulted in external investigation ","Complaints resulted in disciplinary action"],
            "questionName": "In the previous question, you reported how many staff members made formal and/or informal complaints about various workplace issues in the past calendar year (2021). How many of these complaints resulted in the following outcome? Title/Promotion/Advancement",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "163" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "164" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "165" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "166" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Complaints resulted in legal action","Complaints resulted in internal investigation ","Complaints resulted in external investigation ","Complaints resulted in disciplinary action"],
            "questionName": "In the previous question, you reported how many staff members made formal and/or informal complaints about various workplace issues in the past calendar year (2021). How many of these complaints resulted in the following outcome? Racism, race-based discrimination, microaggressions",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "167" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "168" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "169" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "170" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Complaints resulted in legal action","Complaints resulted in internal investigation ","Complaints resulted in external investigation ","Complaints resulted in disciplinary action"],
            "questionName": "In the previous question, you reported how many staff members made formal and/or informal complaints about various workplace issues in the past calendar year (2021). How many of these complaints resulted in the following outcome? Gender, sexual orientation, gender expression, gender-based discrimination",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "171" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "172" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "173" // we are zero indexing for this one because im a psychopath
            },
            {
              output: "default-share-buffer",
              value: "174" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Number of Claims"],
            "questionName": "How many claims were filed with the EEOC (Equal Employment Opportunity Commission) last calendar year (2021)?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "175" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
        {
          graphType: "column",
            "labels" : ["Number of Claims"],
            "questionName": "How many claims were filed with your city or state municipality in the last calendar year (2021)?",
          data : 
          [
            {
              output: "default-share-buffer",
              value: "176" // we are zero indexing for this one because im a psychopath
            },
          ],
          series : ["cohort","nofilter","tag"],
          seriesLabel : ["My Organization", "All Museums", "Tag"],
        },
      ]
    }
    ],
    tables: [
      {
        name: "Table 1 - How many people are currently employed by your organization in each of the following categories? Please choose the best single category for each employee if more than one could apply.",
        element: "position-employee",
        //The format for linear regression is an array of pairs where each pair is an array of the independent variable
        //followed by the dependent variable. The independent variable and dependent variable are both arrays of two elements,
        //the first is the name of the row, the second is the name of the column
        operations: {
          SUM: true,
          STD: null,
          LIN: null,
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
          {
            key: "total",
            label: "Total",
          },
          {
            key: "totalanswered",
            label: "Total Answered"
          }
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
            sheet: "DO NOT EDIT",
            start: "B87",
            end: "B96",
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
        operations: { SUM: true, STD: null, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 550,
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
          {
            key: "total",
            label: "Total",
          },
          {
            key: "totalanswered",
            label: "Total Answered"
          }
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
            sheet: "DO NOT EDIT",
            start: "B104",
            end: "B113",
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
        operations: { SUM: true, STD: null, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 200,
          height: 550,
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
        cohortOperations: { SUM: true },
        hot_parameters: {
          rowHeaderWidth: 150,
          height: 550,
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
          {
            key: "total",
            label: "Total",
          },
          {
            key: "totalanswered",
            label: "Total Answered"
          }
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
            max_error: 1000,
            empty: false,
          },
        ],
        excel: [
          {
            sheet: "DO NOT EDIT",
            start: "B119",
            end: "B128",
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
        operations: { SUM: true, STD: null, LIN: null },
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
