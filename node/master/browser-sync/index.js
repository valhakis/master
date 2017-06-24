var env = Master.loadJSON('.env');
var bs = require('browser-sync').create();

exports.start = function() {

  var host = env.development.host;
  var port = env.development.port;

  bs.init({
    port: 3000,
    proxy: `http://${host}:${port}`,
    // proxy: `http://192.168.0.3:4000`,
    open: false
  });

  /*
  bs.init({
    port: ,
    proxy: `http://${host}:${port}`,
    open: false
  });
  */

  // bs.watch(`${App.root}/dist/**/*.html`).on('change', bs.reload);
  bs.watch([
    `${App.root}/php-site/public/**/*.{html,js,css,php}`,
    `${App.root}/static/**/*.{html,js,css}`,
    `!${App.root}/static/**/*.{js,json}`,
    `${App.root}/site/**/*.{html,js,css}`,
    // `!${App.root}/site/**/client/**/*.{html,js,css}`,
    `${App.root}/server/views/**/*.pug`,
    `${App.root}/server/sample/**/*.mu`,
    `${App.root}/dist/**/*.html`,
    `${App.root}/dist/**/*.js`,
    `!${App.root}/dist/report.html`
  ]).on('change', function(filename) {
    console.log(`[BS] FILENAME: ${filename} changed.`);
    bs.reload();
  });

};
