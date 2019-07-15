let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefix = require('gulp-autoprefixer');
let pug = require('gulp-pug');
let plumber = require('gulp-plumber');
let watch = require('gulp-watch');


let files = ['!scss/consts.sass', '!scss/mix.sass', '!scss/reset.sass', 'scss/*.sass'];

gulp.task('compile', function () {
	gulp.src(files)
		.pipe(plumber())
		.pipe(sass({errLogToConsole: true}))
        .pipe(autoprefix())
		.pipe(gulp.dest('css'))
});

gulp.task('pug', function() {
    gulp.src('pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(''))
});



gulp.task('watch', function() {
	gulp.run('compile');
    gulp.run('pug');
	gulp.watch('scss/*.sass', ['compile']);
    gulp.watch('pug/**/*.pug', ['pug']);
});
