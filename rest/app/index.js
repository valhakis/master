if (!global.Loc) {
  global.Loc = {};
}

var path = require('path');

Loc['rest'] = {
  _root: path.join(__dirname, '..'),
  require: function(name) {
    return require(this._root + '/' + name);
  },
  root: function(name) {
    return this._root + '/' + name;
  },
};

var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use(Loc['rest'].require('app/router')());

module.exports = app;
