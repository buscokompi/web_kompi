<template>
  <div class="container-login">
    <a href="./index.html">
      <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
    </a>
    <div>
      <p>Indica tu e-mail y te enviaremos un enlace para restablecer la contraseña</p>
    </div>
    <div class="card-login">
      <p>E-mail</p>
      <input class="input-email">
      <button class="btn">Restaurar contraseña</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword"

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import '../assets/base.css';

body {
  display: flex;
  flex-direction: row;
  margin: 0;
  height: 100vh;
  background-color: var(--lightgrey);
}

.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.logo {
  width: 8rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.container-login a {
  margin-bottom: 0.5rem;
}

p {
  font-family: var(--text-font);
  color: var(--black);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.card-login {
  width: 26rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.8rem;
  padding: 2.5rem 3.5rem;
  background-color: var(--white);
}

.card-login p {
  color: var(--grey);
  font-family: var(--text-font);
  margin-top: 0;
  margin-bottom: 1rem;
}

input {
  font-family: var(--text-font);
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: var(--grey) 0.06rem solid;
}

input:focus {
  color: var(--black);
  outline-color: var(--black);
}

.btn {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 25rem;
  padding: 0.5rem;
  border-radius: 0.8rem;
  border: 0;
  font-size: 1rem;
  font-family: var(--text-font);
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background-color: var(--orange);
  color: var(--black);
}

.btn:hover {
  background-color: #e6a422;
  color: var(--black);
  cursor: pointer;
}
</style>
