var express = require('express');
var fs = require('fs');
var Mustache = require('mustache');

var app = require('./app');

var Loc = App.loc['node'] = App.createLoc([__dirname, '..']);

app.use('/', Loc.static('public'));

app.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.mst'), 'utf-8');
  var rendered = Mustache.render(source);
  res.end(rendered);
});

app.get('/custom', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/custom/index.mst'), 'utf-8');
  var rendered = Mustache.render(source);
  res.end(rendered);
});

module.exports = app;
