var paths = {
  app: './app',
  dist: './dist'
};
module.exports = {
  open: false,
  files: [`${paths.app}/**/*.{html,css,js}`],
  watchOptions: {ignored: 'node_modules'},
  server: {
    baseDir: paths.app,
    middleware: [
      function(req, res, next) {
        next();
      }
    ]
  }
};


