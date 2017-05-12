var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
   title: String,
   body: String,
   user: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
   }
});

module.exports = mongoose.model('Post', PostSchema);
