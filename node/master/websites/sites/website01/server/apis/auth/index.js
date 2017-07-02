var config = App.rootRequire('/websites/sites/website01/config');
var express = require('express');
var fs = require('fs');

var root = config.root;

var auth = express.Router();

auth.get('/', function(req, res) {
  var source = fs.readFileSync(root + '/views/login.html', 'utf8');
  res.send(source);
});

auth.get('/register', function(req, res) {
  var source = fs.readFileSync(root + '/views/register.html', 'utf8');
  res.send(source);
});

auth.post('/register', function(req, res) {
  res.send(req.body);
});

auth.get('/authenticate', function(req, res) {
  res.redirect('/websites/website1/auth');
});

auth.post('/authenticate', function(req, res) {

});

module.exports = auth;
