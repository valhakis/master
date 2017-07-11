var path = require('path');
var request = require('request');

var root;
var masterRoot;

root = path.join(__dirname, '..');
masterRoot = path.join(__dirname, '..', '..');

var App = global.App = {};

App.root = function(name) {
  return root + '/' + name;
};

App.require = function(name) {
  return require(root + '/' + name);
};

var config = App.require('config');
var env = App.require('environment');

App.masterRoot = function(name) {
  return masterRoot + '/' + name;
};

App.masterRequire = function(name) {
  return require(masterRoot + '/' + name);
};

App.restart = function() {
  request(`http://${config['app-host']}:${config['app-port']}/restart`);
};

App.reload = function() {
  request(`http://${config['bs-host']}:${config['bs-port']}/__browser_sync__?method=reload`);
};

App.env = env;

App.port = env.port;
App.host = env.host;

