var loc = Loc['todo'];
var db = loc.require('app/db');
var moment = require('moment');

exports.index = function(req, res) {
  db.query(`SELECT * FROM todos ORDER BY createdAt DESC;`, function(err, todos) {
    if (err) {
      res.locals.errors.push('Failed to fetch todos.');
    } else {
      res.locals.todos = todos;
    }
    loc.render('todos/index', req, res);
  });
};

exports.create = function(req, res) {
  loc.render('todos/create', req, res);
};

exports.store = function(req, res) {
  db.query(`INSERT INTO todos (title, body) VALUES (?, ?);`, [req.body.title, req.body.body], function(err, result) {
    if (err) {
      req.flash('error', 'Failed to create todo.');
    } else {
      req.flash('success', 'Todo has been created.');
    }

    res.redirect('back');
  });
};

exports.createTable = function(req, res) {
  db.query(loc.source('sql/todos.sql'), function(err, result) {
    if (err) {
      if (err.errno == 1050) {
        req.flash('error', 'Table already exists.');
      } else {
        req.flash('error', 'Failed to create table.');
      }
    } else {
      req.flash('success', 'Table has been created.');
    }
    res.redirect('back');
  });
};

exports.dropTable = function(req, res) {
  db.backup('todos', `backup/${moment().format('YYYY-MM-DD_HH-mm-ss')}.todos.sql`, function(err) {
    if (err) {
      req.flash('error', 'Failed to backup table.');
    } else {
      db.query(`DROP TABLE todos`, function(err, result) {

        if (err) {
          req.flash('error', 'Failed to drop table.');
        } else {
          req.flash('success', 'Table has been dropped.');
        }
        res.redirect('back');
      });
    }
  });
};

exports.show = function(req, res) {
  db.query(`SELECT * FROM todos WHERE id=?`, [req.params.id], function(err, todos) {
    if (err) {
      res.locals.errors.push('Failed to fetch todo.');
    } else {
      res.locals.todo = todos[0];
    }
    loc.render('todos/show', req, res);
  });
};

exports.createPost = function(req, res) {
  db.query(`SELECT * FROM todos WHERE id=?`, [req.params.id], function(err, result) {
    if (err) {
      res.locals.errors.push('Failed to fetch todo.');
    } else {
      res.locals.todo = result[0];
    }

    loc.render('todos/posts/create', req, res);
  });
};

exports.storePost = function(req, res) {
  db.query(`INSERT INTO posts (title, body) VALUES (?, ?)`, [req.body.title, req.body.body], function(error, result) {
    if (error) {
      req.flash('errors', ['Failed to store post in the database.']);
    } else {
      req.flash('successes', ['Post stored successfully in the database.']);
    }
    res.redirect('back');
  });
};
