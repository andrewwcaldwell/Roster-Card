var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// run 'default' gulp cmd to perform an array of tasks!
gulp.task('default', ['html', 'sass', 'sassform', 'js', 'img']);

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.failReporter())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public/'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});
gulp.task('sassform', function (){
    return gulp.src('./scss/form.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('img', function () {
    return gulp.src('./resource/*')
        .pipe(gulp.dest('./public/resource/'));
});
gulp.task('watch', function() {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./scss/*.scss', ['sassform']);
    gulp.watch('./js/*js', ['js']);
    
});