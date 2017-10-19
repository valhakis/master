var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'shared'
});

// console.log(pool);

module.exports = pool;
