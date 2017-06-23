var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
   createdAt: {
      type: Date,
      default: Date.now
   },
   posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
   }],
   codes: [{
      type: Schema.Types.ObjectId,
      ref: 'Code'
   }],
   updatedAt: {
      type: Date,
      default: null
   },
   removedAt: {
      type: Date,
      default: null
   },
   _creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
});

module.exports = mongoose.model('History', HistorySchema);
