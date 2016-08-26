var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');

gulp.task('imageOptimization', function () {
  gulp.src('img_src/*.png')
    .pipe(imageResize({
        imageMagick: true,
        width : 300,
        height : 150
      })
    ).pipe(rename(function (path) {
        path.basename += "-300w";
      }
    )).pipe(
      gulp.dest('portfolio/img')
    );
});

gulp.task('default', ['imageOptimization']);
