var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
   id: mongoose.Schema.ObjectId,
   body: {
      type: String,
      required: [true, 'Body is required.']
   },
   removed: {
      type: Date,
      default: Date.now
   }
}, {
   timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);
