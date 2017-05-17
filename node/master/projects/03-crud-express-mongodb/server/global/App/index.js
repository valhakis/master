var config = require('../../config');

exports.require = function(name) {
   return require(config.paths.server + '/' + name);
};

exports.path = function(location, name) {
   if (location == 'server') {
      return config.paths.server + '/' + name;
   }
};
