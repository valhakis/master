var sqlite3 = require('sqlite3');
var db = new sqlite3.Database(App.root('data/database.sqlite'));

module.exports = db;
