var loc = Loc['todo'];
var db = loc.require('app/db');
var moment = require('moment');

exports.index = function(req, res) {
  db.query(`SELECT * FROM posts ORDER BY createdAt DESC LIMIT ?`, [5], function(error, posts) {
    if (error) {
      res.locals.errors.push('Failed to fetch posts.');
    } else {
      res.locals.posts = posts;
      loc.render('posts/index', req, res);
    }
  });
};

exports.createTable = function(req, res) {
  db.query(loc.source('sql/posts.sql'), function(err, result) {
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
  db.backup('posts', `backup/${moment().format('YYYY-MM-DD_HH-mm-ss')}.posts.sql`, function(err) {
    if (err) {
      req.flash('error', 'Failed to backup table.');
    } else {
      db.query(`DROP TABLE posts`, function(err, result) {

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
