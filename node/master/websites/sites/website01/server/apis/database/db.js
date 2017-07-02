var config = App.rootRequire('/websites/sites/website01/config');
var root = config.root;
var db = require(root + '/server/database');

exports.numTables = function(callback) {
  db.serialize(function() {
    db.all(`SELECT name FROM sqlite_master WHERE type='table'`, function(err, data) {
      for (var x=0; x<data.length; x++)
      {
        if (data[x].name == 'sqlite_sequence') {
          data.splice(x, 1);
        }
      }
      callback(data.length);
    });
  });
};

exports.getTables = function(callback) {
  db.serialize(function() {
    db.all(`SELECT name FROM sqlite_master WHERE type='table'`, function(err, data) {
      for (var x=0; x<data.length; x++)
      {
        if (data[x].name == 'sqlite_sequence') {
          data.splice(x, 1);
        }
      }
      callback(data);
    });
  });
};

exports.tableInfo = function(tableName, callback) {
  db.serialize(function() {
    // db.run(`ALTER TABLE ${tableName} ADD COLUMN email VARCHAR(100)`);
    db.all(`SELECT sql FROM sqlite_master WHERE tbl_name='${tableName}' AND type='table'`, function(err, data) {
      // console.log(data);
    });
  });
  // console.log(tableName);
};

exports.getTableSql = function(tableName, callback) {
  db.serialize(function() {
    db.all(`SELECT sql FROM sqlite_master WHERE tbl_name='${tableName}' AND type='table'`, function(err, data) {
      // console.log(data[0].sql);
      callback(data[0].sql);
    });
  });
};

exports.addColumn = function(data, callback) {
  var tableName = data.tableName;
  var columnName = data.columnName;
  var columnType = data.columnType;
  db.serialize(function() {
    db.run(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`);
  });
};
