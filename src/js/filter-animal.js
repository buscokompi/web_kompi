import { getFirestore, collection, getDocs, setDoc, query, where } from "firebase/firestore";
import { initFirebase } from "./fbinit.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const provincias = ["Cualquiera", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos",
  "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Ceuta", "Córdoba", "Cuenca", "Gerona",
  "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares", "Jaén", "La Coruña", "La Rioja",
  "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense", "Palencia",
  "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo",
  "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"];

// const specie = ["Cualquiera", "Caninos", "Felinos", "Aves", "Roedores", "Reptiles"];

const specie = ["Cualquiera", "Perro", "Gato", "Ave", "Roedor", "Reptil"];

const catsraces = ["Cualquiera", "Abisinio", "Americano de pelo duro", "Asiático", "Azul ruso", "Balinés", "Bengalí", "Birmano", "Bobtail japonés de pelo corto",
  "Bobtail japonés de pelo largo", "Bombay", "Bosque de Noruega", "Bosque de Siberia", "Británico de pelo corto", "Burmés", "Burmilla",
  "Chinchilla", "Cornish rex", "Cymric", "Devon Rex", "Exótico de pelo corto", "Fold escocés", "Khao Manee", "Korat", "Laperm", "Maine Coon",
  "Manx", "Mau egipcio", "Mist australiano", "Munchkin", "Ocigato", "Oriental de pelo corto", "Oriental de pelo largo", "Persa de pelo largo",
  "Pixie bob", "Ragdoll", "Savannah", "Selkirk", "Siamés", "Singapura", "Snowshoe", "Somalí", "Sphynx", "Tiffanie", "Tonquinés", "Van turco"];

const dogsraces = ["Cualquiera", "Basset Hound", "Beagle", "Bobtail", "Border Collie", "Boston", "Bóxer", "Boyero de Berna", "Braco alemán", "Braco húngaro",
  "Braco de weimar", "Bulldog inglés", "Bulldog francés", "Cairn Terrier", "Caniche", "Carlino", "Chihuahua", "Corgi", "Cocker",
  "Chow Chow", "Dálmata", "Dogo argentino", "Dogo de Burdeos", "Gran Danés", "Jack Russell Terrier", "Labrador Retriever",
  "Lobero irlandés", "Mastín Español", "Mastín del Pirineo", "Papillón", "Pastor australiano", "Pastor ganadero australiano",
  "Pastor Yugoslavo", "Pit Bull", "Pomerania", "Samoyedo", "San Bernardo", "Husky Siberiano", "Seltie", "Teckel", "Yorkshire", "Schanuzer enano"];

const rodentraces = ["Cualquiera", "Chinchilla", "Cobaya", "Conejo", "Hámster", "Hurón", "Ratón"];

const birdraces = ["Cualquiera", "Agaporni", "Cacatúa", "Canario", "Cotorra", "Diamantes", "Eclectus", "Guacamayo", "Jilguero", "Loro", "Ninfa", "Periquito"];

const reptilraces = ["Cualquiera", "Camaleón", "Gecko", "Iguana", "Pogona", "Serpiente", "Tortuga de agua"];

class Animal {
  constructor(id, url, urlfb, name, race, location, species, gender, age, size, color, vaccination,
    sterilization, certificationppp) {
    this.id = id;
    this.url = url;
    this.urlfb = urlfb;
    this.name = name;
    this.race = race;
    this.location = location;
    this.species = species;
    this.gender = gender;
    this.age = age;
    this.size = size;
    this.color = color;
    this.vaccination = vaccination;
    this.sterilization = sterilization;
    this.certificationppp = certificationppp;
  }
}

const firebaseapp = initFirebase();

const fs = getFirestore();
const storage = getStorage(firebaseapp);
const animalesArr = [];
const animalContainer = document.querySelector(".group");
const cardAnimal = document.getElementsByClassName("card");
const selectSpecie = document.querySelector(".sel-specie");
const btnFilter = document.querySelector(".btn-search");
let html = "";
let htmlspecie = "";
let htmlrace = "";

window.onload = function () {
  readAnimals();
  getLocation();
  getRaces();
  getSpecies();
};

