var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = Loc.require('server/app/db');

var Todo = module.exports = db.model('Todo', new Schema({
  title: String,
  body: String,
}, {
  timestamps: true
}));
