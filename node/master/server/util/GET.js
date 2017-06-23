var path = require('path');

var root = path.join(__dirname, '../../../..');
var paths = {
   server: path.join(__dirname, '../'),
   base: path.join(__dirname, '../', '../'),
};

var GET = {};

GET.root = function(name) {
   return root + '/' + name;
};

GET.server = function(name) {
   return paths.server + '/' + name;
};

GET.base = function(name) {
   return paths.base + '/' + name;
};

GET.require = function(name) {
   return require(paths.server + '/' + name);
};

GET.rootRequire = function(name) {
  return require(paths.base + '/' + name);
};


module.exports = GET;
