var path = require('path');

var Master = global.Master = {};

Master._root = path.join(__dirname, '..');

Master.require = function(name) {
  return require(this._root + '/' + name);
};

Master.path = function(name) {
  return this._root + '/' + name;
};
