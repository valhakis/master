var handlebars = require('handlebars');
var express = require('express');
var fs = require('fs');
var Loc = App.masterRequire('learnopengl/Local');

var templates = {
  index: handlebars.compile(fs.readFileSync(Loc.root('views/program/index.html'), 'utf-8')),
  // create: handlebars.compile(fs.readFileSync(Loc.root('views/program/create.html'), 'utf-8')),
};

var program = express.Router();

program.get('/', function(req, res) {
  res.status(200).end(templates.index({
  }));
});

program.get('/create', function(req, res) {
  if (!req.session.number) 
    req.session.number = 0;
  else
    req.session.number += 1;
  console.log(req.session.number);
  res.status(200).end(templates.create({
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
