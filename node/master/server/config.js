// Where to include this file.
// ===========================================================
//
// [everywhere]
// 
// var config = Get.require('config');
//

var mongo = {
   url: 'mongodb://localhost/master-authentication'
};

module.exports = {
   host: '192.168.0.2',
   port: '80',
   production: {
      host: '192.168.0.2',
      port: '80',
   },
   development: {
      host: '192.168.0.2',
      port: '4000',
   },
   secret: 'the most secret',
   mongo: mongo
};
