define(['jquery','pki', 'alertHandler'], function ($, pki, alertHandler) {

    function getSessionPublicKey() {
        var session = $('#session').val().trim().toLowerCase();
        var participationCode = $('#participation-code').val().trim().toLowerCase();

        if (session === '' || participationCode === '') {
          return;
        }

        return $.ajax({
          type: 'POST',
          url: '/sessioninfo',
          contentType: 'application/json',
          data: JSON.stringify({session: session, userkey: participationCode}),
          dataType: 'text'
        }).then(function (response) {
        	return JSON.parse(response);
        }).catch(function (err) {
          if (err && err.hasOwnProperty('responseText') && err.responseText !== undefined) {
            alertHandler.error(err.responseText);
          }
        });
      }

	function keyGenAndUpdate(sessionID, participantID, password) {
		var symmetricKey = pki.generateKeyFromPassword("sessionID:" + sessionID + "participantID:" +  participantID, "password:" + password.trim());

		 return getSessionPublicKey().then(function(result) {
			pk = pki.parsePublicKey(result.publickey);
			encapsulatedKey = btoa(pki.encrypt(symmetricKey.data,pk));

			return $.ajax({
		      type: 'POST',
		      url: '/subscribe_with_key',
		      contentType: 'application/json',
		      data: JSON.stringify({session: sessionID, userkey: participantID, key: encapsulatedKey})
		    }).then(function (res) {
		      return res;
		    }).catch(function (err) {
		      if (err && err.hasOwnProperty('responseText') && err.responseText !== undefined) {
		        alertHandler.error(err.responseText);
		      }
	    	});		
		 });
	}

  	return {
  		getSessionPublicKey: getSessionPublicKey,
    	keyGenAndUpdate: keyGenAndUpdate
  	};
});