// Copyright 2016 Brian Quach
// Licensed under MIT (https://github.com/brianquach/udacity-nano-frontend-portfolio/blob/master/LICENSE)
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var resizeMyPhotoTask = 'resizeMyPhotoTask';

// Code inspired by http://stackoverflow.com/questions/35801807/gulp-image-resize-to-generate-multiple-output-sizes
var resizeImageTasks = [];
[300, 350].forEach(function(size) {
  var resizeImageTask = 'resize_' + size;

  gulp.task(resizeImageTask, function() {
    return gulp.src('img_src/*.png')
      .pipe(imageResize({
        imageMagick: true,
        width: size
      })).pipe(imageResize({
        imageMagick: true,
        crop: true,
        height: size/2
      })).pipe(rename(function (path) {
          path.basename += ("-" + size);
        }
      )).pipe(
        gulp.dest('portfolio/img')
      );
  });
  resizeImageTasks.push(resizeImageTask);
});

gulp.task('default', resizeImageTasks);
