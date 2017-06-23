module.exports = {
   open: false,
   files: ['./source/**/*.{html,css,js}'],
   watchOptions: {ignored: 'node_modules'},
   server: {
      baseDir: ['./source/', '../../node_modules/'],
      middleware: [
         function(req, res, next) {
            next();
         }
      ]
   }
};


