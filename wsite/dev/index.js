require('../globals');

var webpack = require('webpack');
var spawn = require('child_process').spawn;
var bs = require('browser-sync').create();
var fs = require('fs');
var env = Loc.require('env');

// webpack 
var compiler = webpack(Loc.require('webpack.config'));
var watching = compiler.watch({}, (err, stats) => {
  console.log(stats.toString({colors: true, chunks: false}));
});

// server nodemon configuration
fs.writeFileSync(Loc.root("server/nodemon.json"), JSON.stringify({
  watch: [
    Loc.root('server'),
    Loc.root('globals')
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
  cwd: Loc.root('server')
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
  Loc.root('server/views/**/*.{hbs,html,js}'),
  Loc.root('public/**/*.{hbs,html,js,css}'),
]).on('change', bs.reload);
