var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('db');

var itemSchema = new Schema({
  title: String,
  name: String,
  imageUrl: String,
  body: String,
}, {
  timestamps: true,
});

module.exports = db.model('Item', itemSchema);
