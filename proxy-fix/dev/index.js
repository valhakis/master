var spawn = require('child_process').spawn;
var path = require('path');

var bs = require("browser-sync").create();

spawn('nodemon', ['.'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..', 'node-server'),
});

spawn('php', ['-S', '192.168.0.3:7001'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..', 'php-server'),
});

bs.init({
  host: '192.168.0.3',
  port: 7002,
  proxy: 'http://192.168.0.3:7000',
  open: false
});

bs.watch('*.html').on('change', bs.reload);
