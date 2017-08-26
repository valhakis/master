var express = require('express');
var _root = App.masterRoot('sqlite');

exports.static = function(path) {
	return express.static(_root + '/' + path);
};

exports.root = function(path) {
	return _root + '/' + path;
};

exports.require = function(path) {
	return require(_root + '/' + path);
};
