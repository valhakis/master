var bs = require('browser-sync').create();

bs.init({
  proxy: "localhost:4000",
  open: false
});

bs.watch(`${App.root('public')}/**/*.{html,js,css}`).on('change', bs.reload);
