var socket = io();

class AppComponent {
   constructor() {
      console.log('App constructed');
   }
}

class BS {
   constructor() {

   }

   start() {
      console.log('I have to start something.');
      socket.emit('start browser-sync');
   }
}

var bs = new BS();
