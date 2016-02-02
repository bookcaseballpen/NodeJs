var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    exec  = require('gulp-exec');
gulp.task('default',function(){
  gulp.src('./*')
  .pipe(exec('node index.js'))
  .on('error', function() {
    console.log('Tests failed!');
    error = true;
  });
});

gulp.task('watch',function(){
  gulp.watch(['index.js'],['default']);

});
