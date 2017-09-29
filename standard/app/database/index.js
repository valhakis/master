var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

exports.initialize = function(Loc) {
  return new Promise(function(resolve) {
    resolve();
  });
};

exports.connect = function(cb) {
  MongoClient.connect('mongodb://localhost:27017/mongodb', function(err, db) {
    if (err) {
      return console.log(err);
    }
    cb(db);
  });
};
