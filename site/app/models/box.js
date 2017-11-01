var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Box', new Schema({
  title: String,
  description: String,
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  files: {
    html: String,
    javascript: String,
    css: String,
  }
}, {
  timestamps: true
}));
