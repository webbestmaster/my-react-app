const gulp = require('gulp');

const tinypng = require('gulp-tinypng');

gulp.task('tiny-png', function () {
    return gulp.src(['img/**/*'])
        .pipe(tinypng('f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp')) // done 7 march
        // h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5 - kidmathgenius@gmail.com
        // eSu5nMg0TSDairQWQC_Bx0h41PxKgKEp - mikhail.anisimau.play@gmail.com
        // f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp - dmitry.turovtsov@gmail.com
        // _JsmPE63lCa9UsS45vlKWMlhBhRntoK8 - logikaismekalka@gmail.com
        // uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an - web.best.master@gmail.com
        // RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu - ae.fan.game@gmail.com
        .pipe(gulp.dest('tinypng-dist'));
});


