var config = App.rootRequire('apps/sqlite/config');
var root = config.root;

var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database(`${root}/data/database.sqlite`);

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)", function(err) {
    if (err) return console.log(err);
  });
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i=0; i<10; i++)
  {
    stmt.run(`Lorem Ipsum ${i}`);
  }
  stmt.finalize();
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    console.log(row.id, row.info);
  });
});

db.close();
