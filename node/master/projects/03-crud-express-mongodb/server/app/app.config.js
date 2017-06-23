// App Configuration.

module.exports = function(app) {
   app.set('view engine', 'pug');
   app.locals.basedir = App.path('server', 'views');
};
