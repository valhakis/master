const path = require('path');
const root = path.join(__dirname, '..', '..');
const master = path.join(__dirname, '..', '..', '..', '..');

exports.master = master;
exports.root = root;

exports.rootRequire = function(name) {
   return require(root + '/' + name);
};
