var bs = require("browser-sync").create();

bs.init({
  proxy: `http://${App.host}:${App.port}`,
  open: false
});

var root = App.root('');
bs.watch([
  `${root}/dist/*.js`,
  `${root}/server/app/auth/views/**/*.hbs`,
  `${root}/public/**/*.{html,js}`,
]).on('change', bs.reload);

// bs.reload("*.html");
//
module.exports = bs;
