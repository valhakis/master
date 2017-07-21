var share = require(process.env.SHARE).share;
var env = share.require('env');

var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('admin');
});

server.listen('1501', '0.0.0.0', function() {
  console.log(`admin server at port ${env.host}:1501`);
});
