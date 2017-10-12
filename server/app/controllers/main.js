var db = App.require('server/db/shared');

var fs = require('fs');
var hbs = require('handlebars');
var bcrypt = require('bcryptjs');
var User = App.require('mongo-api/user');

var render = function(path, res) {
  var source = fs.readFileSync(App.root('server/views/') + path, 'utf-8');
  res.end(hbs.compile(source)(res.locals));
};

exports.GET = {
  index: function(req, res) {
    // FETCHES 3 POSTS FROM THE DATABASE
    db.query('SELECT * FROM posts ORDER BY createdAt DESC LIMIT 3', function(err, posts) {
      if (err) {
        res.locals.errors.push('Failed to fetch posts.');
      } else {
        res.locals.posts = posts;
      }
      // FETCHES 3 STACKS FROM THE DATABASE
      db.query('SELECT * FROM stacks ORDER BY createdAt DESC LIMIT 3', function(err, stacks) {
        if (err) {
          res.locals.errors.push('Failed to fetch stacks.');
        } else {
          res.locals.stacks = stacks;
        }
        // RENDERS INDEX PAGE
        render('index.hbs', res);
      });
    });
  },
  chat: function(req, res) {
    render('chat.hbs', res);
  }
};

exports.POST = {

};
