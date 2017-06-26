var gulp = require('gulp');
var sass = require('gulp-sass');


module.exports = function(bs) {
  gulp.task('sass', function() {
    return gulp.src(`${App.root}/master/styles/master.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${App.root}/dist/lib`))
    .pipe(bs.stream());
  });
  gulp.watch([
    `${App.root}/master/styles/master.scss`
  ], ['sass']);
};
