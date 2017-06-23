var path = require('path');
var exphbs = require('express-handlebars');

module.exports = function (app) {
   app.set('views', path.join(__dirname, 'views'));
   // app.engine('', exphbs({ defaultLayout: 'layout' }));
   app.locals.basedir = GET.base('views');
   app.set('view engine', 'pug');
};

