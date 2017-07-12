var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('site/local');

var site = express.Router();

site.use(Loc.renderer);
require('./config')(site);
site.use('/note', require('./note'));
site.use('/database', require('./db').router);

site.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

site.use('/', express.static(Loc.root('public')));

module.exports = site;
