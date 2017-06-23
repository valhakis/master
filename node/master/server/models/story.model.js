var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = new Schema({
   title: String,
   fans: [{
      type: Schema.Types.ObjectId,
      ref: 'Person'
   }],
   _creator: {
      type: Schema.Types.ObjectId,
      ref: 'Person'
   },
});

module.exports = mongoose.model('Story', StorySchema);
