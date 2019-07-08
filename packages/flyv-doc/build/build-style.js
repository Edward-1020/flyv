const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cssmin = require('gulp-clean-css');
const path = require('path');
 
sass.compiler = require('node-sass');
 
gulp.task('build', () => {
  return gulp.src(
      [
        path.resolve(__dirname, '../src/style/pc/*.scss'),
        `!${path.resolve(__dirname, '../src/style/pc/variable.scss')}`
      ]
  )
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.pc.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.resolve(__dirname, '../lib')));
});

gulp.task('build:watch', () => {
  gulp.watch(
    [
      path.resolve(__dirname, '../src/style/pc/*.scss'),
      `!${path.resolve(__dirname, '../src/style/pc/variable.scss')}`
    ],
    gulp.series('build')
  );
});