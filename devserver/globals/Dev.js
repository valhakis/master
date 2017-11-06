var path = require('path');

var Dev = global.Dev = {};

Dev._root = path.join(__dirname, '..');

Dev.require = function(name) {
  return require(this._root + '/' + name);
};
