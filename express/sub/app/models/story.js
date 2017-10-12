var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('db');

module.exports = db.model('Story', Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  title: String
}));

