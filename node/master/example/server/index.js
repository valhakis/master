var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
   res.send("I'm alive.");
});

var port = 5000;
var host = '192.168.0.2';

var server = http.createServer(app);

server.listen(port, function() {
   console.log(`Server at ${host}:${port}`);
});
