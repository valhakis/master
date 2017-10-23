var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('db');

module.exports = db.model('Post', new Schema({
  title: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  removedAt: {
    type: Date,
    default: null
  },
  codes: [{ type: Schema.Types.ObjectId, ref: 'Code' }],
}, {
  timestamps: true
}));
