var http = require('http');

var app = require('./app');

var server = http.createServer(app);

var port = '4000';
var host = 'localhost';

exports.start = function() {
   server.listen(port, host, function() {
      console.log(`Server at ${host}:${port}.`);
   });
};
