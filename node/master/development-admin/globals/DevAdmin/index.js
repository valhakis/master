var path = require('path');
var root = path.join(__dirname, '../..');
var master = path.join(__dirname, '../../../../..');

exports.master = master;
exports.root = root;

console.log(master);

exports.require = function(name) {
   return require(root + '/' + name);
};

exports.path = function(location, name) {
   if (location == 'master') {
      return master + '/' + name;
   } else if (location == 'root') {
      return root + '/' + name;
   }
};
