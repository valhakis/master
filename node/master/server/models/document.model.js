var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
   todos: [{
      type: Schema.Types.ObjectId, ref: 'Todo'
   }],
   name: {
      type: String,
      required: true
   },
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

module.exports = mongoose.model('Document', DocumentSchema);
