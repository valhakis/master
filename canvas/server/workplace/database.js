
module.exports = function(Loc) {
  var sqlite3 = require('sqlite3');
  var db = new sqlite3.Database(Loc.root('data/workplace.sqlite'));

  return {
    db: db
  };
};
