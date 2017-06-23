require('./globals');

process.env.NODE_ENV = 'development';

var http = require('http');
var config = require('./config');

var app = require('./app');

var host = config.host;
var port = config.port;

var server = http.createServer(app);

server.listen(port, host, function() {
   console.log(`server at ${host}:${port}. [${process.env.NODE_ENV}]`);
});
