var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);

// Dependencies
const JIFFServer = require('../jiff/lib/jiff-server.js');
const jiffServerBigNumber = require('../jiff/lib/ext/jiff-server-bignumber.js');

// Crypto hooks
const cryptoHooks =  {
  generateKeyPair: function () {
    return { public_key: 'provider', secret_key: 'provider' };
  },
  parseKey: function (jiff, key) {
    return key;
  },
  dumpKey: function (jiff, key) {
    return key;
  }
};

// Options and Hooks
const options = { logs: true, sodium: false, external_crypto_provider: true };

// In particular, load session keys and public keys, and use initializeSession below
// to initialize the sessions.
let serverInstance = new JIFFServer(http, options);
serverInstance.apply_extension(jiffServerBigNumber);


// Serve static files.
http.listen(4321, function () {
  console.log('listening on *:4321');
});

console.log('Crypto provider running...');
console.log();
