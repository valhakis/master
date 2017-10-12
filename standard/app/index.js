var express = require('express');
var fs = require('fs');
var Mustache = require('mustache');

var app = express();
App.loc['standard'] = App.createLoc([__dirname, '..']);

var db = App.loc['standard'].require('app/database');
var Standard = App.loc['standard'].require('app/database/models/standard');

app.use('/', express.static(App.loc['standard'].root('public')));

app.get('/', function(req, res) {
  var source = fs.readFileSync(App.loc['standard'].root('views/index.mst'), 'utf-8');
  var rendered = Mustache.render(source);
  res.end(rendered);
});

module.exports = app;
