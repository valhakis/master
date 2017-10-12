var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mongodb';

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('FAILED TO CONNECT TO MONGODB');
    return;
  }
  console.log('DATABASE CREATED');
  db.createCollection('customers', function(err, res) {
    if (err) {
      console.log('FAILED TO CREATE COLLECTION');
      return;
    }
    console.log('COLLECTION CREATED');
    db.close();
  });
});
