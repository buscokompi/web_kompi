import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initFirebase } from "./fbinit.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

class Animal {
  constructor(url, urlfb, name, race) {
    this.url = url;
    this.urlfb = urlfb;
    this.name = name;
    this.race = race;
  }
}

const firebaseapp = initFirebase();

const fs = getFirestore();
const storage = getStorage(firebaseapp);
const animalesArr = [];

export async function readAnimals() {
  /* readCollection();
  getUrls(); */

  const animals = await getDocs(collection(fs, "animals"));
  let html = "";

  animals.forEach((doc) => {
    const animal = new Animal("", doc.data().Imagen, doc.data().Nombre, doc.data().Raza);
    console.log(animal.urlfb);
    animalesArr.push(animal);
  });

  for (let i = 0; i < animalesArr.length; i++) {
    await getDownloadURL(ref(storage, animalesArr[i].urlfb))
      .then((url) => {
        animalesArr[i].url = url;
        console.log(url);
      }).catch((error) => {
        console.log(error);
      });
  }

  for (let i = 0; i < animalesArr.length; i++) {
    html += `<div>
              <img src="${animalesArr[i].url}" width="200px" height="200px">
              <h3>${animalesArr[i].name}</h3>
              <p>${animalesArr[i].race}</p>
            </div>`;
  }

  return html;
}

export async function addAnimals(ageAnimal, nameAnimal, raceAnimal, sexAnimal) {
  await addDoc(collection(fs, "animals"), { name: nameAnimal, race: raceAnimal, sex: sexAnimal });
}

/* export async function readCollection() {
  const animals = await getDocs(collection(fs, "animals"));

  animals.forEach((doc) => {
    const animal = new Animal("", doc.data().Imagen, doc.data().Nombre, doc.data().Raza);
    console.log(animal.urlfb);
    animalesArr.push(animal);
  });
}

function getUrls() {
  for (let i = 0; i < animalesArr.length; i++) {
    getDownloadURL(ref(storage, animalesArr[i].urlfb))
      .then((url) => {
        animalesArr[i].url = url;
        console.log(url);
      }).catch((error) => {
        console.log(error);
      });
  }
} */
