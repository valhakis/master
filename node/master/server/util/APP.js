var path = require('path');

var paths = {
   root: path.join(__dirname, '../../')
};

exports.rootRequire = function(name) {
   return require(paths.root + '/' + name);
};
