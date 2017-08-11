var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: {
    type: String,
    Required: 'Title is required.'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['completed', 'skipped', 'ongoing']
    }],
    default: ['ongoing']
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
