var gulp        = require( 'gulp' ),
    browserSync = require( 'browser-sync' ) .create(),
    sass        = require( 'gulp-sass' );

// Compile sass into CSS & auto-inject into browsers
gulp .task( 'sass', function() {
    return gulp .src( [ 'node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss' ] )
        .pipe( sass() )
        .pipe( gulp .dest( 'src/css' ) )
        .pipe( browserSync .stream() );
});

// Move the javascript files into our /src/js folder
gulp .task( 'js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery-ui-stable/jquery-ui.min.js' ] )
        .pipe( gulp .dest( 'src/js' ) )
        .pipe( browserSync .stream() );
});

// Move the stylesheets files into our /src/css folder
gulp.task( 'css', function () {
    return gulp .src( [ 'node_modules/jquery-ui-stable/jquery-ui.min.css' ] )
        .pipe( gulp.dest( 'src/css' ) )
        .pipe( browserSync .stream() );
});

// Static Server + watching scss/html files
gulp .task( 'serve', [ 'sass' ], function() {

    browserSync .init({
        server: './src'
    });

    gulp .watch( ['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss' ], ['sass'] );
    gulp .watch( 'src/*.html' ) .on( 'change', browserSync.reload );
    gulp .watch( 'src/*.js' ) .on( 'change', browserSync.reload );
});

gulp .task( 'default', ['js', 'css', 'serve' ] );
