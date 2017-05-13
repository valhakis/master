var path = require('path');
var spawn = require('child_process').spawn;

var serverSpawn = null;

process.on('close', () => {
   if (serverSpawn.kill) {
      serverSpawn.kill();
   }
});

module.exports = {
   start: function(callback) {
      if (serverSpawn === null) {
         serverSpawn = spawn('nodemon', [], {
            cwd: path.join(__dirname, 'server'),
            stdio: 'inherit'
         });
         callback('EXAMPLE HAS BEEN STARTED.');
      } else {
         callback('EXAMPLE HAS ALREADY STARTED.');
      }
   },
   stop: function(callback) {
      if (serverSpawn !== null) {
         serverSpawn.kill();
         serverSpawn = null;
      } 
      callback('EXAMPLE HAS BEEN KILLED.');
   },
   status: function(callback) {
      var open = true;

      if (!serverSpawn) {
         open = false;
      }

      callback(open);
   }
};
