var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
   name: String,
   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

module.exports = mongoose.model('Author', AuthorSchema);
