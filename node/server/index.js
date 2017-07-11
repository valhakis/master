var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('node/local');

var node = express.Router();

node.use(Loc.render);

node.use('/server', require('./server'));

node.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

node.use('/', express.static(Loc.root('public')));

module.exports = node;
