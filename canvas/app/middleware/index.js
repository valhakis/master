module.exports = function(app) {
  app.use(require('./locals'));
  app.use(Loc.static('public'));
  app.use('/api', Loc.require('app/api'));
};
