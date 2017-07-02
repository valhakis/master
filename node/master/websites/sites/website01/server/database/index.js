var config = App.rootRequire('/websites/sites/website01/config');

var sqlite = require('sqlite3');

var root = config.root;

var db = new sqlite.Database(root + '/data/database.sqlite');

db.serialize(function() {
  /*
  db.run(`
    CREATE TABLE Persons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL
    );
  `);
  */
  //db.run(`SELECT * FROM sqlite_master`, function(err, result) {
    //console.log(err, result);
  //});
  db.each(`SELECT name FROM sqlite_master WHERE type='table'`, function(err, row) {
    if (err) {
      throw new Error(err);
    }
    // console.log(row);
  });
  db.all(`SELECT name FROM sqlite_master WHERE type='table'`, function(err, data) {
    if (err) {
      throw new Error(err);
    }
    var tables = [];
    for (var x=0; x<data.length; x++)
    {
      tables.push(data[x].name);
    }
    console.log('tables:', tables);
  });
});

// db.close();

module.exports = db;
