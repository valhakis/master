var mysql = require('mysql');
var readline = require('readline');

var handleError = function(error) {
   console.log(JSON.stringify(error, ' ', 4));
};

var handleSuccess = function(success) {
   console.log(typeof success == 'object' ?JSON.stringify(success, ' ', 4) : success);
};

var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

var con = mysql.createConnection({
   host: '192.168.0.2',
   user: 'admin',
   password: 'admin',
   database: 'app'
});

var db = {};

db.connect = function() {
   con.connect(function(err) {
      if (err) return handleError(err);
      handleSuccess(`Connected to database.`);
   });
};

db.createTable = function() {
   var query = `
      CREATE TABLE customers (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255),
         address VARCHAR(255)
      );
   `;

   con.query(query, function(err, result) {
      if (err) return handleError(err);
      handleSuccess(result);
   });
};

db.dropTable = function() {
   con.query('DROP TABLE customers', function(err, result) {
      if (err) return handleError(err);
      handleSuccess(result);
   });
};

/*
rl.question('Example: ', (answer) => {
   console.log(`Recieved: ${answer}.`);
// rl.close();
});
*/

var logHelp = function() {
   console.log('[connect] -> connect to database.');
   console.log('[create table] -> create customers table.');
   console.log('[drop table] -> drop customers table.');
};

rl.prompt(true);
rl.on('line', (input) => {
   // console.log(`Received: [${input}].`);

   if (input == 'connect') {
      db.connect();
   } else if (input == 'create table') {
      db.createTable();
   } else if (input == 'drop table') {
      db.dropTable();
   } else if (input == 'help') {
      logHelp();
   } else {
      console.log(`WHAT IS WRONG WITH YOU!?`);
   }

   rl.prompt(true);
});


/*
var con = mysql.createConnection({
   host: '192.168.0.2',
   user: 'admin',
   password: 'admin',
   database: 'app'
});

con.connect(function(err) {
   if (err) return console.log(err);

   //con.query(`DROP TABLE customers`, function(err, result) {
   //process.exit();
   //});

});
*/


