const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build:js', () => {
    return gulp.src(
        [
          path.resolve(__dirname, '../packages/**/*.js'),
          path.resolve(__dirname, '../packages/**/*.ts'),
        ]
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
  }
);