var loc = Loc['todo'];
var db = loc.require('app/db');

var Todo = loc.require('app/db/todo');

exports.tables = function(req, res) {
  db.query('SHOW TABLES', function(err, result) {
    if (err) return res.send(err);
    return res.send(result);
  });
};

exports.home = function(req, res) {
  Todo.latest(3, function(err, todos) {
    if (err) {
      res.locals.errors = ['Failed to fetch latest todos'];
    } else {
      res.locals.todos = todos;
    }
    loc.render('home', req, res);
  })
};
