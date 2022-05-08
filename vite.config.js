const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = "/";
const { resolve } = require("path");

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        // nested: resolve(__dirname, "src/404file.html"),
      }
    }
  }
};
