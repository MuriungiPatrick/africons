var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var plumber   = require('gulp-plumber');


function concat() {
    return gulp.src(['./africons.css', './africons-alias.css', './africons-colors.css'])
        .pipe(plumber())
        .pipe(concatCss('./africons.min.css'))
        .pipe(gulp.dest('./'));
}

function minify() {
    return gulp.src('./africons.min.css')
        .pipe(plumber())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./'))
}

exports.concat = concat;
exports.minify = minify;
exports.default = gulp.series(concat, minify);