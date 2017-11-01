var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Game', new Schema({
  name: String,
  title: String,
  description: String,
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  removedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
}));
