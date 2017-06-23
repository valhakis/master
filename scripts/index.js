var win = nw.Window.get();


var iframe = document.getElementById('devtools');
win.showDevTools();
//var webview = document.getElementById('devtools');
//win.showDevTools('devtools', function(smthing) {
  //console.log(smthing);
//});

// webview.showDevTools(true);

window.addEventListener('keydown', function(event) {
  if (event.key == 'Escape') {
    window.close();
  }
});
