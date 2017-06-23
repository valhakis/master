var path = require('path');
var root = path.join(__dirname, '../..');

exports.require = function(name) {
   return require(root + '/' + name);
};
