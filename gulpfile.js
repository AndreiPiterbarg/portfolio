const gulp = require('gulp');
const purgecss = require('gulp-purgecss');

gulp.task('purgecss', () => {
    return gulp.src('*.css') // Source CSS files
        .pipe(purgecss({
            content: ['*.html', '*.js'] // Paths to your HTML and JS files
        }))
        .pipe(gulp.dest('dist/css')); // Destination folder
});
