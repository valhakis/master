require('../globals');
var http = require('http');
var request = require('request');

var server = http.createServer(require('./app'));

var env = App.require('env');

var port = env.port;
var host = env.host;

server.listen(port, host, function() {
  console.log(`server is listening at http://${host}:${port}. [${process.env.mode}]`);
  if (process.env.mode == 'development') {

  }
});
