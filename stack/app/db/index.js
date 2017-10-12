var loc = Loc['stack'];

var dump = require('mysqldump');
var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'shared'
});

pool.backup = function(table, dest, done) {
  dump({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'shared',
    tables: [table],
    dest: loc.root(dest)
  }, function(err) {
    if (err) {
      done(err);
    } else {
      done(null);
    }
  });
};

module.exports = pool;
