var path = require('path');

var root = path.join(__dirname, '../../../..');
var paths = {
   server: path.join(__dirname, '../')
};

var GET = {};

GET.root = function(name) {
   return root + '/' + name;
};

GET.server = function(name) {
   return paths.server + '/' + name;
};

GET.require = function(name) {
   return require(paths.server + '/' + name);
};


module.exports = GET;
