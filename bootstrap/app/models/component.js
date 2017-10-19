var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('app/db');

module.exports = db.model('Component', new Schema({
  name: String,
}, {
  timestamps: true
}));
