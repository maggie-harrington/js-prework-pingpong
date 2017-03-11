var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

//more dependencies will be added here.

// sample task
// gulp.task('myTask', function() {
//   console.log('hello gulp');
// });

gulp.task('concatInterface', function() {
    return gulp.src(['./js/pingpong-interface.js', '.js/signup-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', function() {
    return browserify( {entries: ['./js/pingpong-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
