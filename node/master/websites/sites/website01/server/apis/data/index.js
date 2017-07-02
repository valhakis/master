var config = App.rootRequire('/websites/sites/website01/config');

var root = config.root;

var express = require('express');
var fs = require('fs');

var api = express.Router();

api.get('/users', function(req, res) {
  var users = require(root + '/data/users');
  res.send(users);
});

module.exports = api;
