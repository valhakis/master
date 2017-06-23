var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
   name: {
      type: String,
      unique: true
   },
   stories: [{
      type: Schema.Types.ObjectId,
      ref: 'Story'
   }],
});

module.exports = mongoose.model('Person', PersonSchema);
