var Loc = App.masterRequire('site/local');
var Note = Loc.require('server/db').Note;
var express = require('express');
var note = express.Router();

note.get('/', function(req, res) {
  res.render('note/index.html');
});

note.get('/create', function(req, res) {
  res.render('note/create.html', {
  });
});

note.get('/list', function(req, res) {
  Note.all(function(err, notes) {
    if (err) {
      req.flash('errors', [{message: `FAILED TO GET NOTES: ${err}.`}]);
      return res.redirect('back');
    }
    res.render('note/list.html', {
      notes: notes
    });
  });
});

note.post('/create', function(req, res) {
  var errors = [];
  if (!req.body.title || req.body.title == '') {
    var error = {
      message: `title is required`
    };
    errors.push(error);
  }
  if (!req.body.description || req.body.description == '') {
    var error = {
      message: `description is required`
    };
    errors.push(error);
  }
  if (errors.length > 0) {
    req.flash('errors', errors);
    res.redirect('/site/note/create');
  } else {
    var note = {
      title: req.body.title,
      description: req.body.description
    };
    Note.create(note, function(err) {
      if (err) {
        req.flash('errors', [{message: `UNABLE TO CREATE NOTE: '${err}'`}]);
        res.redirect('back');
      } else {
        req.flash('successes', [{message: 'NOTE HAS BEEN ADDED'}]);
        res.redirect('back');
      }
    });
  }
});

module.exports = note;
