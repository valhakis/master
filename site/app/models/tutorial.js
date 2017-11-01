var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Tutorial', {
  title: String,
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
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  codes: [{ type: Schema.Types.ObjectId, ref: 'Code' }],
});
