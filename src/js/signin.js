import { signInFirebase, logInGoogle, logInFacebook } from "./fbauth.js";
import { initFirebase } from "./fbinit";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initFirebase();

const auth = getAuth();

const signInButton = document.querySelector(".btn-signin-email");
const logGoogle = document.querySelector(".btn-signin-google");
const logFacebook = document.querySelector(".btn-signin-facebook");
const inputPassword = document.getElementById("password2");
// Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
signInButton.addEventListener("click", async(e) => {
  e.preventDefault();

  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;
  const passwordCheck = document.querySelector(".input-password").value;

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
  console.log(document.getElementById("password").value);
  console.log(document.getElementById("password2").value);
  if (document.getElementById("password").value ==
    document.getElementById("password2").value) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Las contraseñas coinciden";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Las contraseñas no coinciden. Inténtalo de nuevo.";
  }
};

// Codigo para cuando se teclee la contraseña se verifique, ver si coinciden ambas contraseñas

const checkPassword = document.querySelector(".input-password");
checkPassword.addEventListener("keyup", check);

// See first password
const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
togglePassword.addEventListener("click", toggleClicked);

function toggleClicked() {
  password.classList.toggle("visible");
  if (this.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// See second password
const password2 = document.getElementById("password2");
const togglePassword2 = document.getElementById("toggle-password2");
togglePassword2.addEventListener("click", toggleClicked2);

function toggleClicked2() {
  password2.classList.toggle("visible");
  if (this.checked) {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
}
inputPassword.addEventListener("keyup", check);
