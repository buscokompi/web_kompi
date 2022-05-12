import { initFirebase } from "./fbinit";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { setUser, userLogued } from "./fbauth.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

window.onload = function() {
  actualDate();
  addProvinces();

  auth.onAuthStateChanged(async(user) => {
    if (user) {
      console.log(user.email);
    } else {
      console.log("el usuario no esta logueado");
    }
  });
};

initFirebase();
const fs = getFirestore();
let userEmail = "";
let html = "";

auth.onAuthStateChanged(function(user) {
  if (user) {
    userEmail = user.email;
  } else {
    console.log("el usuario no esta logueado");
  }
});

/* if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  console.log(email);

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
} */

const btnContinue = document.querySelector(".btn-continue");

btnContinue.addEventListener("click", (e) => {
  e.preventDefault();
  const nameUser = document.querySelector(".input-name").value;
  const surnameUser = document.querySelector(".input-surname").value;
  const dniUser = document.querySelector(".input-dni").value;
  const birthdateUser = document.querySelector(".input-birthdate").value;
  const provinceUser = document.querySelector(".form-control").value;
  const locationUser = document.querySelector(".input-location").value;
  const directionUser = document.querySelector(".input-direction").value;
  const phoneUser = document.querySelector(".input-phone").value;

  console.log(nameUser);
  console.log(surnameUser);
  console.log(dniUser);
  console.log(birthdateUser);
  console.log(provinceUser);
  console.log(locationUser);
  console.log(directionUser);
  console.log(phoneUser);

  addUser(nameUser, surnameUser, dniUser, birthdateUser, provinceUser, locationUser, directionUser, phoneUser);
  setTimeout(function() {
    console.log("hola");
    window.location.href = "options-newuser.html";
  }, 4000);
});

export async function addUser(nameUser, surnameUser, dniUser, birthdateUser, provinceUser, locationUser, directionUser, phoneUser) {
  // await addDoc(collection(fs, "usuarios/" + logued), { name: nameUser, surname: surnameUser, nif: dniUser, birthdate: birthdateUser, province: provinceUser, location: locationUser, direction: directionUser, phone: phoneUser });
  await setDoc(doc(fs, "usuarios", userEmail), { name: nameUser, surname: surnameUser, nif: dniUser, birthdate: birthdateUser, province: provinceUser, location: locationUser, direction: directionUser, phone: phoneUser });
}

function actualDate() {
  const fecha = new Date();
  const anioActual = fecha.getFullYear();
  let hoy = fecha.getDate();
  let mesActual = fecha.getMonth() + 1;

  if (mesActual.toString().length >= 1) {
    mesActual = "0" + mesActual;
  }

  if (hoy.toString().length >= 1) {
    hoy = "0" + hoy;
  }

  const maxDate = document.querySelector(".input-birthdate");
  maxDate.setAttribute("max", `${anioActual}-${mesActual}-${hoy}`);
  maxDate.setAttribute("value", `${anioActual}-${mesActual}-${hoy}`);
};

function addProvinces() {
  const provincias = ["Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos",
    "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Ceuta", "Córdoba", "Cuenca", "Gerona",
    "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares", "Jaén", "La Coruña", "La Rioja",
    "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense", "Palencia",
    "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo",
    "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"];

  for (let i = 0; i < provincias.length; i++) {
    html += `<option value="${provincias[i]}">${provincias[i]}</option>`;
  }

  const select = document.querySelector(".form-control");
  select.innerHTML = html;
};
