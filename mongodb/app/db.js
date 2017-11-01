var fs = require('fs');
var mongodb = require('mongodb');

var Loc = App.loc['mongodb'];

var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://localhost:27017/mongodb';

fs.writeFileSync(Loc.root('data/mongodb.log'), '', 'utf-8');

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) {
    fs.appendFileSync(Loc.root('data/mongodb.log'), 'UNABLE TO CONNECT TO DATABASE\n', 'utf-8');
    return console.log(JSON.stringify(err, ' ', 2));
  }
  fs.appendFileSync(Loc.root('data/mongodb.log'), 'CONNECTED TO DATABASE\n', 'utf-8');
  db.createCollection('customers', function(err, res) {
    if (err) {
      fs.appendFileSync(Loc.root('data/mongodb.log'), 'Failed to create collection \'customers\'\n', 'utf-8');
      return console.log(err);
    }
    fs.appendFileSync(Loc.root('data/mongodb.log'), 'Created collection \'customers\'\n', 'utf-8');
    db.close();
  });
});


exports.create_db = function(req, res) {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      return res.send('FAILED TO CREATE DATABASE \'mongodb\'');
    }
    res.send('DATABASE \'mongodb\' HAS BEEN CREATED');
    db.close();
  });
};

exports.create_collection = function(req, res) {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      return res.send('FAILED TO CONNECT TO DATABASE \'mongodb\'');
    }
    db.createCollection('customers', function(err, response) {
      if (err) {
        return res.send(`FAILED TO CREATE COLLECTION 'customers'`);
      }
      res.send(`COLLECTION 'customers' CREATED`);
      db.close();
    });
  });
};

exports.insert_to_collection = function(req, res) {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      return res.send('FAILED TO CONNECT TO DATABASE \'mongodb\'');
    }
    var customer = {
      name: 'Viktor Vunle',
      address: 'Hight Northway 33'
    };
    db.collection('customers').insertOne(customer, function(err, response) {
      if (err) {
        return res.send(`FAILED TO INSERT CUSTOMER TO COLLECTIN 'customers'`);
      }
      res.send(`CUSTOMER NAMED '${customer.name}' INSERTED TO COLLECTION 'customers'`);
      db.close();
    });
  });
};

exports.insert_many_to_collection = function(req, res) {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      return res.send('FAILED TO CONNECT TO DATABASE \'mongodb\'');
    }
    var customers = [
      { name: 'Viktor Vunle', address: 'North Highway 33' },
      { name: 'William Valhakis', address: 'Mountain Town 4' },
      { name: 'Susan Sound', address: 'Heaven Streen 25' },
      { name: 'Chuck Norris', address: 'South Sideway 528' },
    ];
    db.collection('customers').insertMany(customers, function(err, response) {
      if (err) {
        return res.send(`FAILED TO INSERT MANY CUSTOMERS TO COLLECTIN 'customers'`);
      }
      res.send(`${response.insertedCount} CUSTOMERS INSERTED TO COLLECTION 'customers'`);
      db.close();
    });
  });
};

exports.insert_with_id = function(req, res) {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      return res.send('FAILED TO CONNECT TO DATABASE \'mongodb\'');
    }
    var customer = {
      _id: 1,
      name: 'Donald Trump'
    };
    db.collection('customers').insertOne(customer, function(err, response) {
      if (err) {
        if (err.code == 11000) {
          return res.send(`FAILED TO INSERT CUSTOMER WITH AN _id OF '1' INTO 'customers' COLLECTION, CAUSE THERE ALREADY EXISTS A CUSTOMER WITH AN _id of '1'`);
        } else {
          return res.send(`FAILED TO INSERT CUSTOMER WITH AN _id OF '1' INTO 'customers' COLLECTION`);
        }
      }
      res.send(`CUSTOMER WITH AN _id OF 1 INSERTED TO 'customers' COLLECTION`);
      db.close();
    });
  });
};
