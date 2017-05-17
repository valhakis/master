var path = require('path');
var paths = {
   root: path.join(__dirname, '../..'),
   server: path.join(__dirname, '..'),
};

exports.require = function(name) {
   return require(paths.server + '/' + name);
};
