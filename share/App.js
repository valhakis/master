// global.App = require('../../share/App.js').initialize(path.join(__dirname, '..'));
var path = require('path');
var express = require('express');

var RED = '\x1b[91m';
var RESET = '\x1b[0m';

/*
for (var i=0; i<100; i++) {
  var color = "\x1b[" + i + "m";
  console.log(color, 'A STRING OF TEXT', i, RESET);
}
*/

var App = {
  _root: null,
  _masterRoot: path.join(__dirname, '..'),
};

App.require = function(path) {
  return require(`${this._root}/${path}`);
};

App.root = function(path) {
  if (!path) {
    path = '';
  }
  return `${this._root}/${path}`;
};

App.masterRoot = function(path) {
  return `${this._masterRoot}/${path}`;
};

App.masterRequire = function(path) {
  return require(`${this._masterRoot}/${path}`);
};

App.initialize = function(root) {
  if (!root) {
    return console.log(`${RED}ERROR: ${RESET}Project root is required.`);
  }
  this._root = root;

  return Object.create(this);
};

App.masterStatic = function(location) {
	return express.static(this._masterRoot + '/' + location);
};

App.createLoc = function(location) {
  var Loc = {
    _root: path.join(location[0]?location[0]:'', location[1]?location[1]:'', location[2]?location[2]:'', location[3]?location[3]:''),
    root: function(name) {
      return this._root + '/' + name;
    },
    require: function(name) {
      return require(this._root + '/' + name);
    },
    static: function(name) {
      return express.static(this._root + '/' + name);
    }
  };
  return Loc;
};

App.loc = {};

module.exports = App;

