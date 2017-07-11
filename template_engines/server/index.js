var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('template_engines/local');

var template_engines = express.Router();

template_engines.use('/pug', require('./routes/pug')(Loc));

template_engines.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

template_engines.use('/', express.static(Loc.root('public')));

module.exports = template_engines;
