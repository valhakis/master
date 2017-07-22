var http = require('http');
var app = require('./app');
var config = App.require('admin/config');

var server = http.createServer(app);

var host = config.host;
var port = config.port;

server.listen(port, host, function() {
  console.log(`admin: ${host}:${port}`);
});
