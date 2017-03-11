var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

//more dependencies will be added here.

// sample task
// gulp.task('myTask', function() {
//   console.log('hello gulp');
// });

gulp.task('jsBrowserify', function() {
    return browserify( {entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
