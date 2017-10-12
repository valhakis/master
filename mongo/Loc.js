var express = require('express');
var path = require('path');

var root = __dirname;

exports.require = function(input) {
	return require(root + '/' + input);
};

exports.root = function(input) {
	return root + '/' + input;
};

exports.static = function(input) {
	return express.static(root + '/' + input);
};
