var share = require(process.env.SHARE).share;
var env = share.require('env');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res, next) {
  var source = share.read('views/index.html');
  res.end(source);
});

server.listen('1500', '0.0.0.0', function() {
  console.log(`server at port ${env.host}:1500`);
});

