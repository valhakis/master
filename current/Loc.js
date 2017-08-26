var express = require('express');

var _root = __dirname;

exports.static = function(location) {
	return express.static(App.masterRoot(`current/${location}`));
};

exports.require = function(location) {
	return require(_root + '/' + location);
};

exports.root = function(location) {
	return _root + '/' + location;
};
