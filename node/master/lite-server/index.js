var spawn = require('child_process').spawn;

var LiteServer = {};

LiteServer.spawn = null;

LiteServer.start = function(callback) {
   console.log("I'm starting lite server.");

   if (LiteServer.spawn !== null) {
      console.log('LITE SERVER IS ALREADY RUNNING.');
      return callback();
   }

   LiteServer.spawn = spawn('lite-server', [], {
      stdio: 'inherit',
      cwd: __dirname
   });
   callback();
};

LiteServer.status = function(callback) {
   if (LiteServer.spawn == null) {
      callback(false);
   } else {
      callback(true);
   }
};

LiteServer.stop = function(callback) {
   console.log("I'm stopping lite server.");

   if (LiteServer.spawn == null) {
      console.log('LITE SERVER IS ALREADY STOPPED.');
      return callback();
   }

   LiteServer.spawn.kill();
   LiteServer.spawn = null;
   callback();
};

module.exports = LiteServer;
