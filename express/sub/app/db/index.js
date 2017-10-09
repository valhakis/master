var mongoose = require('mongoose');

module.exports = mongoose.createConnection('mongodb://admin:admin@ds013405.mlab.com:13405/master', {
  useMongoClient: true,
});
