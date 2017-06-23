// var env = Master.loadJSON('.env');
var bs = require('browser-sync').create();
var modRewrite = require('connect-modrewrite');

// var host = env.development.host;
// var port = env.development.port;

var host = 'localhost';
var port = '3000';

bs.init({
   server: {
      baseDir: './public',
      routes: {
         '/__/firebase/4.0.0/': App.masterRoot('node_modules/firebase')
      },
      middleware: [
         modRewrite([
            '!\\.\\w+$ /index.html [L]'
         ])

      ]
   },
   // proxy: `http://${host}:${port}`,
   open: false
});

// bs.watch(`${App.root}/dist/**/*.html`).on('change', bs.reload);
bs.watch([
   App.root('public/**/*.{html,js,css,json}')
   // `${App.root}/server/views/**/*.pug`,
   // `${App.root}/dist/**/*.html`,
   // `${App.root}/dist/**/*.js`,
   // `!${App.root}/dist/report.html`
]).on('change', function(filename) {
   console.log(`FILENAME: ${filename} changed.`);
   bs.reload();
});
