var path = require('path');

var masterRoot = path.join(__dirname, '..');
var appRoot = path.join(__dirname);

var App = {};

App.root = function(name) {
  return appRoot + '/' + name;
};

App.require = function(name) {
  return require(appRoot + '/' + name);
};

App.masterRequire = function(name) {
  return require(masterRoot + '/' + name);
};

App.masterRoot = function(name) {
  return masterRoot + '/' + name;
};

global.App = App;
