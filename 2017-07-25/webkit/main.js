var gulp = require('gulp');

gulp.task('html', function() {
	if (location) location.reload();
});

gulp.task('reload', function() {
	if (location) location.reload();
});

gulp.task('css', function() {
	// var styles = document.querySelectorAll('link[rel=stylesheet]');
	// styles.forEach(function(style) {
		// var new_style = `${style.getAttribute('href')}?v=${Math.random(0, 10000)}`;
		// style.setAttribute('href', new_style);
	// });
});

gulp.watch([
	'index.html'
], ['reload']);

gulp.watch([
	'static/**/*.css',
	'./*.js'
], ['reload']);
