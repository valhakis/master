var express = require('express');
var Handlebars = require('handlebars');
var layouts = require('handlebars-layouts');
var fs = require('fs');
var path = require('path');

Loc['bootstrap'] = {
  _root: path.join(__dirname, '..'),
  require: function(name) {
    return require(this._root + '/' + name);
  },
  root: function(name) {
    return this._root + '/' + name;
  },
};

var loc = Loc['bootstrap'];

var app = express();

var render = function(path, req, res) {
  Handlebars.registerPartial('layout', fs.readFileSync(loc.root('views/lay/base.hbs'), 'utf-8'));
  Handlebars.registerPartial('footer', fs.readFileSync(loc.root('views/inc/footer.hbs'), 'utf-8'));
  Handlebars.registerPartial('navigation', fs.readFileSync(loc.root('views/inc/navigation.hbs'), 'utf-8'));
  var source = fs.readFileSync(loc.root(`views/${path}.hbs`), 'utf-8');
  var template = Handlebars.compile(source);
  res.end(template(res.locals));
};

app.use(function(req, res, next) {
  res.locals.app = {
    name: 'Bootstrap'
  };
  next();
});

app.get('/', function(req, res) {
  render('home', req, res);
});

app.get('/about', function(req, res) {
  render('about', req, res);
});

module.exports = app;
