var express = require('express');
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'shared'
});

db.connect();

db.query('SHOW TABLES', function(error, results, fields) {
  if (error) {
    return console.log(error);
  }
  // console.log(results);
});

db.query(`SELECT * FROM users LIMIT 1`, function(error, results, fields) {
  if (error) {
    db.query(`
    CREATE TABLE users (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `, function(error, results, fields) {
    if (error) {
      return console.log(error);
    }
    // console.log(results);
  })
  }
})

db.query(`SELECT * FROM customers LIMIT 1`, function(error, results, fields) {
  if (error) {
    db.query(`
    CREATE TABLE customers (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(200) NOT NULL,
      address VARCHAR(200) NOT NULL,
      salary INT(10) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `, function(error, results, fields) {
    if (error) {
      return console.log(error);
    }
    // console.log(results);
  })
  }
})


var app = express();

// CREATES Loc['demo']
require('./Loc')('angular', function() { 
  var loc = Loc['angular'];

  // SETS UP ALL PARTIALS
  loc.registerPartial('base', 'lay/base');
  loc.registerPartial('navigation', 'inc/navigation');
  loc.registerPartial('footer', 'inc/footer');

  // INCLUDES APPLICATION MIDDLEWARES
  require('./middleware')(app, function() {

    // INITIALIZES VIEW LOCAL VALUES
    app.use(function(req, res, next) {
      res.locals.app = {
        name: 'Angular'
      };
      next();
    });

    app.get('/', function(req, res) {
      loc.render('home', req, res);
    });

    app.get('/posts', function(req, res) {
      loc.render('posts', req, res);
    });

    app.get('/crud', function(req, res) {
      loc.render('crud', req, res);
    });

    app.get('/rest', function(req, res) {
      loc.render('rest', req, res);
    });

    app.get('/api', function(req, res) {
      loc.render('api', req, res);
    });

    app.get('/anomaly', function(req, res) {
      res.send('You are unusual compared to simliar likes of you.');
    });

    app.get('/brilliant', function(req, res) {
      res.send('YOU ARE NOT BRILLIANT, .. just kidding . you are.');
    });

    app.post('/brilliant', function(req, res) {
      res.send('YOU POSTED BRILLIANT ?!? HOW DARE YOU!?!');
    });

    app.put('/brilliant', function(req, res) {
      res.send('YOU PUT SOMETHING INTO BRILLIANT');
    });

    app.patch('/brilliant', function(req, res) {
      res.send('YOU PATCHED BRILLIANT, GOOD FOR YOU.');
    });

    app.delete('/brilliant', function(req, res) {
      res.send('YOU DELETED BRILLIANT! WHAT THE FUCK!');
    });

    var names = [ 
      'Valerie	Burgess',
      'Genevieve	Vaughn',
      'Patrick	Tran',
      'Chelsea	Barnett',
      'Marta	Taylor',
      'Tommy	Russell',
      'Ben	Pearson',
      'Scott	Ward',
      'Kate	Jackson',
      'Clay	Chambers',
    ];

    app.get('/generator/name', function(req, res) {
      res.send(names[Math.floor(Math.random() * names.length)]);
    });

    var addresses = [
      '7438 SE. Manchester Court Monroe, NY 10950',
      '6 Sutor Dr. Cleveland, TN 37312',
      '46 Lafayette St. Brighton, MA 02135',
      '1 Brown St. Fuquay Varina, NC 27526',
      '8 High Noon Ave. Niles, MI 49120',
      '755 Rock Maple Street Roseville, MI 48066',
    ];

    app.get('/generator/address', function(req, res) {
      res.send(addresses[Math.floor(Math.random() * addresses.length)]);
    });

    var customers = [
      { name: 'Ben	Pearson',   address: '7438 SE. Manchester Court Monroe, NY 10950', },
      { name: 'Scott	Ward',    address: '6 Sutor Dr. Cleveland, TN 37312', },
      { name: 'Kate	Jackson',   address: '1 Brown St. Fuquay Varina, NC 27526', },
      { name: 'Clay	Chambers',  address: '46 Lafayette St. Brighton, MA 02135', },
      { name: 'Antonio Shaw',   address: '8 High Noon Ave. Niles, MI 49120' },
    ];

    app.get('/static/customers', function(req, res) {
      res.send(customers);
    });

    app.get('/customers', function(req, res) {
      db.query('SELECT * FROM customers', function(err, result, fields) {
        if (err) {
          return console.log(err);
        }
        res.send(result);
      });
    });

    app.post('/customers', function(req, res) {
      db.query('INSERT INTO customers (name, address) VALUES (?, ?)', [req.body.name, req.body.address], function(err, result, fields) {
        if (err) {
          return res.send(err);
        } 
        res.send(result);
      });

    });

    app.get('/employees', function(req, res) {
      db.query('SELECT * FROM employees', function(err, result, fields) {
        if (err) return console.log(err);
        res.send(result);
      });
    });

    app.post('/users', function(req, res) {
      db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [req.body.name, req.body.email, req.body.password], function(err, result, fields) {
        if (err) return res.status(500).send(err);
        res.send(result);
      });
    });

    app.get('/users', function(req, res) {
      db.query('SELECT * FROM users', function(err, result, fields) {
        if (err) return res.send(err);
        res.send(result);
      });
    });

    app.delete('/users/drop', function(req, res) {
      db.query('DROP TABLE users', function(err, result, fields) {
        if (err) return res.send(err);
        return res.send(result);
      });
    });

  });

});

module.exports = app;
