var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db = mongoose.createConnection('mongodb://localhost:27017/nsite', {
  useMongoClient: true
});

db.catch(err => {
  console.log('ERROR:', JSON.stringify(err, ' ', 2));
});

module.exports = db;
