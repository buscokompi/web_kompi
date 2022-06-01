<template>

  <div class="shadow" @click="goFilters('Perro')">
    <img src="../assets/icons/icono_perro.svg" alt="perros">
  </div>
  <div class="shadow" @click="goFilters('Gato')">
    <img src="../assets/icons/icono_gato.svg" alt="gatos">
  </div>
  <div class="shadow" @click="goFilters('Ave')">
    <img src="../assets/icons/icono_pajaro.svg" alt="pajaros">
  </div>
  <div class="shadow" @click="goFilters('Roedor')">
    <img src="../assets/icons/icono_roedor.svg" alt="roedores">
  </div>
  <div class="shadow" @click="goFilters('Reptil')">
    <img src="../assets/icons/icono_reptil.svg" alt="reptiles">
  </div>

</template>

<script>
import { KompiStore } from '../stores/KompiStore.js';

export default {
  name: "CategoryButton",
  data() {
    return {
      store: "",
    }
  },
  mounted() {
    console.log(this.image);
  },
  methods: {
    goFilters(specie) {
      this.store = KompiStore();
      this.store.setSpecie(specie);
      this.$router.push("/FilterAnimals");
    }
  }
}
</script>

<style scoped>
.shadow {
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.3rem solid var(--yellow);
  background: var(--white);
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
}

.category .icon img {
  width: 2.6rem;
  height: 3.3rem;
}


@media screen and (min-width: 1300px) {
  .category .icon .shadow {
    width: 7rem;
    height: 7rem;
  }

  .category .icon img {
    width: 3.2rem;
    height: 4.5;
  }
}
</style>
