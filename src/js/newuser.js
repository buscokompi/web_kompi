import { initFirebase } from "./fbinit";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const btnContinue = document.querySelector(".btn-continue");

btnContinue.addEventListener("click", async(e) => {
  e.preventDefault();
  const nameUser = document.querySelector(".input-name").value;
  const surnameUser = document.querySelector(".input-surname").value;
  const dniUser = document.querySelector(".input-dni").value;
  const birthdateUser = document.querySelector(".input-birthdate").value;
  const provinceUser = document.querySelector(".form-control").value;
  const locationUser = document.querySelector(".input-location").value;
  const directionUser = document.querySelector(".input-direction").value;
  const phoneUser = document.querySelector(".input-phone").value;

  await setDoc(doc(fs, "usuarios", userEmail), {
    name: nameUser,
    surname: surnameUser,
    nif: dniUser,
    birthdate: birthdateUser,
    province: provinceUser,
    location: locationUser,
    direction: directionUser,
    phone: phoneUser
  });

  window.location.href = "../index.html";
});

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
