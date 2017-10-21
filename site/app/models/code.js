var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Code', new Schema({
  title: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  language: String,
}, {
  timestamps: true
}));
