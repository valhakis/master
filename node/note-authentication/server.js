var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

mongoose.connect('mongodb://localhost/node-authentication');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({ secret: 'boobies', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/public', express.static(__dirname + '/public'));

require('./app/routes')(app, passport);

var port = 8000;
var host = '127.0.0.1';

app.listen(port, function() {
  console.log(`Server is running at http://${host}:${port}.`);
  request('http://localhost:8001/__browser_sync__?method=reload');
});
