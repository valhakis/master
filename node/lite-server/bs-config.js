module.exports = {
   open: false,
   files: ['./**/*.{html,css,js}'],
   watchOptions: {ignored: 'node_modules'},
   server: {
      baseDir: ['./', '../../'],
      middleware: [
         function(req, res, next) {
            next();
         }
      ]
   }
};


