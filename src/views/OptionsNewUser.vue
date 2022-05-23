<template>

  <div class="options-container">

    <div class="progress-bar"></div>
    <DarkMode />
    <div class="title">
      <h1>¡Bienvenido/a a Kompi!</h1>
      <p class="question1">¿Qué es lo que quieres hacer?</p>
    </div>
    <div class="card-options">
      <a href="./form-user.html" class="adopt">
        <img src="../assets/icons/icono_logo_negro.svg" alt="Isologo">
        <p>ADOPTAR</p>
      </a>
      <a href="./formulario.html" class="give-in-adoption">
        <img src="../assets/icons/icono_logo_blanco.svg" alt="Isologo">
        <p>DAR EN ADOPCIÓN</p>
      </a>
    </div>

  </div>


</template>

<script>
import DarkMode from '../components/DarkMode.vue';
export default {
  name: "login",
  components: { DarkMode }
}

</script>

<style scoped>
:root {
  --orange: #f9b225;
  --yellow: #ffe194;
  --black: #3f3d3b;
  --white: white;
  --grey: #c4c4c4;
  --lightgrey: #f5f5f5;
  --green: #015865;
  --title-font: "Dosis";
  --text-font: "Open Sans";
}

body {
  margin: 0%;
  color: var(--lightgrey);
}

.options-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

h1 {
  font-family: var(--text-font);
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--black);
  text-align: center;
  margin: 0;
}

p {
  font-family: var(--text-font);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--black);
  text-align: center;
  margin-top: 0.5rem;
}

a p {
  font-family: var(--text-font);
  font-weight: 700;
  color: var(--black);
  font-size: 1.2rem;
  margin-top: 1.2rem;
}

.card-options {
  width: 30rem;
  height: 20rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

img {
  width: 12%;
  margin-top: 1.3rem;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  width: 25%;
  height: 80%;
  border-style: none;
  border-radius: 2rem;
  text-decoration: none;
}

a:hover {
  background-color: #013a42;
  cursor: pointer;
}

.adopt {
  background-color: var(--orange);
}

.adopt:hover {
  background-color: #cc9320;
}

.give-in-adoption p {
  color: white;
  font-weight: 600;
}

@media screen and (min-width: 767px) {}

@media screen and (min-width: 1170px) {
  .card-options {
    flex-direction: row;
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 8rem;
  }
}

@media screen and (min-width: 1300px) {}
</style>
