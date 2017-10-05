var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'admin',
  password : 'admin',
  database : 'shared'
});

connection.connect();

connection.query('SELECT * FROM customers;', function (error, results, fields) {
  if (error) throw error;

  console.log(result);
});

connection.end();
