var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
   title: String,
   body: String,
   user: {
      type: Schema.Types.ObjectId, ref: 'User'
   },
   postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   comments: [{
      text: String,
      postedBy: {
         type: Schema.Types.ObjectId,
         ref: 'User'
      }
   }]
});

module.exports = mongoose.model('Post', PostSchema);
