var path = require('path');
var request = require('request');

var root = path.join(__dirname, '..', '..');
var masterRoot = path.join(root, '..');

exports.root = function(name) {
  return root + '/' + name;
};

exports.rootRequire = function(name) {
  return require(root + '/' + name);
};

exports.masterRoot = function(name) {
  return masterRoot + '/' + name;
};

exports.masterRootRequire = function(name) {
  return require(masterRoot + '/' + name);
};

exports.port = '80';
exports.host = '192.168.0.2';

exports.reload = function() {
  request('http://localhost:3000/__browser_sync__?method=reload');
};
