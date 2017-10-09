var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('db');

module.exports = db.model('Author', Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
}));
