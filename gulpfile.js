var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var spritesmith = require('gulp.spritesmith');
var htmlmin = require('gulp-htmlmin');

var directory = 'build';

// Minify HTML
gulp.task('htmlmin', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
});

// Scripts
gulp.task('scripts', function(){
	return gulp
	.src('src/js/*.js')
	.pipe(uglify())
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest(directory + '/js'));
});

// Sass
gulp.task('sass', function() {
	return sass('src/sass/', {style: 'compressed'})
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest(directory + '/css'));
});

// Compress Images
gulp.task('images', function(){
	return gulp
	.src('src/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest(directory + '/images'));
});

//Sprites
gulp.task('sprite', function() {
  var spriteData = gulp.src('src/sprites/*')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  spriteData.pipe(gulp.dest('build/sprites'));
});

// Browser Sync
gulp.task('browser-sync', function() {
	browserSync.init(["index.html", "build/css/style.min.css", "build/js/scripts.min.js"], {
		server: {
			baseDir: "./"
		}
	});
});

// Watch 
gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/*.html', ['htmlmin']);
});

gulp.task('default', ['scripts', 'sass', 'images', 'browser-sync', 'sprite', 'htmlmin', 'watch']);