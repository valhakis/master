var path = require('path');
var fs = require('fs');

var root = path.join(__dirname, '..', '..', '..');
var base = path.join(__dirname, '..');

var share = {
  paths: {
    root: root,
    base: base
  }
};

share.require = function(name) {
  return require(share.paths.root + '/' + name);
};

share.example = function() {
  console.log('share is working');
};

share.read = function(path) {
  return fs.readFileSync(share.paths.base + '/' + path, 'utf-8');
};

module.exports = {
  share: share
};
