require('../global');
var todo = App.require('server/todo');
var db = App.require('server/db');

var config = App.require('config');
var socketIO = require('socket.io');

var livereload = App.require('livereload');
var sass = App.require('sass');

var http = require('http');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/2017-08-08', function(err) {
  if (err) {
    console.log(JSON.stringify(err.message));
  }
});

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

var messages = [];

io.on('connection', function(socket) {
  console.log('new user has connected');
  io.emit('chat.new-connection', {id: socket.id, message: 'new connection'});
  socket.on('chat.message', function(data) {
    messages.push(data);
    io.emit('chat.message', data);
  });
});

sass.initialize(app, io);

livereload.watch = [
  App.root('public')
];

livereload.initialize(app, io);

app.use('/', express.static(App.root('public')));
app.use('/', express.static(App.masterRoot('node_modules')));
app.use('/api', App.require('server/api'));

app.get('/messages', function(req, res) {
  res.send(messages);
});

app.get('/database/todo/create_table', function(req, res) {
  todo.createTable(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send({message: 'Todo table has been created.'});
    }
  });
});

app.get('/database/todo/drop_table', function(req, res) {
  todo.dropTable(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send({message: 'Todo table has been dropped.'});
    }
  });
});

app.post('/api/todos', function(req, res) {
  req.on('data', function(newTodo) {
    todo.create(newTodo, function(err, ) {
      if (err) {
        res.send(err);
      } else {
        res.send({message: 'New todo has been created.'});
      }
    });
  });
  res.send('what are you doing');
});

var port = config.port;
var host = config.host;

server.listen(port, host, function() {
  console.log(`server: ${host}:${port}.`);
});
