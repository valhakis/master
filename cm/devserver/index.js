var path = require('path');
var spawn = require('child_process').spawn;
var webpack = require('webpack');
var bs = require("browser-sync").create();

var env = require('../env');

var proc = spawn('nodemon', ['.'], {
  stdio: 'inherit',
  cwd: env.root + '/server'
});

// .init starts the server
bs.init({
  port: env.bs.port,
  proxy: `http://${env.host}:${env.port}`,
  open: false,
  ui: false
});

bs.watch([
  env.root + '/public/**/*.{js,html,css}'
]).on('change', bs.reload);

var compiler = webpack(require('../webpack.config.js'));

var watching = compiler.watch({}, function(err, stats) {
  console.log(stats.toString({
    colors: true
  }));
});
