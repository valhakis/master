var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TutorialSchema = new Schema({
   title: {
      type: String
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   removedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Tutorial', TutorialSchema);
