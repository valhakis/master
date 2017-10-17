// /notes

var fs = require('fs');
var handlebars = require('handlebars');
var path = require('path');
var config = App.require('config');
var express = require('express');
var learnopengl = express.Router();

var Loc = App.masterRequire('learnopengl/Local');

learnopengl.use(Loc.require('server/routes'));

var static = express.static;

learnopengl.get('/scripts', function(req, res) {
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

learnopengl.get('/', function(req, res) {
  var template = handlebars.compile(fs.readFileSync(Loc.root('views/index.html'), 'utf-8'));

  var dirs = [];

  var files = fs.readdirSync(Loc.root('programs'));
  files.forEach((file) => {
    if (fs.lstatSync(Loc.root(`programs/${file}`)).isDirectory()) {
      var dir = {
        name: file,
        path: `/learnopengl/programs/${file}`,
        fullPath: Loc.root(`programs/${file}`)
      };
      dirs.push(dir);
    }
  });

  var programs = [];
  dirs.forEach(function(dir) {
    var program = {
      name: dir.name,
      dir: dir
    };
    programs.push(program);
  });

  res.status(200).end(template({
    programs: programs
  }));
});

learnopengl.use('/programs', static(Loc.root('programs')));
learnopengl.use(static(Loc.root('public')));

module.exports = learnopengl;
