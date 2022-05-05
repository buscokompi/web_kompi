import { initFirebase } from "./fbinit";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { userLogued } from "./fbauth.js";

initFirebase();
const fs = getFirestore();

const logued = userLogued();

console.log(logued);

const btnContinue = document.querySelector(".btn-continue");

btnContinue.addEventListener("click", () => {
  const nameUser = document.querySelector(".input-name").value;
  const surnameUser = document.querySelector(".input-surname").value;
  const dniUser = document.querySelector(".input-dni").value;
  const birthdateUser = document.querySelector(".input-birthdate").value;
  const provinceUser = document.querySelector(".input-province").value;
  const locationUser = document.querySelector(".input-location").value;
  const directionUser = document.querySelector(".input-direction").value;
  const phoneUser = document.querySelector(".input-phone").value;

  addUser(nameUser, surnameUser, dniUser, birthdateUser, provinceUser, locationUser, directionUser, phoneUser);
});

export async function addUser(nameUser, surnameUser, dniUser, birthdateUser, provinceUser, locationUser, directionUser, phoneUser) {
  await addDoc(collection(fs, "usuarios"), { name: nameUser, surname: surnameUser, nif: dniUser, birthdate: birthdateUser, province: provinceUser, location: locationUser, direction: directionUser, phone: phoneUser });
}

window.onload = function() {
  actualDate();
  addProvinces();
};

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

const provincias = ["Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Ceuta", "Córdoba", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares", "Jaén", "La Coruña", "La Rioja", "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense", "Palencia", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"];

let html = "";

function addProvinces() {
  for (let i = 0; i < provincias.length; i++) {
    html += `<option>${provincias[i]}</option>`;
  }
  const select = document.querySelector(".form-control");
  select.innerHTML = html;
};
