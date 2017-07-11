var http = require('http');

var app = function(req, res) {
  res.write('lonely webserver');
  res.end();
};

var server = http.createServer(app);

server.listen('2000', '0.0.0.0');
