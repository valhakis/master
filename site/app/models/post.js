var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Post', {
  title: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
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
