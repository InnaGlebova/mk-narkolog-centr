import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import flatten from "gulp-flatten";
import { finished } from "node:stream/promises";

export function otfConvert() {
  const otfGlob = `${app.srcFolder}/assets/fonts/**/*.otf`;

  return app.gulp
    .src(otfGlob, { encoding: false, allowEmpty: true })
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(app.gulp.dest(app.path.src.fonts));
}

export async function ttfConvert() {
  const ttfGlob = `${app.srcFolder}/assets/fonts/**/*.ttf`;

  await finished(
    app.gulp
      .src(ttfGlob, { encoding: false, allowEmpty: true })
      .pipe(
        fonter({
          formats: ["woff"],
        })
      )
      .pipe(app.gulp.dest(app.path.src.fonts))
  );

  await finished(
    app.gulp
      .src(ttfGlob, { encoding: false, allowEmpty: true })
      .pipe(ttf2woff2())
      .pipe(app.gulp.dest(app.path.src.fonts))
  );
}

export function exportFonts() {
  return app.gulp
    .src(`${app.srcFolder}/assets/fonts/**/*.{woff,woff2}`, { encoding: false })
    .pipe(flatten())
    .pipe(app.gulp.dest(app.path.dist.fonts));
}
