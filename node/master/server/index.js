require('../globals');
require('./globals');

// FIND console.log FILENAME
/*
var originalLogger = console.log;
var filename;
console.log = function(minions) {
  try {
    var err = new Error();
    Error.prepareStackTrace = function (err, stack) {
      return stack;
    };
    filename = err.stack.shift().getFileName();
    while (err.stack.length) {
      filename = err.stack.shift().getFileName();
      if (filename !== filename) return filename;
      if (!filename.match(/node_modules/))
      {
        originalLogger(filename);
      }
    }
  } catch (err) {
    originalLogger(err);
  }
  return undefined;
};
*/

var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var http = require('http');
var config = require('./config');
var env = Master.loadJSON('.env');

var db = require('./database').db;

var app = require('./app');

var host;
var port;

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (process.env.NODE_ENV === 'development') {
  host = config.development.host;
  port = config.development.port;
} else {
  process.env.NODE_ENV = 'production';
  host = config.production.host;
  port = config.production.port;
}

//var router = express.Router();
//router.use('**', function(req, res) {
//proxy.web(req, res, { target: 'http://192.168.0.2:4500' });
//});
//app.use('/php-site', router);


// httpProxy.createProxyServer({ target: 'http://192.168.0.2:4500' }).listen(8000);


var server = http.createServer(app);
var io = require('socket.io')(server);

class Player {
  constructor(socket) {
    this.socket = socket;
  }
}

var players = [];

io.on('connection', function(socket) {
  io.emit('message', 'NEW PLAYER CONNECTED');
  players.push(new Player(socket));
  console.log('a user connected');

  socket.on('log-num-players', function() {
    io.emit('log-num-players', players.length);
  });

  socket.on('disconnect', function() {
    io.emit('message', 'PLAYER HAS DISCONNECTED');
    console.log('a user disconnected');
    console.log(socket.id);
    players.forEach(function(player, index) {
      if (player.socket.id == socket.id) {
        players.splice(index, 1);
      }
    });
  });
  socket.on('keypress', function(keypress) {
    console.log(keypress);
  });
  socket.on('keyboard', function(data) {
    console.log(data);
  });
  socket.on('update', function() {
    var data = {
      'num-players': players.length,
    };
    socket.emit('update', data);
  });
});

// Connect to sequelize database
// ===========================================================
// App.rootRequire('db1').sync(function() {
db.sync().then(() => {
  // Connect to mongo database.
  // ===========================================================
  mongoose.connect(config.mongo.url, function(err) {
    if (err) {
      throw err;
    }
    server.listen(port, host, function() {
      console.log(`Server at ${host}:${port}. [${process.env.NODE_ENV}]`);

      if (process.env.NODE_ENV === 'development') {
        // RELOAD BROWSER-SYNC
        /*
      request(`http://192.168.0.2:3000/__browser_sync__?method=reload`, function(err, res, body) {
         if (err) return console.log(err);
      });
      */
        var _host = '192.168.0.3';
        var _port = '3000';
        request(`http://${_host}:${_port}/__browser_sync__?method=reload`, function(err, res, body) {
          if (err) return console.log(`BROWSER-SYNC: ${err.message}`);
        });
      }

    });
  });
});

// });
