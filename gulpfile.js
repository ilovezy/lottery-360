var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    return gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
