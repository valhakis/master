var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemSchema = new Schema({
   title: String,
   content: String,
   createdAt: {
      type: Date,
      default: Date.now
   },
   removedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Problem', ProblemSchema);
