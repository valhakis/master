module.exports = function(bs) {
  var gulp = require('gulp');
  var sass = require('gulp-sass');

  gulp.task('sass', function() {
    return gulp
      .src(App.root('public/sass/**/*.scss'))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(App.root('dist/css')))
      .pipe(bs.stream())
    ;
  });

  gulp.task('sass:watch', function() {
    gulp.watch(App.root('public/sass/**/*.scss'), ['sass']);
  });

  gulp.start('sass:watch');
};
