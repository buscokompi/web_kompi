import { signInFirebase, logInGoogle, logInFacebook, logOut } from "./fbauth.js";
import { initFirebase } from "./fbinit";

const signInButton = document.querySelector(".btn-signin-email");
const logGoogle = document.querySelector(".btn-signin-google");
const logFacebook = document.querySelector(".btn-signin-facebook");

initFirebase();

// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", () => {
  signIn();

  setTimeout(function() {
    window.location.href = "newuser.html";
  }, 5000);
});

// Login con google
logGoogle.addEventListener("click", () => {
  logInGoogle();
});

// Login con facebook
logFacebook.addEventListener("click", () => {
  logInFacebook();
});

async function signIn() {
  console.log("sign up en proceso");

  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;
  const passwordCheck = document.querySelector(".input-password-check").value;

  if (password !== passwordCheck) {
    alert("Comprueba que la contraseña sea correcta");
  } else {
    await signInFirebase(email, password);
  }
};
