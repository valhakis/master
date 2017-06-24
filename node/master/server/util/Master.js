var fs = require('fs');
var path = require('path');

var root = path.join(__dirname, '../..');
var masterRoot = path.join(__dirname, '../../../..');

exports.loadJSON = function(file) {
   return JSON.parse(fs.readFileSync(root + '/' + file));
};

exports.require = function(name) {
   return require(masterRoot + '/' + name);
};

//var env = exports.require('.env');

//var env = exports.loadJSON('.env');
