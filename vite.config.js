const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = "/";
const { resolve, dirname } = require("path");

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    // target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        login: resolve(__dirname, "src/login.html"),
        signin: resolve(__dirname, "src/signin.html"),
        forgotpass: resolve(__dirname, "src/forgot-password.html"),
        emailvalidate: resolve(__dirname, "src/email-validated.html"),
        formuser: resolve(__dirname, "src/form-user.html"),
        newuser: resolve(__dirname, "src/newuser.html"),
        optnewuser: resolve(__dirname, "src/options-newuser.html"),
        animalsfilter: resolve(__dirname, "src/filter-animals.html"),
        animaltemplate: resolve(__dirname, "src/animal-card-info.html"),
        animalform: resolve(__dirname, "src/formulario.html"),
        nested: resolve(__dirname, "src/404file.html")
      }
    }
  }
};
