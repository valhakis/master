require('./global');

var http = require('http');

var host = '192.168.0.2';
var port = '3000';

var app = require('./app');

var server = http.createServer(app);

server.listen(port, host, function() {
   console.log(`Server is running at ${host}:${port}.`);
});
