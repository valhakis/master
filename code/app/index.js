var express = require('express');
var path = require('path');

var app = express();

var Loc = {
  _root: path.join(__dirname, '..'),
  root: function(name) {
    return this._root + '/' + name;
  }
};

app.use('/', express.static(Loc.root('public')));

module.exports = app;
