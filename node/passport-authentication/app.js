var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/passport-authentication');

var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
   secret: 'secret',
   saveUninitialized: true,
   resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
   errorFormatter: function(params, msg, value) {
      var namespace = params.split('.');
      var root = namespace.shift();
      var formParams = root;

      while (namescape.length) {
         formParams += '[' + namespace.shift()+ ']'
      }

      return {
         param: formParams,
         msg: msg,
         value: value
      };
   }
}));

app.use(flash());

app.use(function(req, res, next) {
   res.locals.success_msg = req.flash('success_msg');
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   next();
});

app.use('/', routes);
app.use('/users', users);

app.set('port', (process.env.PORT || 3000));
app.set('host', (process.env.HOST || '192.168.0.2'));

app.listen(app.get('port'), app.get('host'), function() {
   console.log(`Server started at ${app.get('host')}:${app.get('port')}.`);
});
