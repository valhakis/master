var env = Master.loadJSON('.env');
var bs = require('browser-sync').create();

var host = env.development.host;
var port = env.development.port;

bs.init({
   proxy: `http://${host}:${port}`,
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
