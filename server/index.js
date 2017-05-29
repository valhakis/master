require('../globals');

var log = console.log;

var port = '4000';
var host = '192.168.0.2';

var http = require('http');
var request = require('request');
var app = require('./app');

var server = http.createServer(app);

var db = require('./db');

db.sync().then(() => {
  server.listen(port, host, function() {
    log(`Server is listening at ${host}:${port}.`);
    request('http://192.168.0.2:3000/__browser_sync__?method=reload');
  });
});
