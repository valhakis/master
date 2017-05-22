var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TutorialSchema = new Schema({
   name: {
      type: String
   },
   title: {
      type: String
   },
   codes: [{
      title: String,
      body: String
   }],
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
