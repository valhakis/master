var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
   text: String,
   _document: {
      type: Schema.Types.ObjectId, ref: 'Document'
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   removedAt: {
      type: Date,
      default: null
   },
   finishedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Todo', TodoSchema);
