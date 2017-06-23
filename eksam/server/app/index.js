var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var Sequelize = require('sequelize');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: App.root('data/session.sqlite')
});
sequelize.sync();

var app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'securepassword5',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routes')(app, passport);
require('./auth')(app, passport);

// app.set('view engine', '')

app.use(express.static(App.root('public')));
app.use('/public', express.static(App.root('dist/public')));
app.use('/dist', express.static(App.root('dist')));
app.use('/node', express.static(App.masterRoot('node_modules')));

module.exports = app;
