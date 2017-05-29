var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

/* connection */
mongoose.connect('mongodb://localhost/note-area');

var BlogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, createdAt: Date }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

var Blog = mongoose.model('Blog', BlogSchema);

var PersonSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

PersonSchema.virtual('fullName').get(function() {
  return this.name.first + ' ' + this.name.last;
});

var Person = mongoose.model('Person', PersonSchema);

var william = new Person({
  name: {
    first: 'William',
    last: 'Valhakis'
  }
});

console.log(william);

console.log(william.fullName);
