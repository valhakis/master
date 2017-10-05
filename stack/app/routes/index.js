module.exports = function(app) {
  app.use('/', require('./main'));
  app.use('/stacks', require('./stacks'));
};
