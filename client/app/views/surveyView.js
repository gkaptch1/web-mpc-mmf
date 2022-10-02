define(["survey-jquery", "jquery", "table_template"], function (
    Survey,
    $,
    table_template
  ) {
    return function () {
      $("#additional-questions").hide();

      const json = table_template.survey;
  
      Survey.StylesManager.applyTheme("winter");
      
      const survey = new Survey.Model(json);
      window.survey = survey;
      window.surveyData = null;
      survey.onComplete.add(function (sender) {
        // console.log("Survey results: ", sender.data);
        window.surveyData = sender.data;
  
      });
      $("#additional-questions").Survey({ model: survey });
  
      $("#additional-questions").show();
    };
  });
  