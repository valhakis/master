var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
   name: String,
   description: String,
   removedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Book', BookSchema);
