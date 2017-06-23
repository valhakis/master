require('./db');

var Blog = require('./db').Blog;
var Person = require('./db').Person;


var william = new Person({
  name: {
    first: 'William',
    last: 'Valhakis'
  }
});

