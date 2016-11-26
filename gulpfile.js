var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsproject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("default", function () {
    return tsproject.src()
        .pipe(sourcemaps.init())
        .pipe(tsproject())
        .js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./"));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/*.ts', ['default']);
    gulp.watch('tests/*.ts', ['default']);
});
