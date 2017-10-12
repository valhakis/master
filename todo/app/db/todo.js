var loc = Loc['todo'];
var db = loc.require('app/db');

exports.latest = function(num, done) {

  db.query(`SELECT * FROM todos ORDER BY createdAt DESC LIMIT ${num}`, function(err, todos) {
    if (err) {
      done(err, null);
    } else {
      done(null, todos);
    }
  });

};
