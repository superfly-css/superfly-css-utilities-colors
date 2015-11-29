require('verdijs-task-clean');
require('superfly-css-task-build');
require('superfly-css-task-test');

var PLI = require('superfly-css-pli');

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(PLI.SRC_MAIN_CSS, ['build:css']);
  gulp.watch(PLI.SRC_TEST_CSS, ['build:css']);
  gulp.watch(PLI.SRC_TEST_HTML, ['test:css']);
});
