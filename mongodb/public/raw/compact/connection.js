var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017/mongodb', function(err, db) {
  if (err) throw err;

  db.close();
});
