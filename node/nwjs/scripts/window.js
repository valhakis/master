window.addEventListener('keydown', function(event) {
  console.log(event);
  if (event.key == 'Escape') {
    window.close();
  }
});
