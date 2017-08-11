require('../global');

var config = App.require('config');
var socketIO = require('socket.io');

var livereload = App.require('livereload');

var http = require('http');
var express = require('express');

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', function(socket) {
  console.log('new user has connected');
});

livereload.watch = [
  App.root('public')
];

livereload.initialize(app, io);

app.use('/', express.static(App.root('public')));
app.use('/', express.static(App.masterRoot('node_modules')));

var port = config.port;
var host = config.host;

server.listen(port, host, function() {
  console.log(`server: ${host}:${port}.`);
});
