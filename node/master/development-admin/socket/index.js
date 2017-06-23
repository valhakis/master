const BrowserSyncController = DevAdmin.require('controllers/browser-sync.controller');

module.exports = function(server) {
   var io = require('socket.io')(server);

   io.on('connection', function(socket) {
      console.log('a user connected.');
      socket.on('disconnect', function() {
         console.log('a user disconnected.');
      });
      socket.on('start browser-sync', function() {
         console.log('i have to start browser-sync');
         BrowserSyncController.start();
      });
   });
};
