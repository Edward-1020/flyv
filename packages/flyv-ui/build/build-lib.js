const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const merge = require('merge-stream');
const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');

const packagesDir = path.resolve(__dirname, '../packages');
const packagesDirs = fs.readdirSync(packagesDir);
let jsFilePath = [];
let styleFilePath = [];

packagesDirs.forEach((componentDir) => {
    componentDir = path.join(packagesDir, componentDir);
    const files = fs.readdirSync(componentDir);
    files.forEach((file) => {
        const filePath = path.join(componentDir, file);
    
        if (/(\.js)|(\.ts)|(\.tsx)/.test(filePath)) {
            jsFilePath.push(filePath)
        }
    
        if (/(\.css)|(\.scss)|(\.sass)/.test(filePath)) {
            styleFilePath.push(filePath)
        }
    })
});

gulp.task('build:js', () => {
    const tasks = jsFilePath.map((filePath) => {
        return gulp.src(
            filePath
        )
            .pipe(babel(
                {
                    presets: [
                        '@babel/preset-env',
                        [
                        '@vue/babel-preset-jsx',
                            {
                                functional: false
                            }
                        ],
                        '@babel/preset-typescript'
                    ]
                }
            ))
            .pipe(gulp.dest(filePath.replace(/packages(?!\/flyv-ui)/, 'lib')));
    });

    return merge(tasks);
  }
);

gulp.task('build:style', () => {
    const tasks = styleFilePath.map((filePath) => {
        return gulp.src(
            filePath
        )
            .pipe(sass().on('error', sass.logError))
            .pipe(cssmin())
            .pipe(gulp.dest(filePath.replace(/packages(?!\/flyv-ui)/, 'lib')));
    });

    return merge(tasks);
  }
);