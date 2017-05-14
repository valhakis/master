var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CodeSchema = new Schema({
   body: String,
   createdAt: {
      type: Date,
      default: Date.now
   },
   removedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Code', CodeSchema);
