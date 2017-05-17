module.exports = function(app) {
   app.set('view engine', 'pug');
   app.set('views', DevAdmin.root + '/views');
   app.locals.basedir = DevAdmin.root + '/views';
};
