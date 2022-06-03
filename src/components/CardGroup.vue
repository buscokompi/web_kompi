<script>
import CardAnimal from "./CardAnimal.vue";
import CardExtra from "./CardExtra.vue";
import BaseButton from "./BaseButton.vue";

import { getFirestore, collection, getDocs, query, orderBy, limit, where } from "firebase/firestore";
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
    CardExtra,
    BaseButton
  },
  props: {
    specie: {
      type: String,
      default: "Perro"
    }
  },
  data() {
    return {
      animalsArr: [],
      firebaseapp: null,
      fs: null,
      storage: null,
      aux: this.specie,
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
      const q = query(collection(this.fs, 'animals'), where('Especie', '==', `${this.aux}`), limit(4));
      const animals = await getDocs(q);
      console.log(animals);


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

<template>
  <div class="body">
    <div class="group">
      <CardAnimal v-for="e in animalsArr" :key="e" :name="e.name" :location="e.location" :image="e.url" :id="e.id"
        :specie="e.specie">
      </CardAnimal>
      <CardExtra />
    </div>
    <BaseButton class="more" url="/FilterAnimals" text="Ver más" />
  </div>
</template>

<style scoped>
.body {
  margin: 4rem auto 5rem;
}

.group {
  width: fit-content;
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 4rem 3rem;
  margin-bottom: 3rem;
}

.more {
  display: none;
}

@media screen and (min-width: 767px) {
  .group {
    grid-template-columns: repeat(2, 1fr);
  }

  .group .card-extra {
    display: none;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .more {
    display: inline-block;
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

  .more {
    display: none;
  }


}
</style>
