// // Burger menu for mobile
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initFirebase } from "./fbinit.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseapp = initFirebase();

const fs = getFirestore();
const storage = getStorage(firebaseapp);

const auth = getAuth();

const content2 = document.querySelector(".display");
const profile2 = document.querySelector(".login");
const profileName = document.querySelector(".profile-name");

const cardAnimal = document.getElementsByClassName("card");
const animalContainer = document.querySelector(".group");
let html = "";

readAnimals();
auth.onAuthStateChanged(function(user) {
  if (user) {
    content2.style.display = "grid";
    profile2.style.display = "none";
    getUserName(user.email);
  } else {
    content2.style.display = "none";
    profile2.style.display = "flex";
  }
});

const click = document.querySelectorAll(".burger-img");
click.forEach(element => {
  element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const burger = document.querySelector(".burger");
  const burgerImg = document.querySelector(".burger-img");

  burger.classList.toggle("active");
  burgerImg.classList.toggle("active");
}

// Profile menu for mobile

const profile = document.querySelectorAll(".display");
profile.forEach(element => {
  element.addEventListener("click", displayMenu);
});

function displayMenu() {
  const display = document.querySelector(".display");
  display.classList.toggle("active");
}

// Questions display

const question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

async function getUserName(userEmail) {
  const userRef = await getDocs(collection(fs, "usuarios"));
  let user = "";

  userRef.forEach((doc) => {
    if (doc.id === userEmail) {
      user = doc.data().name + " " + doc.data().surname;
    }
  });

  if (user === "") {
    user = userEmail;
  }

  profileName.textContent = user;
}

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

async function readAnimals() {
  const animals = await getDocs(collection(fs, "animals"));
  const animalesArr = [];

  animals.forEach((doc) => {
    if (animalesArr.length <= 4) {
      const animal = new Animal(doc.id, "", doc.data().Imagen1, doc.data().Nombre, doc.data().Raza, doc.data().Ubicacion, doc.data().Especie,
        doc.data().Sexo, doc.data().Edad, doc.data().Tamano, doc.data().Color, doc.data().Vacunacion, doc.data().Esterilizacion, doc.data().Certificado_ppp);
      animalesArr.push(animal);
    }
  });

  console.log();

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

function addClicks() {
  for (let i = 0; i < cardAnimal.length; i++) {
    const idAnimal = cardAnimal[i].getAttribute("data-value");

    cardAnimal[i].addEventListener("click", () => {
      window.location.href = `../animal-card-info.html?id=${idAnimal}`;
    });
  }
}

function addAnimalHtml(index, arrAnimals) {
  if (index === 4) {
    html += `<div class="card-extra">
              <img src="./assets/icons/icono_logo_blanco.svg" alt="Kompi Logo" width="88" height="88">
              <p><span>+315 mascotas</span></p>
              <p>disponibles en kompi</p>
              <div class="footer">
                <a class="button" href="./filter-animals.html">Ver más</a>
              </div>
            </div>`;
  } else {
    html += `<div class="card" data-value="${arrAnimals[index].id}">
              <div class ="img-container">
                <img src="${arrAnimals[index].url}" alt="mascota">
              </div>
              <h3 class="name">${arrAnimals[index].name}</h3>
              <p><img src="./assets/icons/icono_logo_negro.svg" alt="">${arrAnimals[index].location}</p>
            </div>`;
  }
  animalContainer.innerHTML = html;
}
