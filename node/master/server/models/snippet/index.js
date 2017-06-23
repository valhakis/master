var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SnippetSchema = new Schema({
   name: String,
   html: String,
   javascript: String,
   css: String,
   description: String,
   createdAt: {
      type: Date,
      default: Date.now
   },
   removedAt: {
      type: Date,
      default: null
   }
});

module.exports = mongoose.model('Snippet', SnippetSchema);
