var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CodeSchema = new Schema({
   title: String,
   body: String,
   createdAt: {
      type: Date,
      default: Date.now
   },
   removedAt: {
      type: Date,
      default: null
   },
   language: {
      name: String,
      value: String,
   }
});

module.exports = mongoose.model('Code', CodeSchema);
