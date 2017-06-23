var bs = require('browser-sync').create('MY SERVER');

bs.init({
   server: App.root + '/public'
});

bs.watch(App.root + '/public/*.html').on('change', bs.reload);
