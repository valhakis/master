var express = require('express');
var http = require('http');
var socketIO = require('socket.io');
var path = require('path');

var messages = [];

var fs = require('fs');
var app = express();
var server = http.createServer(app);

var io = socketIO(server);

var num_online = 0;

io.on('connection', function(socket){
  // console.log(socket);
  console.log('connected', socket.id, socket.handshake.address);
  num_online += 1;

  socket.emit('messages', messages);

  socket.on('chat message', function(msg){
    messages.push(msg);

    io.emit('chat message', msg);
  });
  socket.on('reload', function() {
    io.emit('reload');
  });
  io.emit('num_online', num_online);
  socket.on('disconnect', function() {
    console.log('disconnected', socket.id, socket.handshake.address);
    num_online -= 1;
    io.emit('num_online', num_online);
  });
});

app.post('/style', function(req, res) {
  req.on('data', function(chunk) {
    fs.writeFileSync(path.join(__dirname, '..', 'public', 'style.css'), chunk.toString(), 'utf-8');
    res.send('saved i think');
  });
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/lib', express.static(path.join(__dirname, '..', '..', 'node_modules')));

server.listen(80, '192.168.0.2', function() {
  console.log('app at port 80 192.168.0.2');
});
