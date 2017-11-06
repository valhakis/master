var fs = require('fs');
var path = require('path');
var express = require('express');
var callsite = require('callsite');

var Loc = {
  getBase: function(baseFile) {

    var stack = callsite();
    var dir = path.dirname(stack[2].getFileName());

    var found = false;

    while (!found) {
      var files = fs.readdirSync(dir);
      for (var i=0; i<files.length; i++) {
        if (files[i] == baseFile) {
          found = true;
          break;
        }
      }
      if (!found) {
        dir += '/..';
      }
    }

    return path.join(dir);
  },
  require: function(name) {
    return require(this.getBase('.base') + '/' + name);
  },
  static: function(name) {
    return express.static(this.getBase('.base') + '/' + name);
  },
  root: function(name) {
    return this.getBase('.base') + '/' + name;
  }
};

module.exports = Loc;
