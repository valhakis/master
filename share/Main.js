var express = require('express');
var http =  require('http');

var Main = {};

Main.createServer = function(port, host, cb) {
  var app = express();
  var server = http.createServer(app);

  server.listen(port, host, function() {
    console.log(`Server: ${host}:${port}.`);
    cb(app, server);
  });
};

module.exports = Main;
