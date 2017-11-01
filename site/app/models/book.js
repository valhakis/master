var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Book', new Schema({
  title: String,
  body: String,
  author: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  codes: [{ type: Schema.Types.ObjectId, ref: 'Code' }],
}, {
  timestamps: true
}));
