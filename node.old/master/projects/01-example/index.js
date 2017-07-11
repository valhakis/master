var spawn = require('child_process').spawn;

var project = {};

project.spawn = null;

project.start = function(callback) {
   if (project.spawn !== null) {
      return callback('PROJECT 01 HAS ALREADY STARTED!');
   }
   project.spawn = spawn('lite-server', [], {
      stdio: 'inherit',
      cwd: __dirname
   });
};

project.stop = function(callback) {
   if (project.spawn === null) {
      return callback('PROJECT 01 HAS ALREADY BEEN STOPPED!');
   }

   project.spawn.kill();
   project.spawn = null;
};

project.status = function(callback) {
   if (project.spawn === null) {
      return callback(false);
   }
   callback(true);
};

module.exports = project;
