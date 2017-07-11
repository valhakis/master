var express = require('express');
var handlebars = require('handlebars');
var fs = require('fs');
var Loc = App.masterRequire('todo/local');

var todo = express.Router();

todo.get('/', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/index.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

todo.get('/create', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/todo/create.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({}));
});

todo.get('/list', function(req, res) {
  var source = fs.readFileSync(Loc.root('views/todo/list.html'), 'utf-8');
  var template = handlebars.compile(source);
  res.end(template({
    todos: JSON.parse(fs.readFileSync(Loc.root('data/data.json'), 'utf-8'))
  }));
});

todo.post('/create', function(req, res) {
  var file = Loc.root('data/data.json');
  var todos = fs.readFileSync(file, 'utf-8');
  if (todos == '') {
    todos = [];
  } else {
    todos = JSON.parse(todos);
  }
  todos.push(req.body.content);
  fs.writeFileSync(file, JSON.stringify(todos, ' ', 2), 'utf-8');
  console.log(todos);
  res.redirect('back');
});

todo.use('/', express.static(Loc.root('public')));

module.exports = todo;
