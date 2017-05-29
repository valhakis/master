var spawn = require('child_process').spawn;

var process = {
   spawn: null
};

exports.start = function() {
   if (process.spawn === null) {
      process.spawn = spawn('php', ['-S', '192.168.0.2:4500', '-t', 'public'], {
         cwd: __dirname,
         stdio: 'inherit'
      });
   }
};
