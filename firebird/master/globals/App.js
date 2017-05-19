var path = require('path');
var root = path.join(__dirname, '../');
var masterRoot = path.join(__dirname, '../../..');

exports.require = function(name) {
   return require(root + '/' + name);
};

exports.root = function(name) {
   return root + '/' + name;
};

exports.masterRoot = function(name) {
   return masterRoot + '/' + name;
};
