var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('db');

var Post = module.exports = db.model('Post', new Schema({
  title: String,
  body: String,
  removedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
}));
