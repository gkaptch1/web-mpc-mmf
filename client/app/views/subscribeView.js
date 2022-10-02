define(['jquery', 'controllers/subscribeController', 'pki', 'Ladda', 'alertHandler', 'bootstrap'],
  function ($, subscribeController, pki, Ladda, alertHandler) {

    function subscribeView() {
      $(document).ready(function () {

        // Autopopulate with a good password
        $('#public-key-password').attr('value', pki.generateRandomBase32(16));

        //Copied from trusted/session_data
        var getParameterByName = function (name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
          return results === null
            ? ""
            : decodeURIComponent(results[1].replace(/\+/g, " "));
        };


        var $session = $("#session");
        var $participationCode = $("#participation-code");

        $participationCode.val(getParameterByName("participationCode"));
        $session.val(getParameterByName("session"));
        if (String($session.val()).trim() !== "") {
          $session.blur();
        }
        if (String($participationCode.val()).trim() !== "") {
          $participationCode.blur();
        }



        $('#submit').on('click', function (e) {
                e.preventDefault();

                var la = Ladda.create(document.getElementById('submit'));
                la.start();

                var sessionID = $('#session').val();
                var participantID = $('#participation-code').val();
                var password = $('#public-key-password').val();
                var result = subscribeController.keyGenAndUpdate(sessionID, participantID, password);

                if (result == null) {
                  la.stop();
                } else {
                  result.then(function (res) {
                    try {

                      // download files
                      // var priBlob = new Blob([privateKey], {type: 'text/plain;charset=utf-8'});
                      // filesaver.saveAs(priBlob, 'backup_access_key.pem');
                      alertHandler.success('Your password has been successfully saved.  Please make sure keep it in a safe place.  If you lose your password you will not be able to access results!');
                      // var text = 'Below is a guide to accessing the results of the survey:\n'  + 'SessionID:\n' + password + 'Participant:' + 'Password:\n' + password;
                      // filesaver.saveAs(new Blob([text], {type: 'text/plain;charset=utf-8'}), 'Session_' + sessionID + '_password.txt');

                      la.stop();
                      $('#public-key-password').prop('disabled', true);
                      $('#submit').prop('disabled', true);
                   } catch (e) {
                    la.stop();
                    alertHandler.error('Error subscribing. Please refresh the page and try again.');
                  }
                });
              }
            });



        // $('#submit').on('click', function (e) {
        //   subscribeController.keyGenAndUpdate(password);
        // });
      });
    }

    return subscribeView;

  });
