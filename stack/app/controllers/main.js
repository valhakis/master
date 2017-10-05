var loc = Loc['stack'];
var db = loc.require('app/db');

exports.index = function(req, res) {
  db.query(`SELECT * FROM stacks ORDER BY createdAt DESC LIMIT 3`, function(err, stacks) {
    if (err) {
      res.locals.errors.push('Failed to fetch stacks.');
    } else {
      res.locals.stacks = stacks;
    }
    loc.render('home', req, res);
  });
};
