var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mongodb';

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('FAILED TO CONNECT TO MONGODB');
    return;
  }
  var customer = {
    name: 'Viktor Vunle',
    address: 'North Highway 33'
  };
  db.collection('customers').insertOne(customer, function(err, res) {
    if (err) {
      console.log('FAILED TO INSERT CUSTOMER');
    } else {
      console.log('CUSTOMER INSERTED');
    }
    db.close();
  });
});
