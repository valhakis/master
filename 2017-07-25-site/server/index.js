var path = require('path');
var http = require('http');
var express = require('express');
var socketIO = require('socket.io');
var watch = require('node-watch');

var GApp = {
  _root: null,
  _masterRoot: null,
  create: function() {
    var object = Object.create(this);
    this._root = path.join(__dirname, '..');
    this._masterRoot = path.join(this._root, '..');

    return object;
  },
  masterRoot: function(path) {
    return this._masterRoot + '/' + path;
  },
  root: function(path) {
    return this._root + '/' + path;
  }
};

global.App = GApp.create();

var port = 80;
var host = '192.168.0.10';

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

io.on('connection', function(socket) {
  console.log(`socket: ${socket.id} connected.`);
  socket.on('disconnect', function() {
    console.log(`socket: ${socket.id} disconnected.`);
  });
  socket.on('message', function(message) {
    console.log(message);
  });
});

watch([
  App.root('public'),
  App.root('views')
], {recursive: true}, function() {
  io.emit('reload');
});

app.set('view engine', 'pug');

app.use('/lib', express.static(App.masterRoot('node_modules')));
app.use('/', express.static(App.root('public')));

app.get('/', function(req, res) {
  res.render('index');
});

server.listen(port, host, function() {
  console.log(`server: ${host}:${port}`);
});
