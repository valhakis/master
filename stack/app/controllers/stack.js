var loc = Loc['stack'];
var db = loc.require('app/db');
var moment = require('moment');

exports.index = function(req, res) {
  db.query(`SELECT * FROM stacks ORDER BY createdAt DESC`, function(err, stacks) {
    console.log(err);
    if (err) {
      if (err.errno == 1146) {
        res.locals.errors.push('Stacks table does not exist.');
      } else {
        res.locals.errors.push('Failed to fetch stacks from database.');
      }
    } else {
      res.locals.stacks = stacks;
    }
    loc.render('stacks/index', req, res);
  });
};

exports.create = function(req, res) {
  loc.render('stacks/create', req, res);
};

exports.store = function(req, res) {
  db.query(`INSERT INTO stacks (name, description) VALUES (?, ?);`, [req.body.name, req.body.description], function(err, result) {
    if (err) {
      req.flash('errors', ['Failed to store stack in the database.']);
    } else {
      req.flash('successes', ['Stack has been stored in the database.']);
    }

    res.redirect('back');
  });
};

exports.createTable = function(req, res) {
  db.query(loc.source('sql/stacks.sql'), function(err, result) {
    if (err) {
      if (err.errno == 1050) {
        req.flash('errors', ['Stacks already exists.']);
      } else {
        req.flash('errors', ['Failed to create table.']);
      }
    } else {
      req.flash('successes', ['Table has been created.']);
    }
    res.redirect('back');
  });
};

exports.dropTable = function(req, res) {
  var errors = [];
  var successes = [];

  db.backup('stacks', `backup/${moment().format('YYYY-MM-DD_HH-mm-ss')}.stacks.sql`, function(err) {
    if (err) {
      errors.push('Failed to backup stacks table.');

      if (errors.length > 0) {
        req.flash('errors', errors);
      }
      if (successes.length > 0) {
        req.flash('successes', successes);
      }
      res.redirect('back');
    } else {
      successes.push('Table has been backed up.');

      db.query(`DROP TABLE stacks`, function(err, result) {
        if (err) {
          errors.push('Failed to drop table.');
        } else {
          successes.push('Table has been dropped.');
        }

        if (errors.length > 0) {
          req.flash('errors', errors);
        }
        if (successes.length > 0) {
          req.flash('successes', successes);
        }
        res.redirect('back');
      });
    }
  });
};

exports.show = function(req, res) {
  db.query(`SELECT * FROM stacks WHERE id=?`, [req.params.id], function(err, results) {
    if (err) {
      req.flash('errors', ['Failed to fetch stack.']);
    } else {
      res.locals.stack = results[0];
    }
    loc.render('stacks/show', req, res);
  });
};
