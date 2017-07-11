var valhakis = require('valhakis');
var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('highlighters/local');

var highlighters = express.Router();

highlighters.use(function(req, res, next) {

  res.render = function(path, data) {
    data = data || {};
    var source = fs.readFileSync(Loc.root(`views/${path}`), 'utf-8');
    var template = handlebars.compile(source);
    res.end(template(data));
  };

  next();
});

highlighters.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

highlighters.use('/prism', require('./routes/prism')(Loc));

highlighters.use('/', express.static(Loc.root('public')));

module.exports = highlighters;
