const bs = require('browser-sync').create();

exports.start = function() {
   bs.init({ proxy: 'http://192.168.0.2:2000' });
};
