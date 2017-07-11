require('../server/globals');
var env = Master.loadJSON('.env');
var spawn = require('child_process').spawn;

var process = {
   spawn: null
};

var host = env['php-site'].host;
var port = env['php-site'].port;

exports.start = function() {
   if (process.spawn === null) {
      process.spawn = spawn('php', ['-S', `${host}:${port}`, '-t', 'public'], {
         cwd: __dirname,
         stdio: 'inherit'
      });
   }
};
