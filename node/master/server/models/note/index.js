var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
   title: String,
   content: String,
   removedAt: {
      type: Date,
      default: null
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Note', NoteSchema);
