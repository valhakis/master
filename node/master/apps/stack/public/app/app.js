var db;

try {
  db = openDatabase('app', '1.0', 'description', 2 * 1024 * 1024);
} catch (e) {
  console.log(e);
}

try {
  db.transaction(function(tx) {
    var sql;

    /*
    sql = `DROP TABLE Persons`;

    tx.executeSql(sql, [], function(tx, result) {
      console.log('RESULT:', result);
    }, function(tx, error) {
      console.log('ERROR:', error);
    });
    */

    sql = `
      CREATE TABLE IF NOT EXISTS Persons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL 
      );
    `;

    tx.executeSql(sql, [], function(tx, result) {
      console.log('RESULT:', result);
    }, function(tx, error) {
      console.log('ERROR:', error);
    });

    /*
    sql = `
      SELECT * FROM Persons WHERE username='admin'
    `;

    tx.executeSql(sql, [], function(tx, result) {
      if (result.rows.length == 1)
      {
        var user = result.rows.item(0);
        console.log(user);
      }
    }, function(tx, error) {
      console.log('ERROR:', error);
    });
    */

    /*
    sql = `
      INSERT INTO Persons (
        username,
        password
      ) VALUES (
        'admin',
        'admin'
      );
    `;

    tx.executeSql(sql, [], function(tx, result) {
      console.log('RESULT:', result);
    }, function(tx, error) {
      console.log('ERROR:', error);
    });
    */

  });
} catch (e) {
  console.log(e)
}

function validationcheck(){
  if (document.mylogin.username.value == "") {
    console.log('please enter username');
    document.mylogin.username.focus();
  } else if (document.mylogin.psw.value == "") {
    console.log('please enter password');
    document.mylogin.psw.focus();
  } else {
    var username = document.mylogin.username.value;
    var password = document.mylogin.password.value;
    try {

      db.transaction(function(tx) {
        tx.executeSql(`SELECT * FROM Persons WHERE username='${username}'`, [], function(tx, result) {
          if (result.rows.length == 1)
          {
            var user = result.rows.item(0);

            if (username == user.username && password == user.password)
            {
              console.log('LOGIN SUCCESS');
            } else 
            {
              console.log('LOGIN FAILURE');
            }
          }
        }, function(tx, error) {
          console.log('ERROR:', error);
        });
      });

    } catch (e) {
      console.log(e);
    }
  }
}
