import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { distFolder } from "./gulp/config/path.js";
import { srcFolder } from "./gulp/config/path.js";

global.app = {
  path: path,
  gulp: gulp,
  distFolder: distFolder,
  srcFolder: srcFolder,
};

import { html } from "./gulp/tasks/html.js";
import { clean } from "./gulp/tasks/clean.js";
import { styles } from "./gulp/tasks/styles.js";
import { buildCss } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { img } from "./gulp/tasks/img.js";
import { watch } from "./gulp/tasks/watch.js";
import { cleanFonts } from "./gulp/tasks/clean.js";
import { otfConvert } from "./gulp/tasks/fonts.js";
import { ttfConvert } from "./gulp/tasks/fonts.js";
import { exportFonts } from "./gulp/tasks/fonts.js";
import { zipRun } from "./gulp/tasks/zip.js";
import { webpRun } from "./gulp/tasks/webp.js";

gulp.task(
  "build",
  gulp.series(
    clean,
    gulp.parallel(
      html,
      styles,
      buildCss,
      scripts,
      img,
      webpRun,
      cleanFonts,
      otfConvert,
      ttfConvert,
      exportFonts
    )
  )
);

gulp.task(
  "default",
  gulp.series("build", watch)
);

gulp.task("zip", zipRun);
gulp.task("webp", webpRun);
