var handlebars = require('handlebars');
var express = require('express');
var fs = require('fs');
var Loc = App.masterRequire('learnopengl/Local');

var program = express.Router();

program.get('/', function(req, res) {
  var files = fs.readdirSync(Loc.root('programs'));
  var programs = [];
  files.forEach(function(file) {
    var program = {
      name: file,
      source: fs.readFileSync(Loc.root(`programs/${file}/src/main.cpp`), 'utf-8')
    };
    programs.push(program);
  });
  var template = handlebars.compile(fs.readFileSync(Loc.root('views/program/index.html'), 'utf-8'));
  res.status(200).end(template({
    programs: {
      count: files.length,
      list: programs
    }
  }));
});

program.get('/create', function(req, res) {
  if (!req.session.number) 
    req.session.number = 0;
  else
    req.session.number += 1;
  var template = handlebars.compile(fs.readFileSync(Loc.root('views/program/create.html'), 'utf-8'));
  res.status(200).end(template({
    errors: req.session.errors || []
  }));
});

program.post('/create', function(req, res) {

  var errors = [];

  var plan = {
    title: req.body.title || '',
    description: req.body.description || ''
  };

  if (plan.title == '') {
    var error = {
      message: `[title] can not be empty.`
    };
    errors.push(error);
  }

  if (plan.description == '') {
    var error = {
      message: `[description] can not be empty.`
    };
    errors.push(error);
  }

  if (errors.length > 0) {
    req.session.errors = errors;
    res.redirect('/notes/plan/create');
  } else {
    res.send(req.body);
  }
});

program.use(function(req, res, next) {
  next();
});


module.exports = program;
