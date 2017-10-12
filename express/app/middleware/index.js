module.exports = function(app) {
  app.use(require('./locals'));

  app.use('/sub/app', Loc.require('sub/app/app'));
};
