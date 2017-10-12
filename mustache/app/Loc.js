var path = require('path');
exports._root = path.join(__dirname, '..');

exports.root = function(name) {
  return exports._root + '/' + name;
};
