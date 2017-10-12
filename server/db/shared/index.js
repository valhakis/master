var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'shared'
});

module.exports = pool;
