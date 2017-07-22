require('../globals');

var watch = require('node-watch');
var config = App.require('admin/config');
var spawn = require('child_process').spawn;
var bs = require("browser-sync").create();
var server = App.require('admin/server');

var serverWatchList = App.require('watch').server;
var clientWatchList = App.require('watch').client;

spawn('node', ['index.js'], {
  stdio: 'inherit',
  cwd: App.root('server')
});

bs.init({
  proxy: `${App.require('server/config').host}:${App.require('server/config').port}`,
  open: false
});

watch(clientWatchList, {recursive: true}, function(evt, name) {
  name = name.slice(App.root('').length);
  console.log(`${name} changed ${evt}.`);
  bs.reload();
});
