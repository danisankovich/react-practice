// "use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var config = {
  port: 9005,
  debBaseUrl: 'http://localhost',
  paths: {
    
  }
};

gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});
