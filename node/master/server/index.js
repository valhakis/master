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
         originalLogger(filename);
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

// Connect to sequelize database
// ===========================================================
db.sync().then(() => {
// Connect to mongo database.
// ===========================================================
  mongoose.connect(config.mongo.url, function(err) {
    if (err) {
      throw err;
    }
    server.listen(port, host, function() {
      console.log(`server at ${host}:${port}. [${process.env.NODE_ENV}]`);

      if (process.env.NODE_ENV === 'development') {
        // RELOAD BROWSER-SYNC
        /*
      request(`http://192.168.0.2:3000/__browser_sync__?method=reload`, function(err, res, body) {
         if (err) return console.log(err);
      });
      */
        request(`http://${config['browser-sync'].host}:${config['browser-sync'].port}/__browser_sync__?method=reload`, function(err, res, body) {
          if (err) return console.log(`BROWSER-SYNC: ${err.message}`);
        });
      }

    });
  });
});

