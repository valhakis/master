var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/shared', {
  useMongoClient: true
});

module.exports = db;
