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

}

p {
  font-family: var(--text-font);
  font-size: 1.8rem;
  font-weight: 600;
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
  margin-top: 2rem;
  height: 20rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.card-options p {
  color: #000;
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
  width: 9rem;
}

.adopt:hover {
  background-color: #cc9320;
}

.give-in-adoption,
.adopt {
  color: black;
  width: 9rem;
}

@media screen and (min-width: 500px) {
  .card-options {
    width: 20rem;
  }

  .give-in-adoption,
  .adopt {
    color: black;
    width: 20rem;
  }
}

@media screen and (min-width: 830px) {
  .card-options {
    width: 50rem;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 8rem;
  }

  .give-in-adoption,
  .adopt {
    color: black;
    width: 30rem;
  }
}

@media screen and (min-width: 1170px) {
  .card-options {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 8rem;
  }

  .give-in-adoption,
  .adopt {
    color: black;
    width: 23rem;
  }
}
</style>
