<template>
  <section class="adoption">

    <h2>Animales <br>en adopción</h2>
    <p class="text">Aquí tienes algunas de las últimas mascotas en adopción</p>
    <CardGroup />

  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
import CardGroup from './CardGroup.vue'
export default {
  components: { BaseButton, CardGroup },

}
</script>

<style scoped>
.adoption {
  width: 100%;
  height: fit-content;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  color: var(--black);

}

h2 {
  margin-top: 6rem;
}

.text {
  margin: 1rem 6rem;
  font-size: 1rem;
  font-weight: 500;
}



@media screen and (min-width: 767px) {
  br {
    display: none;
  }


  .text {
    font-size: 1.1rem;
    font-weight: 500;
  }



}

@media screen and (min-width: 1170px) {
  h2 {
    font-size: 2.5rem;
    margin-top: 6rem;
  }

  .text {
    margin: 1rem 2rem 1.4rem;
    font-size: 1.15rem;

    justify-self: center;
  }
}

@media screen and (min-width: 1300px) {

  h2 {
    margin-top: 11rem;
  }
}
</style>
