import { getAuth, createUserWithEmailAndPassword, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { initFirebase } from "./fbinit.js";

initFirebase();

const auth = getAuth();

export function setPers(email, password) {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      signInFirebase(email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export function setUser() {
  return auth.currentUser;
}

// Funcion para crear un usuario con email y contraseña
export function signInFirebase(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("usuario registrado");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

// Inicia sesion con un usuario existente (con email y contraseña)
export function logInFirebase(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("El usuario existe");
      alert("Usuario " + email + " logueado.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert("Login invalido");
    });
}

// Inicia sesion con una cuenta de google existente
export function logInGoogle() {
  const provider = new GoogleAuthProvider();
  auth.languageCode = "es";

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Autenticado con google");
      alert("Usuario " + user.email + " logueado con Google.");
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
}

// Inicia sesion con una cuenta de facebook existente
export function logInFacebook() {
  const provider = new FacebookAuthProvider();
  auth.languageCode = "es";

  signInWithPopup(auth, provider)
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
}

// Desloguea al usuario
export function logOut() {
  signOut(auth).then(() => {
    console.log("Usuario deslogueado");
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

// Comprueba que un usuario este autenticado
export function userLogued() {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
    } else {
      console.log("No hay usuario logueado");
    }
  });
}
