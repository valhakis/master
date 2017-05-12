require('./globals');

var http = require('http');
var config = require('./config');

var app = require('./app');

var host;
var port;

if (process.env.NODE_ENV === 'development') {
   host = config.development.host;
   port = config.development.port;
} else {
   process.env.NODE_ENV = 'production';
   host = config.production.host;
   port = config.production.port;
}

var server = http.createServer(app);

server.listen(port, host, function() {
   console.log(`server at ${host}:${port}. [${process.env.NODE_ENV}]`);
});
