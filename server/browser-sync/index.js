var bs = require('browser-sync').create();

bs.init({
  proxy: 'http://192.168.0.2:4000'
});

bs.watch(`${App.path('server/views/**/*.{html,pug}')}`).on('change', bs.reload);
