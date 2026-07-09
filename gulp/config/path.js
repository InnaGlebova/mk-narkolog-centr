import * as nodePath from "path";

export const rootFolder = nodePath.basename(nodePath.resolve());

export const distFolder = "dist";
export const srcFolder = "src";

export const path = {
  dist: {
    html: `${distFolder}/`,
    styles: `${distFolder}/assets/css/`,
    buildCss: `${distFolder}/assets/css/build/`,
    scripts: `${distFolder}/assets/js/`,
    images: `${distFolder}/assets/img/`,
    fonts: `${distFolder}/assets/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    panini: `${srcFolder}/tpl/**/*.html`,
    styles: `${srcFolder}/assets/scss/style.scss`,
    buildCss: `${srcFolder}/assets/scss/build/*.{css,scss}`,
    allstyles: `${srcFolder}/assets/scss/vendor/*.scss`,
    scripts: `${srcFolder}/assets/js/**/*.js`,
    images: `${srcFolder}/assets/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    imagesWebp: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png}`,
    fonts: `${srcFolder}/assets/fonts/`,
  },
};