selectSpecie.addEventListener("change", () => {
  getRaces(selectSpecie.value);

  console.log(selectSpecie.name + " " + selectSpecie.value);
});

btnFilter.addEventListener("click", () => {
  getFilters();
});

// Funcion que lee todos los animales de firebase y crea un html
async function readAnimals() {
  const animals = await getDocs(collection(fs, "animals"));
  animals.forEach((doc) => {
    const animal = new Animal(doc.id, "", doc.data().Imagen1, doc.data().Nombre, doc.data().Raza, doc.data().Ubicacion);
    animalesArr.push(animal);
  });

  for (let i = 0; i < animalesArr.length; i++) {
    await getDownloadURL(ref(storage, animalesArr[i].urlfb))
      .then((url) => {
        animalesArr[i].url = url;
        addAnimalHtml(i, animalesArr);
      }).catch((error) => {
        console.log(error);
      });
  }
  addClicks();
}

function addAnimalHtml(index, arrAnimals) {
  html += `<div class="card" data-value="${arrAnimals[index].id}">
              <div class ="img-container">
                <img src="${arrAnimals[index].url}" alt="mascota">
              </div>
              <h2 class="name">${arrAnimals[index].name}</h2>
              <p><img src="./assets/icons/icono_logo_negro.svg" alt="">${arrAnimals[index].location}</p>
            </div>`;
  animalContainer.innerHTML = html;
}

function addClicks() {
  for (let i = 0; i < cardAnimal.length; i++) {
    const idAnimal = cardAnimal[i].getAttribute("data-value");

    cardAnimal[i].addEventListener("click", () => {
      window.location.href = `authprove.html?id="${idAnimal}"`;
    });
  }
}

function getLocation() {
  let htmllocation = "";
  for (let i = 0; i < provincias.length; i++) {
    htmllocation += `<option value="${provincias[i]}">${provincias[i]}</option>`;
  }
  const select = document.querySelector(".sel-location");
  select.innerHTML = htmllocation;
}

function getSpecies() {
  for (let i = 0; i < specie.length; i++) {
    htmlspecie += `<option value="${specie[i]}">${specie[i]}</option>`;
  }

  const select = document.querySelector(".sel-specie");
  select.innerHTML = htmlspecie;
}

function getRaces(specie) {
  let races = dogsraces;

  if (specie === "Felinos") {
    races = catsraces;
  } else if (specie === "Caninos") {
    races = dogsraces;
  } else if (specie === "Roedores") {
    races = rodentraces;
  } else if (specie === "Aves") {
    races = birdraces;
  } else if (specie === "Reptiles") {
    races = reptilraces;
  }

  for (let i = 0; i < races.length; i++) {
    htmlrace += `<option value="${races[i]}">${races[i]}</option>`;
  }

  const select = document.querySelector(".sel-race");
  select.innerHTML = htmlrace;
  htmlrace = "";
}

async function getFilters(location, specie, race, sex, size, vaccination, sterilization, certified) {
  html = "";
  const q = query(collection(fs, "animals"),
    where("Ubicacion", "==", location),
    where("Especie", "==", specie),
    where("Raza", "==", race),
    where("Sexo", "==", sex),
    where("Tamano", "==", size),
    where("Vacunacion", "==", vaccination),
    where("Esterilizacion", "==", sterilization));

  const arrQuery = [];
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const animal = new Animal(doc.id, "", doc.data().Imagen1, doc.data().Nombre, doc.data().Raza, doc.data().Ubicacion, doc.data().Especie,
      doc.data().Sexo, doc.data().Edad, doc.data().Tamano, doc.data().color, doc.data().Vacunacion, doc.data().Esterilizacion, doc.data().Certificado_ppp);
    arrQuery.push(animal);
    console.log(animal);
  });

  for (let i = 0; i < arrQuery.length; i++) {
    await getDownloadURL(ref(storage, arrQuery[i].urlfb))
      .then((url) => {
        arrQuery[i].url = url;
        addAnimalHtml(i, arrQuery);
      }).catch((error) => {
        console.log(error);
      });
  }
}
