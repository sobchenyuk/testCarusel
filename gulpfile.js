const   gulp = require('gulp');
const   babel = require('gulp-babel');
const   browserSync = require('browser-sync');
const   plumber = require('gulp-plumber');
const   watch = require('gulp-watch');


const   livereliad = browserSync.create();
const   reload = livereliad.reload;

gulp.task('browser-sync', () => {
    livereliad.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
    gulp.watch("index.html").on('change', reload);
});

gulp.task('javascript', () =>
    gulp.src('src/js/index.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('public'))
        .pipe(reload({stream: true}))
);

gulp.task( 'watcher', () => {
    watch('src/js/**/*.js', () => gulp.start('javascript'));
});

gulp.task(
    'default',
    [
        'watcher',
        'browser-sync',
        'javascript'
    ]
);