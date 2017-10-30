console.log('loading a web page');
var page = require('webpage').create();
var system = require('system');
var url = 'http://192.168.0.3:4000';

var time = Date.now();

page.onConsoleMessage = function(msg) {
  console.log('Message:', msg);
};

page.open(url, function(status) {
  console.log('Status:', status);
  if (status === 'success') {
    time = Date.now() - time;
    page.render('example.png');
    console.log('Page loaded in ', time, 'msec');
  }
  page.evaluate(function() {
    console.log('Title:', document.title);
  });
  phantom.exit();
});
