import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import size from "gulp-size";
import browsersync from "browser-sync";

export function scripts() {
  return app.gulp
    .src(app.path.src.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(size())
    .pipe(sourcemaps.write("./"))
    .pipe(app.gulp.dest(app.path.dist.scripts))
    .pipe(browsersync.stream());
}
