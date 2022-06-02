<template>

  <div class="options-container">

    <div class="progress-bar"></div>
    <div class="title">
      <h1>¡Bienvenido/a a Kompi!</h1>
      <p class="question1">¿Qué es lo que quieres hacer?</p>
    </div>
    <div class="card-options">
      <RouterLink to="/FormUser" class="adopt">
        <img src="../assets/icons/icono_logo_negro.svg" alt="Isologo">
        <p>ADOPTAR</p>
      </RouterLink>
      <RouterLink class="give-in-adoption" to="/FormCard">
        <img src="../assets/icons/icono_logo_blanco.svg" alt="Isologo">
        <p>DAR EN ADOPCIÓN</p>
      </RouterLink>
    </div>

  </div>

</template>

<script>
export default {
  name: "login",
  methods: {
    checkUser() {
      const auth = getAuth();

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.userEmail = user.email;

        } else {
          this.$router.push("/Login");
        }
      });
    },
  },
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
  font-size: 2rem;
  font-weight: 700;
  color: var(--black);
  text-align: center;

}

p {
  font-family: var(--text-font);
  font-size: 1.5rem;
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
  width: 80%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.adopt,
.give-in-adoption {
  width: 10rem;
  height: 20rem;

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
}

.adopt:hover {
  background-color: #cc9320;
}

.question1,
.adopt p {
  color: var(--black);
}

.give-in-adoption p {
  color: var(--white);
}

@media screen and (max-width: 499px) {
  .card-options {
    width: 10rem;
    height: 26rem;
    margin-right: 4rem;
  }

  .give-in-adoption,
  .adopt {
    width: 14rem;
  }



  h1 {
    font-size: 1.5rem;
  }

  .question1 {
    font-size: 1.3rem;
  }

}

@media screen and (min-width: 500px) {
  .card-options {
    width: 20rem;
    height: 35rem;
  }

  .give-in-adoption,
  .adopt {
    width: 20rem;
  }
}

@media screen and (min-width: 840px) {
  .card-options {
    width: 50rem;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

  }

  .give-in-adoption,
  .adopt {
    width: 20rem;

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
    width: 23rem;
  }
}
</style>
