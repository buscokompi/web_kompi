<template>
  <div class="group">
    <CardAnimal v-for="e in animalsArr" :key="e" :name="e.name" :location="e.location" :image="e.url" :id="e.id"
      :specie="e.specie">
    </CardAnimal>
    <CardExtra />
  </div>
</template>

<script>
import CardAnimal from "./CardAnimal.vue";
import CardExtra from "./CardExtra.vue";

import { getFirestore, collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
  authDomain: "web-kompi.firebaseapp.com",
  projectId: "web-kompi",
  storageBucket: "web-kompi.appspot.com",
  messagingSenderId: "556298514839",
  appId: "1:556298514839:web:92e508e18c5685e99694d2",
  measurementId: "G-93MGP34YQN"
};

export default {
  components: {
    CardAnimal,
    CardExtra
  },
  data() {
    return {
      animalsArr: [],
      firebaseapp: null,
      fs: null,
      storage: null
    }
  },
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.fs = getFirestore();
    this.storage = getStorage(this.firebaseapp);

    this.readAnimals();
  },
  methods: {
    /* Llama a la base de datos de firestore y storage, coge todos los animales
    y sus imagenes y los muestra por pantalla*/
    async readAnimals() {
      const animalRef = (collection(this.fs, "animals"));

      const q = query(animalRef, limit(4));

      const animals = await getDocs(q);

      animals.forEach(async (doc) => {

        await getDownloadURL(ref(this.storage, doc.data().Imagen1))
          .then((url) => {
            const animal = {
              id: doc.id,
              url: url,
              urlfb: doc.data().Imagen1,
              name: doc.data().Nombre,
              race: doc.data().Raza,
              specie: doc.data().Especie,
              location: doc.data().Ubicacion
            };
            this.animalsArr.push(animal);
          }).catch((error) => {
            console.log(error);
          });
      });
    },
  }
}
</script>

<style scoped>
.group {
  position: relative;
  width: auto;
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 4rem;
  margin: 4rem 0 5rem;
}


@media screen and (min-width: 767px) {
  .group {
    grid-template-columns: repeat(2, 1fr);
  }

  .group .card-extra {
    display: none;
  }


}

@media screen and (min-width: 1170px) {
  .group {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

}

@media screen and (min-width: 1470px) {

  .group {
    grid-template-columns: repeat(5, 1fr);
    gap: 2.5rem;
    margin-bottom: 6rem;
  }

  .group .card-extra {
    display: grid;
  }


}
</style>
