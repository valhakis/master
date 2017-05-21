var bs = require('browser-sync').create();

exports.start = function() {

   bs.init({
      proxy: `http://192.168.0.2:4000`,
      open: false
   });

   // bs.watch(`${App.root}/dist/**/*.html`).on('change', bs.reload);
   bs.watch([
      `${App.root}/server/views/**/*.pug`,
      `${App.root}/dist/**/*.html`,
      `${App.root}/dist/**/*.js`,
      `!${App.root}/dist/report.html`
   ]).on('change', function(filename) {
      console.log(`FILENAME: ${filename} changed.`);
      bs.reload();
   });

};
