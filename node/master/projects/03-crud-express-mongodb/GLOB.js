var config = require('./config');

exports.base = function(name) {
   return config.base + '/' + name;
};
