const PASSWORD = process.argv[2];
const PORT = Number(process.argv[3]);
console.log('Password: ', PASSWORD);
console.log('Port: ', PORT);

const http = require("http");
const express = require('express');

const app = express();

const { spawn } = require('child_process');
let provider = null;

function start_provider() {
 if (provider != null) {
   // Kill running provider.
   provider.kill();
   provider = null;
 }
 provider = spawn('node', ['index.js']);
 provider.on('error', (err) => console.log(err));
 provider.on('close', (code) => console.log('closed ', code));
 provider.stdout.on('data', (data) => console.log('  stdout: ', data.toString().trim()));
 provider.stderr.on('data', (data) => console.log('  stderr: ', data.toString().trim()));
}
start_provider();

app.use(express.json());
app.get('/' + process.argv[2], (request, response) => {
  start_provider();
  response.send("Restarted");
});

app.listen(PORT, () => {
  console.log(`Express server currently running on port ${PORT}`);
  console.log(`Access 0.0.0.0:${PORT}/${PASSWORD} to restart`);
  console.log("Provider started");
});
