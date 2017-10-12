var path = require('path');
var spawn = require('child_process').spawn;
var bs = require("browser-sync").create();

var env = require('../env');

var proc = spawn('/mingw32/bin/nodemon', ['.'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..', 'server')
});

// .init starts the server
bs.init({
  host: env.host,
  port: env.bs.port,
  proxy: `http://${env.host}:${env.port}`,
  open: false
});

bs.watch([
  path.join(__dirname, '..', 'public') + '/**/*.{js,html,css}'
]).on('change', bs.reload);
