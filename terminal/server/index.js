var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('terminal/local');

var terminal = express.Router();

terminal.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

terminal.use('/', express.static(Loc.root('public')));

module.exports = terminal;
