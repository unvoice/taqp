var path = require("path");
var gulp = require("gulp");
var webpack = require("gulp-webpack");
var minifycss = require("gulp-minify-css");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var livereload = require("gulp-livereload");
var browserSync = require("browser-sync").create();
var ignore = require("gulp-ignore");
var less = require("gulp-less");

gulp.task("pack",function(){
    return gulp.src(['./index.js'])
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(ignore.exclude(["**/*.map"]))
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('dist/'));
});
gulp.task("gulp-less",function(){
    return gulp.src(['./src/css/*.less'])
    .pipe(less())
    .pipe(gulp.dest('src/css'));
})
gulp.task("browser-sync",function(){
    var files = ['./*.html','dist/*.js'];
    browserSync.init(files,{
        server: {
            baseDir:"./"
        }
    });
});
gulp.task("minifycss",function(){
   return ;
});
gulp.task("default",["pack","gulp-less","browser-sync"]);
