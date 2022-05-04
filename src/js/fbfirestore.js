import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initFirebase } from "./fbinit.js";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

class Animal {
  constructor(url, urlFb, name, race) {
    this.url = url;
    this.urlFb = urlFb;
    this.name = name;
    this.race = race;
  }
}

const firebaseapp = initFirebase();

const fs = getFirestore();
const storage = getStorage(firebaseapp);
const animalesArr = [];

export async function readAnimals() {
  await readCollection();
  await getUrls();

  let html = "";

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
  await addDoc(collection(fs, "animals"), { age: ageAnimal, name: nameAnimal, race: raceAnimal, sex: sexAnimal });
}

export async function readCollection() {
  const animals = () => getDocs(collection(fs, "animals"));

  const animales = animals();

  (await animales).forEach(doc => {
    const animal = new Animal("", doc.data().image, doc.data().name, doc.data().race);
    animalesArr.push(animal);

    console.log(animal);
  });
}

function getUrls() {
  for (let i = 0; i < animalesArr.length; i++) {
    getDownloadURL(ref(storage, animalesArr[i].urlFb))
      .then((url) => {
        animalesArr[i].url = url;
        console.log(url);
      }).catch((error) => {
        console.log(error);
      });
  }
}
