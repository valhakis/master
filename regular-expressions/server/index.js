var path = require('path');
global.App = require('../../share/App.js').initialize(path.join(__dirname, '..'));

var env = App.masterRequire('env');

var server = {
  port: 5000,
  host: env.host
};

var Loc = {
  _root: path.join(__dirname, '..'),
  root: function(name) {
    return this._root + '/' + name;
  },
  require: function(name) {
    return require(this._root + '/' + name);
  }
};

var cluster = require('cluster');

if (cluster.isMaster) {
  var bs = require('browser-sync').create();
  var watch = require('node-watch');

  bs.init({
    port: '3000',
    host: env.host,
    proxy: `${server.host}:${server.port}`,
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

  worker = cluster.fork();

  var watcher = watch(Loc.root('app'), {recursive: true});
  watcher.on('change', function() {
    process.kill(worker.process.pid, 'SIGKILL');
  });

  cluster.on('exit', function(worker, code, signal){
    console.log(`WORKER: {PID: ${worker.process.pid}} has died.`);
    watcher.close();
    worker = cluster.fork();
    watcher = watch(Loc.root('app'), {recursive: true});
    watcher.on('change', function() {
      process.kill(worker.process.pid, 'SIGKILL');
    });
  });

  bs.watch([
    Loc.root('public')
  ]).on('change', bs.reload);

} else {
  var express = require('express');

  var app = express();
  var port = server.port;
  var host = server.host;

  app.use('/', Loc.require('app'));

  app.listen(port, host, function() {
    console.log(`SERVER STARTED AT: ${host}:${port}, {PID: ${process.pid}}.`);
  });
}
