var path = require('path');

var root = path.join(__dirname, '..');

exports.root = root;

exports.require = function(name) {
   return require(root + '/server/' + name);
};

exports.rootRequire = function(name) {
   return require(root + '/' + name);
};
