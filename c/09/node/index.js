var env = require('./env');
var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);

var port = env.port;
var host = env.host;

server.listen(port, host, function() {
  console.log(`Server is listening at http://${host}:${port}.`);
});
