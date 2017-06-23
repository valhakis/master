var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MongooseSchema = new Schema({
   name: String
});

module.exports = mongoose.model('Mongoose', MongooseSchema);
