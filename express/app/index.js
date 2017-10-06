var express = require('express');

var db = Loc.require('app/db');

var app = express();

app.set('views', Loc.root('views'));
app.set('view engine', 'pug');
app.set('view options', {
  layout: false
});
app.locals.basedir = Loc.root('views');

app.use(Loc.static('public'));

require('./middleware')(app);

app.get('/', function(req, res) {
  db.query(`SELECT * FROM codes ORDER BY createdAt DESC LIMIT 3`, function(err, codes) {
    if (err) {
      res.locals.error = 'Failed to fetch codes.';
    } else {
      res.locals.codes = codes;
    }
    res.render('index', {
      title: 'index',
    });
  });
});

app.get('/static', function(req, res) {
  res.render('static', {
    title: 'static'
  });
});

app.get('/login', function(req, res) {
  res.render('login', {
    title: 'login'
  });
});

app.get('/pug', function(req, res) {
  db.query(`SELECT * FROM codes ORDER BY createdAt DESC`, function(err, codes) {
    if (err) {
      res.locals.error = 'Failed to fetch codes.';
    } else {
      res.locals.codes = codes;
    }
    res.locals.build = function() {
      return 'HAS BEEN BUILT';
    };
    res.render('pug', {
      title: 'Pug'
    });
  });
});

module.exports = app;