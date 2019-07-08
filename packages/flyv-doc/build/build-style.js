const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cssmin = require('gulp-clean-css');
const path = require('path');
 
sass.compiler = require('node-sass');
 
const compileScss = (entry, output, basePath) => {
  return gulp.src(entry)
  .pipe(sass().on('error', sass.logError))
  .pipe(concat(output))
  .pipe(cssmin())
  .pipe(gulp.dest(path.resolve(__dirname, basePath)));
}

gulp.task('pc', () => {
  const entry = [
    path.resolve(__dirname, '../src/style/pc/*.scss'),
    `!${path.resolve(__dirname, '../src/style/variable.scss')}`
  ];
  const output = 'style.pc.css';
  const basePath = '../lib';
  return compileScss(entry, output, basePath);
});

gulp.task('mobile', () => {
  const entry = [
    path.resolve(__dirname, '../src/style/mobile/*.scss'),
  ];
  const output = 'style.mobile.css';
  const basePath = '../lib';
  return compileScss(entry, output, basePath);
});

gulp.task('build', gulp.parallel('pc', 'mobile'));

gulp.task('build:watch', () => {
  gulp.watch(
    [
      path.resolve(__dirname, '../src/style/pc/*.scss'),
      path.resolve(__dirname, '../src/style/mobile/*.scss'),
      `!${path.resolve(__dirname, '../src/style/variable.scss')}`
    ],
    gulp.series('build')
  );
});