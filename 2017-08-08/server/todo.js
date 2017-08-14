var db = App.require('server/db');

var todo = {};

todo.create = function(todo, cb) {
  db.serialize(function() {
    var stmt = db.prepare(`insert into todo (title, content) values (?, ?)`);
    stmt.run(todo.title, todo.content);
    stmt.finalize(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  });
};

todo.createTable = function(callback) {
  db.serialize(function() {
    db.run(`create table todo (
      id integer primary key autoincrement,
      title varchar(255) not null,
      content varchar(255) not null
    )`, function(err) {
      if (err) {
        callback({
          message: 'Failed to create todo table.'
        });
      } else {
        callback(null);
      }
    });
  });
};

todo.dropTable = function(callback) {
  db.serialize(function() {
    db.run(`drop table todo`, function(err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  });
};

/*
db.serialize(function() {
  db.run(`insert into todo (title, content) values ('title', 'content')`, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  db.all(`select * from todo`, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  db.each(`select * from todo`, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  // db.get('', [], cb);
});
*/

/*
todo.dropTable(function() {
  todo.createTable(function(err) {
    if (err) {
      console.log(err);
    }
  });
});
*/

module.exports = todo;
