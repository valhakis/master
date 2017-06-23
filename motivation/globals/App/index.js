var path = require('path');
var root = path.join(__dirname, '../..');
var master = path.join(__dirname, '../../..');

exports.path = function(name) {
  return root + '/' + name;
};

exports.root = function(name) {
  return root + '/' + name;
};

exports.master = function(name) {
  return master + '/' + name;
};
