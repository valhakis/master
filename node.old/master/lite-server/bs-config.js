var path = require('path');
var root = path.join(__dirname, '../../..');

module.exports = {
   host: '192.168.0.2',
   port: 3100,
   open: false,
   files: ['public/**/*.{html,css,js}'],
   server: {
      baseDir: 'public',
      routes: {
         "/bower_components": root + '/bower_components',
         "/node_modules": root + '/node_modules',
      }
   }
};


