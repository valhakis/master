// Where to include this file.
// ===========================================================
//
// [everywhere]
// 
// var config = Get.require('config');
//

var env = Master.loadJSON('.env');

var mongo = {
   url: 'mongodb://localhost/master-authentication'
};

module.exports = {
   host: env.host || 'localhost',
   port: '80',
   'browser-sync': {
      host: env.development.host,
      port: 80
   },
   production: {
      host: env.production.host || 'localhost',
      port: '80',
   },
   development: {
      host: env.production.host || 'localhost',
      port: '4000',
   },
   secret: 'the most secret',
   mongo: mongo
};
