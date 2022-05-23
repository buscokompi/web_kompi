<template>
  <div class="card" @click="clickAnimal()">
    <div class="img-container">
      <img :src="image" :alt="name" loading="lazy">
    </div>
    <h3 class="name">{{ name }}</h3>
    <p><img src="../assets/icons/icono_logo_negro.svg" alt="">{{ location }}</p>
  </div>
</template>


<script>
export default {
  name: "AnimalCard",
  props: {
    image: String,
    name: String,
    location: String,
    id: String
  },
  methods: {
    clickAnimal() {
      console.log(this.id);
    }
  }
}
</script>


<style scoped>
.card {

  width: 16rem;
  height: 22rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  justify-content: center;
  justify-items: center;
  text-align: center;
  border-radius: 1.2rem;
  box-shadow: 0 0 0.5rem rgb(146 146 146 / 50%);
  cursor: pointer;
  background: var(--white);
  overflow: hidden;
}

.img-container {
  grid-area: 1 / 1 / 6 / 2;
  width: 22rem;
  height: 15rem;
  border-radius: 1.2rem 1.2rem 48% 47%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.img-container img {
  width: 16rem;
  min-height: 15rem;
  object-fit: cover;
}

.card p img {
  width: 1rem;
  height: 1rem;
  margin-right: 0.2rem;
  object-fit: contain;
}

.card h3 {
  grid-area: 6 / 1 / 7 / 2;
  margin-top: 1.2rem;
}

.card p {
  grid-area: 7 / 1 / 9/ 2;
  width: 16rem;
  margin-top: 0.3rem;
}
</style>
