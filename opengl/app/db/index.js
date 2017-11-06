var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/opengl', {
  useMongoClient: true
});

db.catch(err => {
  console.log('ERROR:', JSON.stringify(err, ' ', 2));
});

module.exports = db;
