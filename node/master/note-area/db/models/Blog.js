var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, createdAt: Date }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
