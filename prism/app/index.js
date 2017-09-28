var express = require('express');

var Loc = require('./Loc');

var app = express();

app.use('/', Loc.static('public'));

app.get('/', function(req, res) {
  Loc.render('index', req, res);
});

app.get('/demo', function(req, res) {
  Loc.render('demo', req, res);
});

module.exports = app;
