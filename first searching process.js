/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('app/js/**/*.js', gulp.parallel('script'))
  gulp.watch('app/*.html', gulp.parallel('code'))
});
