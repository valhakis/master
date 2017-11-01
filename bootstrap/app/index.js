var express = require('express');
var Handlebars = require('handlebars');
var layouts = require('handlebars-layouts');
var fs = require('fs');
var path = require('path');

var app = express();

require('./config')(app);

app.use(Loc.static('public'));

require('./routes')(app);

app.use(function(req, res, next) {
  res.locals.app = {
    name: 'Bootstrap'
  };
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.use('*', function(req, res, next) {
  res.locals.data = {
    method: req.method,
    path: req.path,
    baseUrl: req.baseUrl,
    url: req.url,
    originalUrl: req.originalUrl,
  };
  res.status(404).render('404');
});

module.exports = app;
