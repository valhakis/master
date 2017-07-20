module.exports = function(app) {
  app.use('/2017-07-18', App.masterRequire('2017-07-18/app'));
  app.use('/bootstrap', App.masterRequire('bootstrap/server').app);
  app.use('/blog', App.masterRequire('blog/server').app);
};
