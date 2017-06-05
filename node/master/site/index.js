module.exports = function (app) {

  require('./10/server')(app);

  app.use('/site/11', require('./11/server'));
  app.use('/site/14', require('./14/server'));
};
