var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
   name: String,
   description: String,
   removedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Movie', MovieSchema);
