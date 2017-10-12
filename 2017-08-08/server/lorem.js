class Lorem {
  constructor() {

  }

  create() {
    db.serialize(function(){
      db.run(`
        create table lorem (info TEXT);
      `);
    });
  }

  insert() {
    db.serialize(function() {
      var stmt = db.prepare(`INSERT INTO lorem VALUES (?)`);
      for (var i=0; i<10; i++) {
        stmt.run(`lorem ${i}`);
      }
      stmt.finalize();
    });
  }

  show() {
    db.serialize(function() {
      db.each(`SELECT rowid AS id, info FROM lorem`, function(err, row) {
        // console.log(`${row.id}: ${row.info}`);
      });
    });
  }

  truncate() {
    db.run(`
        delete from lorem
      `);
  }
}

