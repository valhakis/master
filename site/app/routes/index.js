
module.exports = function(app) {
  app.use('/', require('./main'));
  app.use('/posts', require('./post'));
  app.use('/users', require('./user'));
  app.use('/auth', require('./auth'));
  app.use('/tutorials', require('./tutorial'));
  app.use('/colors', require('./colors'));
  app.use('/d3', require('./d3'));
  app.use('/w3', require('./w3'));
  app.use('/books', require('./books'));
  app.use('/games', require('./game'));
  app.use('/boxen', require('./box'));
  app.use('/gallery', require('./gallery'));
  app.use('/images', require('./image'));
  app.use('/videos', require('./video'));
};
