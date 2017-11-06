var watch = require('node-watch');
var webpack = require('webpack');
var app = Dev.require('app');

// WATCH CLIENT FOLDER AND START WEBPACK ONCE CHANGE
var watcher = watch(Loc.root('client'), {recursive: true}, function(evt, name) {
  console.log('STARTING OPENGL WEBPACK');

  // WEBPACK STARTS WATCHING
  var compiler = webpack(Loc.require('webpack.config'));
  var timefix = 11000;
  compiler.plugin('watch-run', function(watching, callback) {
    watching.startTime += timefix;
    callback();
  });
  compiler.plugin('done', function(stats) {
    stats.startTime += timefix;
  });
  compiler.watch({}, function(err, stats) {
    console.log(stats.toString({colors: true, chunks: false}));
  });

  // CLOSE CLIENT WATCH
  watcher.close();
});
