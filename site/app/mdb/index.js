var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  pass: 'admin',
  database: 'shared'
});

connection.connect();

module.exports = connection;


