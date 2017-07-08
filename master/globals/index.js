var path = require('path');
var request = require('request');

var root;
var masterRoot;

root = path.join(__dirname, '..');
masterRoot = path.join(__dirname, '..', '..');

global.App = {};

global.App.root = function(name) {
  return root + '/' + name;
};

global.App.require = function(name) {
  return require(root + '/' + name);
};

var config = global.App.require('config');

global.App.masterRoot = function(name) {
  return masterRoot + '/' + name;
};

global.App.masterRequire = function(name) {
  return require(masterRoot + '/' + name);
};

global.App.restart = function() {
  request(`http://${config['app-host']}:${config['app-port']}/restart`);
};

global.App.reload = function() {
  request(`http://${config['bs-host']}:${config['bs-port']}/__browser_sync__?method=reload`);
};
