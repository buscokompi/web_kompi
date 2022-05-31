<template>

  <main class="home">
    <h1>Mi raza favorita es: <br>Ad<img src="../assets/icons/icono_logo_blanco.svg" alt="logo letra 'o'" width="36"
        height="49">ptado</h1>
    <p>Kompi el buscador de animales más<br> grande de la red de España</p>
    <BaseButton url="../views/FilterAnimals" text="Comenzar búsqueda" />
  </main>

</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },

}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(0deg,
      rgb(0 0 0 / 40%),
      rgb(0 0 0 / 40%)),
    url("../assets/images/fondo_web.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

h1 {
  color: var(--white);
  margin: 0 1rem;
}

.home h1 img {
  width: 1.5rem;
  margin-bottom: -0.7rem;
}

.home p {
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1rem 2.5rem;
}

.home .button {
  top: 5rem;
  position: relative;
}

@media screen and (min-width: 767px) {
  h1 {
    font-size: 3.1rem;
  }

  .home p {
    font-size: 1.1rem;
  }

  .home h1 img {
    width: 1.8rem;
    margin-bottom: -0.5rem;
  }

  br {
    display: none;
  }
}

@media screen and (min-width: 1170px) {
  h1 {
    font-size: 3.5rem;
  }


  .home h1 img {
    width: 2rem;
  }

  .home p {
    font-size: 1.25rem;
  }

}

@media screen and (min-width: 1300px) {
  h1 {
    font-size: 4rem;
  }

  .home h1 img {
    width: 2.25rem;
    margin-bottom: -0.2rem;
  }


  .home p {
    font-size: 1.35rem;
  }
}
</style>
