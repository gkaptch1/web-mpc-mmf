define(['forge'], function (forge) {
  /**
   * Array Buffer / String Manipulation
   */
  var stringToArrayBuffer = function (str) {
    var b = new ArrayBuffer(str.length);
    var view = new Uint8Array(b);
    for (var i = 0; i < str.length; i++) {
      view[i] = str.charCodeAt(i);
    }
    return b;
  };
  var arrayBufferToString = function (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    var byteString = '';
    for (var i = 0; i < byteArray.byteLength; i++) {
      byteString += String.fromCharCode(byteArray[i]);
    }
    return byteString;
  };

  /**
   * JIFF section
   */
  // Parsing from PEM
  var parsePublicKey = function (publicKeyString) {
    var pki = forge.pki;
    return pki.publicKeyFromPem(publicKeyString);
  };
  var parsePrivateKey = function (privateKeyString) {
    // var pki = forge.pki;
    // return pki.privateKeyFromPem(privateKeyString);
    try {
      privateKeyString = privateKeyString.split('\n')[1];

      return window.crypto.subtle.importKey(
        'pkcs8', // (private only)
        stringToArrayBuffer(atob(privateKeyString)),
        {name: 'RSA-OAEP', hash: {name: 'SHA-256'}},
        false, // whether the key is extractable (i.e. can be used in exportKey)
        ['decrypt']
      );
    } catch (err) {
      throw new Error('Error: invalid key file.');
    }
  };

  // Encrypt / Decrypt
  var encrypt = function (message, pki) {
    var result = pki.encrypt(message, 'RSA-OAEP', {md: forge.md.sha256.create()});
    return result;
  };
  var decrypt = function (message, ski) {
    // var result = ski.decrypt(message, 'RSA-OAEP', {md: forge.md.sha256.create()});
    // return result;
    return ski.then(function (ski) {
      var promise = window.crypto.subtle.decrypt({name: 'RSA-OAEP'}, ski, stringToArrayBuffer(message));
      return promise.then(function (decrypted) {
        return arrayBufferToString(decrypted);
      }, reason => {console.log(reason)});
    });
  };

  /**
   * For generating keys in analyst controller at session creation.
   */
  var arrayBufferToBase64String = function (arrayBuffer) {
    return btoa(arrayBufferToString(arrayBuffer));
  };
  var toPem = function (key, privateKey) {
    if (privateKey) {
      return '-----BEGIN RSA PRIVATE KEY-----\n' +
        key + '\n' +
        '-----END RSA PRIVATE KEY-----';
    } else {
      return '-----BEGIN RSA PUBLIC KEY-----\n' +
        key + '\n' +
        '-----END RSA PUBLIC KEY-----';
    }
  };

  // Returns a promise to an object containing two properties: privateKey, and publicKey
  // privateKey and publicKey are base64 PEM strings.
  var generateKeyPair = function () {
    // Configurations
    var operations = ['encrypt', 'decrypt'];
    var config = {
      name: 'RSA-OAEP',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: {name: 'SHA-256'}
    };

    // Generate key pair
    var promise = window.crypto.subtle.generateKey(config, true, operations);

    // Parse to PEM and return
    var keyPair, privateKey; // Intermediate results
    promise = promise.then(function (_keyPair) {
      keyPair = _keyPair;
      return window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey);
    }).then(function (pkcs8) {
      privateKey = toPem(arrayBufferToBase64String(pkcs8), true);
      return window.crypto.subtle.exportKey('spki', keyPair.publicKey);
    }).then(function (spki) {
      var publicKey = toPem(arrayBufferToBase64String(spki), false);
      return { privateKey: privateKey, publicKey: publicKey };
    });

    return promise;
  };

  var generateKeyFromPassword = function (salt, password) {
    var derivedKey = forge.util.createBuffer(forge.pkcs5.pbkdf2(password, salt, 25000, 16));
    return derivedKey;
  };

  var encryptMessageWithSymmetricKey = function(symmetricKey, message, associatedata) {
    var iv = forge.random.getBytesSync(12);
    var cipher = forge.cipher.createCipher('AES-GCM', symmetricKey);
    cipher.start({
      iv: iv, // should be a 12-byte binary-encoded string or byte buffer
      additionalData: associatedata, // optional
    });
    cipher.update(forge.util.createBuffer(message));
    cipher.finish();
    return {
      iv: btoa(iv),
      ciphertext: btoa(cipher.output.data),
      tag: btoa(cipher.mode.tag.data),
      ad: associatedata
    };
  };

  var decryptMessageWithSymmetricKey = function(symmetricKey, ciphertextStruct) {
      var decipher = forge.cipher.createDecipher('AES-GCM', symmetricKey); 
      
      decipher.start({
              iv: forge.util.createBuffer(atob(ciphertextStruct.iv)),
              additionalData: ciphertextStruct.ad, // optional
              tag: forge.util.createBuffer(atob(ciphertextStruct.tag)) // authentication tag from encryption
            });

      decipher.update(forge.util.createBuffer(atob(ciphertextStruct.ciphertext)));
      var pass = decipher.finish();
      if(pass) {
        // outputs decrypted hex
        return decipher.output.data;
      } else {
        throw new Error('Error: Invalid Decryption.  Tag failed to verify');
      }
    };

  function generateRandomBase32(length) {
    if (length == null) {
      length = 16;
    }
    return forge.util.bytesToHex(forge.random.getBytesSync(length));
  }

  return {
    parsePublicKey: parsePublicKey,
    parsePrivateKey: parsePrivateKey,
    encrypt: encrypt,
    decrypt: decrypt,
    generateKeyPair: generateKeyPair,
    generateRandomBase32: generateRandomBase32,
    generateKeyFromPassword: generateKeyFromPassword,
    encryptMessageWithSymmetricKey: encryptMessageWithSymmetricKey,
    decryptMessageWithSymmetricKey: decryptMessageWithSymmetricKey
  };
});
