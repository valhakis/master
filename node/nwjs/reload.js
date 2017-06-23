/* GULP */
var gulp = require('gulp');

gulp.task('html', function() {
  // console.log('START OF HTML');
  if (location) location.reload();
});

gulp.task('css', function() {
  // console.log('START OF GULP CSS');
  var styles = document.querySelectorAll('link[rel=stylesheet]');

  for (var i=0; i<styles.length; i++)
  {
    var href = styles[i].getAttribute('href') + '?v='+Math.random(0, 10000);
    styles[i].setAttribute('href', href);
  }
});

gulp.task('scripts', function() {
  if (location) location.reload();
  /*
  console.log('START OF GULP SCRIPTS');
  var scripts = document.querySelectorAll('script');

  for (var i=0; i<scripts.length; i++)
  {
    if (scripts[i].getAttribute('src') == 'reload.js')
      continue;
    console.log(scripts[i].getAttribute('src'));
    var src = scripts[i].getAttribute('src') + '?v='+Math.random(0, 10000);
    scripts[i].setAttribute('src', src);
  }
  */
});

gulp.watch(['./*.html'], ['html']);
gulp.watch(['./*.css'], ['css']);
gulp.watch([
  './*.js',
  './scripts/**/*.js'
], ['scripts']);
