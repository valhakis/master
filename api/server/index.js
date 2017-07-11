var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('api/local');

var api = express.Router();

api.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

api.get('/randomNames', function(req, res) {
  var source = JSON.parse(fs.readFileSync(Loc.root('data/randomNames.json'), 'utf-8'));
  res.json(source);
});

api.use('/', express.static(Loc.root('public')));

api.use('*', function(req, res, next) {
  var source = fs.readFileSync(Loc.root('views/404.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
  next();
});

module.exports = api;
