const gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

//log message
gulp.task('message',function(){
	return console.log("Getting starting with Gulp!");
});

//default task
gulp.task('default',function(){
	return console.log("Gulp Is Running, Updated the Default Message!");
});

//copy all html from src to dist 
gulp.task('copyHtml',function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

//minify the image

//minify the css
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

//minify the javascript