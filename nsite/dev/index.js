require('../globals');

var webpack = require('webpack');
var spawn = require('child_process').spawn;
var bs = require('browser-sync').create();
var fs = require('fs');
var env = App.require('env');

// webpack 
var compiler = webpack(App.require('webpack.config'));
var watching = compiler.watch({}, (err, stats) => {
  console.log(stats.toString({
    colors: true, 
    chunks: false
  }));
});

// server nodemon configuration
fs.writeFileSync(App.root("server/nodemon.json"), JSON.stringify({
  watch: [
    App.root('server'),
    App.root('globals')
  ],
  ignore: [
  ]
}, ' ', 2), 'utf-8');

spawn('nodemon', ['-q', '.'], {
  stdio: 'inherit',
  env: (function() {
    var env = Object.create(process.env);
    env.mode = 'development';
    return env;
  })(),
  cwd: App.root('server')
});

bs.init({
  port: env.bs_port,
  host: env.host,
  proxy: `${env.host}:${env.port}`,
  open: false,
  ui: false,
  logLevel: "info", // 'info' 'silent' 'debug'
  logConnections: true,
  logFileChanges: true,
  logSnippet: true,
  notify: false,
  reloadOnRestart: true,
  online: false,
});

bs.watch([
  App.root('server/views/**/*.{hbs,html,js}'),
  App.root('public/**/*.{hbs,html,js}'),
]).on('change', bs.reload);
