var sqlite3 = require('sqlite3');
var Loc = App.masterRequire('site/local');
var db = new sqlite3.Database(Loc.root('data/database.sqlite'));
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('database/index.html', {
  });
});

router.get('/notes/create', function(req, res) {
  db.serialize(function() {
    db.run(`CREATE TABLE notes (title TEXT, description TEXT);`, function(error) {
      if (error) {
        req.flash('errors', [{message: 'I failed to create table.'}]);
        res.redirect('back');
      } else {
        req.flash('successes', [{message: 'I was successful on creating table.'}]);
        res.redirect('back');
      }
    });
  });
});

router.get('/notes/delete', function(req, res) {
  db.serialize(function() {
    db.run(`DROP TABLE notes`, function(error) {
      if (error) {
        req.flash('errors', [{message: 'I failed to delete table.'}]);
        res.redirect('back');
      } else {
        req.flash('successes', [{message: 'I was successful on deleting table.'}]);
        res.redirect('back');
      }
    });
  });
});

module.exports = {
  router: router,
  Note: {
    create: function(note, callback) {
      db.serialize(function() {
        var stmt = db.prepare('INSERT INTO notes VALUES (?, ?)', function(err) {
          if (err) return callback(err.stack)
          stmt.run(note.title, note.description, function(err) {
            if (err) return callback(err.stack);
            stmt.finalize();
            callback(null);
          });
        });
      });
      // console.log(note);
      // callback(null, note);
    },
    all: function(callback) {
      db.serialize(function() {
        db.all(`SELECT rowid AS Id, title, description FROM notes`, function(err, notes) {
          if (err) {
            callback(err.stack);
          } else {
            callback(null, notes);
          }
        });
        //var notes = [];
        //db.each(`SELECT rowid AS id, title, description FROM notes`, function(err, row) {
          //if (err) {

          //}
        //});
      });
    }
  }
};
