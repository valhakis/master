require('../globals');

var config = App.require('server/config');

var http = require('http');
var app = require('./app');

var port = config.port;
var host = config.host;

var server = http.createServer(app);

server.listen(port, host, function() {
  console.log(`server: ${host}:${port}`);
});
