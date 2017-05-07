// Where to include this file.
// ===========================================================
// [server dir]/app.js

var path = require('path');
var mongoose = require('mongoose');
var config = GET.require('config');

mongoose.Promise = global.Promise;

module.exports = function(app) {
   //  Set up view engine.
   // ===========================================================
   app.set('view engine', 'pug');
   app.locals.basedir = path.join(__dirname, 'views');

   // Connect to mongo database.
   // ===========================================================
   mongoose.connect(config.mongo.url);
};
