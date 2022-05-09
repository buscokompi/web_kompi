import {
  signInFirebase,
  logInGoogle,
  logInFacebook
} from "./fbauth.js";

const signInButton = document.querySelector(".btn-signin-email");
const logGoogle = document.querySelector(".btn-signin-google");
const logFacebook = document.querySelector(".btn-signin-facebook");

// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", () => {
  console.log("sign up en proceso");

  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;
  const passwordCheck = document.querySelector(".input-password-check").value;

  if (password !== passwordCheck) {
    alert("Comprueba que la contraseña sea correcta");
  } else {
    signInFirebase(email, password);
  }
});

// Login con google
logGoogle.addEventListener("click", () => {
  logInGoogle();
});

// Login con facebook
logFacebook.addEventListener("click", () => {
  logInFacebook();
});
// validar contraseñas coincidentes
