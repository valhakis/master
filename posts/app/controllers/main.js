var db = Loc.require('app/db');

exports.index = function(req, res) {
  db.query(`SELECT * FROM posts ORDER BY createdAt DESC`, function(error, posts) {
    if (error) {
      res.locals.error = 'Failed to fetch posts.';
    } else {
      res.locals.posts = posts;
    }
    res.locals.layout = 'main';
    res.render('home');
  });
};
