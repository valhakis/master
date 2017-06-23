// Where to include this file.
// ===========================================================
// [server dir]/app.js

var path = require('path');
var config = GET.require('config');

module.exports = function(app) {
   //  Set up view engine.
   // ===========================================================
   app.set('view engine', 'pug');
   app.locals.basedir = path.join(__dirname, 'views');
};
