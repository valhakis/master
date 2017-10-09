module.exports = function(app) {
  app.use('/', require('./main'));
  app.use('/posts', require('./post'));
  app.use('/users', require('./user'));
  app.use('/auth', require('./auth'));
  app.use('/tutorials', require('./tutorial'));
};
