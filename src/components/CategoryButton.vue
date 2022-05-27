<template>
  <div class="shadow" @click="goFilters()">
    <img :src="image" alt="perros">
  </div>
</template>

<script>
import { KompiStore } from '../stores/KompiStore.js';

export default {
  name: "CategoryButton",
  props: {
    image: String,
    specie: String
  },
  data() {
    return {
      store: "",
    }
  },
  methods: {
    goFilters() {
      this.store = KompiStore();
      this.store.setSpecie(this.specie);
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
