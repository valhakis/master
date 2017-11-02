var path = require('path');
var express = require('express');

var app = {};

app._root = path.join(__dirname, '..');

app.require = function(name) {
  return require(this._root + '/' + name);
};

app.root = function(name) {
  return this._root + '/' + name;
};

app.static = function(name) {
  return express.static(this._root + '/' + name);
};

module.exports = app;
