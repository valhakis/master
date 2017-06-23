var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  }
});

PersonSchema.virtual('fullName').get(function() {
  return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('Person', PersonSchema);
