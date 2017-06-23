var path = require('path');
var base = path.join(__dirname, '..');
var root = path.join(__dirname, '..', '..', '..');

exports.require = function(name) {
   return require(base + '/' + name);
};

exports.base = function(name) {
   return base + '/' + name;
};

exports.root = function(name) {
   return root + '/' + name;
};
