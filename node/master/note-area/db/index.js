var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

/* connection */
mongoose.connect('mongodb://localhost/note-area');

var db = mongoose.connection;

db.once('open', function() {
  console.log('CONNECTED TO MONGO DATABASE');
});

module.exports = {
  db: mongoose.connection,
  Blog: require('./models/Blog'),
  Person: require('./models/Person'),
};
