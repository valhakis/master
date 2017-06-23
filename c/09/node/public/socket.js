var connection = new WebSocket('ws://localhost:5000');

connection.onopen = function() {
  console.log('connection has been opened');
};
