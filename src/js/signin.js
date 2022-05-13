import { signInFirebase, logInGoogle, logInFacebook } from "./fbauth.js";
import { initFirebase } from "./fbinit";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initFirebase();

initFirebase();
const auth = getAuth();

const signInButton = document.querySelector(".btn-signin-email");
const logGoogle = document.querySelector(".btn-signin-google");
const logFacebook = document.querySelector(".btn-signin-facebook");

// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", async(e) => {
  e.preventDefault();

  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;
  const passwordCheck = document.querySelector(".input-password-check").value;

  check();

  if (password !== passwordCheck) {
    alert("Comprueba que la contraseña sea correcta");
  } else {
    // signInFirebase(email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("usuario registrado");
        window.location.href = "newuser.html";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("invalido");
      });
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

const check = function() {
  if (document.getElementById("password").value ==
    document.getElementById("confirm_password").value) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Las contraseñas no coinciden. Inténtalo de nuevo.";
  }
};
