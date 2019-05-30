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

const getFileOutPath = (arr) => {
    return arr.map((filePath) => {
        let filePathArr = filePath.replace(/packages(?!\/flyv-ui)/, 'lib').split('/');
        filePathArr.pop();
        filePath = filePathArr.join('/');
        return filePath;
    });
}

let jsFileOutPath = getFileOutPath(jsFilePath);
let styleFileOutPath = getFileOutPath(styleFilePath);

gulp.task('build:js', () => {
    const tasks = jsFilePath.map((filePath, index) => {
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
            .pipe(gulp.dest(jsFileOutPath[index]), 'lib');
    });

    return merge(tasks);
  }
);

gulp.task('build:style', () => {
    const tasks = styleFilePath.map((filePath, index) => {
        return gulp.src(
            filePath
        )
            .pipe(sass().on('error', sass.logError))
            .pipe(cssmin())
            .pipe(gulp.dest(styleFileOutPath[index]));
    });

    return merge(tasks);
  }
);