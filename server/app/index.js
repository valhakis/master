var mongoose = require('mongoose');
var express = require('express');
var fs = require('fs');
var path = require('path');
var hbs = require('handlebars');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/master', {
  useMongoClient: true
}).then(() => {

}).catch(err => {
  console.log('FAILED TO CONNECT TO MONGODB: ', JSON.stringify(err, ' ', 2));
});

hbs.registerHelper('json', function(content) {
  return JSON.stringify(content);
});

var app = express();

require('./config')(app);

require('./middleware')(app).then(function() {
  require('./routes')(app);
});

/*
app.get('/', function(req, res) {
  var source = fs.readFileSync(path.join(__dirname, '../views/index.hbs'), 'utf-8');

  res.locals.title = 'THERE IS NO TITLE';

  res.end(hbs.compile(source)(res.locals));
  // res.render('index');
});
*/

app.get('/Prism/themes', function(req, res) {
  var data = fs.readdirSync(App.masterRoot('node_modules/prismjs/themes'), 'utf-8')
  res.send(data);
});

module.exports = app;
