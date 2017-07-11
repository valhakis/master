// /notes

var fs = require('fs');
var handlebars = require('handlebars');
var path = require('path');
var config = App.require('config');
var express = require('express');
var canvas = express.Router();

var Loc = App.masterRequire('canvas/Local');

// canvas.use(Loc.require('server/routes'));
var workplace = Loc.require('server/workplace')(Loc);
canvas.use('/workplace', Loc.require('server/routes/workplace')(Loc));

var static = express.static;

canvas.get('/scripts', function(req, res) {
  var scripts = [];
  var dir = Loc.root('public/scripts');
  var files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (fs.lstatSync(`${dir}/${file}`).isFile()) {
      scripts.push(file);
    }
  });

  res.send(scripts);
});

canvas.get('/', function(req, res) {
  var template = handlebars.compile(fs.readFileSync(Loc.root('views/index.html'), 'utf-8'));
  res.status(200).end(template({}));
});

canvas.use(static(Loc.root('public')));

//canvas.use('*', function(req, res, next) {
  //var template = handlebars.compile(fs.readFileSync(Loc.root('views/404.html'), 'utf-8'));
  //res.status(404).end(template({}));
  //next();
//});

module.exports = canvas;
