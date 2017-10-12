var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'shared'
});

connection.connect();

connection.query('SELECT * FROM codes LIMIT 1', function(error) {
  if (error) {
    connection.query(`CREATE TABLE codes (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      language VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      body VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`, function(error) {
      if (error) console.log(error);
    });
  }
});

var router = express.Router();

var loc = Loc['mysql'];

router.get('/', function(req, res) {
  connection.query(`SELECT * FROM codes ORDER BY createdAt DESC`, function(error, result) {
    res.locals.codes = result;
    loc.render('codes/home.hbs', req, res);
  });
});

router.get('/create', function(req, res) {
  loc.render('codes/create.hbs', req, res);
});

router.post('/store', function(req, res) {
  connection.query(`INSERT INTO codes (title, language, description, body) VALUES (?, ?, ?, ?);`, [req.body.title, req.body.language, req.body.description, req.body.body], function(error, result) {
    if (error) {
      req.flash('errors', 'Failed to insert new code.');
    } else {
      req.flash('successes', 'New code has been inserted to database.');
    }
    res.redirect('back');
  });
});

router.get('/:id', function(req, res) {
  connection.query(`SELECT * FROM codes WHERE id=?`, [req.params.id], function(err, result) {
    if (err) {
      res.locals.errors.push('Failed to fetch code.');
    } else {
      res.locals.code = result[0];
    }
    loc.render('codes/show.hbs', req, res);
  });
});

router.get('/:id/edit', function(req, res) {
  connection.query(`SELECT * FROM codes WHERE id=?`, [req.params.id], function(err, result) {
    if (err) {
      res.locals.errors.push('Failed to fetch code.');
    } else {
      res.locals.code = result[0];
    }
    loc.render('codes/edit.hbs', req, res);
  });
});

router.post('/:id/update', function(req, res) {
  connection.query(`UPDATE codes SET title=?, language=?, description=?, body=? WHERE id=?`, [req.body.title, req.body.language, req.body.description, req.body.body, req.params.id], function(error, result) {
    if (error) {
      res.flash('errors', 'Failed to update code.');
    } else {
      req.flash('successes', 'Code has been updated.');
    }
    res.redirect(`/mysql/codes/${req.params.id}`);
  });
});

module.exports = router;
