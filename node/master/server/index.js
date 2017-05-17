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

var request = require('request');
var http = require('http');
var config = require('./config');

var app = require('./app');

var host;
var port;

if (process.env.NODE_ENV === 'development') {
   host = config.development.host;
   port = config.development.port;
} else {
   process.env.NODE_ENV = 'production';
   host = config.production.host;
   port = config.production.port;
}

var server = http.createServer(app);

server.listen(port, host, function() {
   console.log(`server at ${host}:${port}. [${process.env.NODE_ENV}]`);

   // RELOAD BROWSER-SYNC
   request.get('http://192.168.0.2:3000/__browser_sync__?method=reload')
      .on('response', function(response) {
      });

});
