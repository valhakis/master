var env = Master.loadJSON('.env');
var bs = require('browser-sync').create();

// <<<<<<< HEAD
exports.start = function() {
  // =======

  // >>>>>>> 2f6a2a05de5bb23ac494d2fb190cbb39af6352d3

  var host = env.development.host;
  var port = env.development.port;
  /*
   bs.init({
      proxy: `http://192.168.0.2:4000`,
      open: false
   });
   */

  bs.init({
    port: 80,
    proxy: `http://${host}:${port}`,
    open: false
  });

  // bs.watch(`${App.root}/dist/**/*.html`).on('change', bs.reload);
  bs.watch([
    `${App.root}/php-site/public/**/*.{html,js,css,php}`,
    `${App.root}/site/**/*.{html,js,css}`,
    `${App.root}/server/views/**/*.pug`,
    `${App.root}/server/sample/**/*.mu`,
    `${App.root}/dist/**/*.html`,
    `${App.root}/dist/**/*.js`,
    `!${App.root}/dist/report.html`
  ]).on('change', function(filename) {
    console.log(`FILENAME: ${filename} changed.`);
    bs.reload();
  });

};
