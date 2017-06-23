require('./globals');

var http = require('http');
var app = APP.require('app');
var config = APP.require('config');

var port = config.port;
var host = config.host;

var server = http.createServer(app);

server.listen(port, host, function() {
   console.log(`NODE-BLOG: ${host}:${port}.`);
});
