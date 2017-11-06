var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = App.require('server/app/db');

var Product = module.exports = db.model('Product', new Schema({
  title: String,
  description: String,
}, {
  timestamps: true
}));
