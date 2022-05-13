import { setPers } from "./fbauth.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { initFirebase } from "./fbinit.js";

initFirebase();

const auth = getAuth();

const logInButton = document.querySelector(".btn-login-email");
const logGoogle = document.querySelector(".btn-login-google");
const logFacebook = document.querySelector(".btn-login-facebook");

logInButton.addEventListener("click", async() => {
  const email = document.querySelector(".input-email").value;
  const password = document.querySelector(".input-password").value;
  setPers(email, password);

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("El usuario existe");
      window.history.back();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert("Login invalido");
    });
});

logGoogle.addEventListener("click", async() => {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "es";

  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Autenticado con google");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
      alert("Login invalido");
    });

  window.history.back();
});

// Login con facebook
logFacebook.addEventListener("click", async() => {
  const provider = new FacebookAuthProvider();
  auth.languageCode = "es";

  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });

  window.history.back();
});

// See password
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
