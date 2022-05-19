<template>
  <div class="app">
    <img class="img-dog-login" src="../assets/images/foto_perro.svg" alt="Fotografía perro Pug">

    <div class="container-login">

      <a to="../index.html">
        <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
      </a>

      <div class="card-login">

        <p class="email">E-mail</p>
        <input class="input-email" placeholder="adoptaunkompi@gmail.com">
        <p class="pass">Contraseña</p>
        <input type="password" id="password" placeholder="BuscoKompi6." />
        <input type="checkbox" id="toggle-password" />
        <label for="toggle-password"></label>

       <a class="forgot-pass" to="./forgot-password.html">Has olvidado tu contraseña?</a>
        <div class="button btn-login-email"><span>Continuar</span></div>
        <div class="button btn-login-google"><img class="google" src="../assets/icons/google_icono.svg"
           alt="Icono Google"><span>Inicia sesión con Google</span></div>

      </div>
      <p class="register">¿No tienes una cuenta? <RouterLink class="link-signin" to="/OptionsNewUser">Regístrate</RouterLink></p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "OptionsNewUser"

  }

//   const password = document.getElementById("password");
// const togglePassword = document.getElementById("toggle-password");
// togglePassword.addEventListener("click", toggleClicked);

// function toggleClicked() {
//   password.classList.toggle("visible");
//   if (this.checked) {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// }


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

  .app {
    display: flex;
    flex-direction: row;
    margin: 0;
    height: 100vh;
    background-color: #f5f5f5;
    justify-content: center;
  }

  .img-dog-login {
    display: none;
  }

  .container-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  .logo {
    width: 8rem;
    margin: 2rem 0;
    cursor: pointer;
  }

  .card-login {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 40rem;
    flex-direction: column;
    border-radius: 1.9rem;
    background-color: white;
  }

    .email{
      margin-top: 2.5rem;
    }
  .card-login p {
    width: 75%;
    min-width: 250px ;
    color: var(--black);
    font-family: var(--text-font);
  }

  input {
    width: 75%;
    min-width: 250px ;
    height: 2.5rem;
    border-radius: 0.8rem;
    border: var(--grey) 0.1rem solid;
    font-family: var(--text-font);
    font-size: 1rem;
  }

  input:focus {
    color: var(--black);
    outline-color: var(--black);
  }

  .button {
    width: 75%;
    min-width: 250px ;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    border-radius: 0.8rem;
    border: 0;
    font-size: 1rem;
    font-family: var(--text-font);
    font-weight: 600;
    transition: background-color 0.7s ease;
  }

  .btn-login-email {
    background-color: var(--orange);
    margin-top: 2rem;
    margin-bottom: 3rem;
    justify-content: center;
  }

  .button span {
    color: var(--black);
    pointer-events: none;
  }

  .btn-login-email:hover {
    background-color: #cc9320;
  }

  .btn-login-email:hover span {
    color: var(--white-color);
  }

  /* BOTONES LOGIN */

  .btn-login-google {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    background-color: var(--white-color);
    border: var(--grey) 0.06rem solid;
    color: var(--black);
    margin-bottom: 1rem;
  }

  .btn-login-google:hover {
    background-color: #bebebe;
  }

  .btn-login-google span {
    color: var(--black);
  }

  /* BOTONES SIGN IN */

  .btn-signin-email:hover {
    background-color: #cc9320;
  }

  .btn-signin-google:hover {
    background-color: #bebebe;
  }

  .btn-signin-google span {
    color: var(--black);
  }

  .link-signin {
    color: var(--green);
    font-family: var(--text-font);
    font-weight: 600;
  }

  .google {
    width: 1.8rem;
    height: 1.8rem;
  }

  p {
    font-family: var(--text-font);
    color: var(--black);
    font-size: 0.9rem;
  }

  .forgot-pass {
    font-family: var(--text-font);
    font-size: 0.8rem;
    width: 85%;
    text-decoration: underline;
    color: var(--black);
  }



  #message {
    font-family: var(--text-font);
    font-size: 0.9rem;
  }

  #comment {
    font-family: var(--text-font);
    font-size: 0.8rem;
  }

  /* see password */

  #password {
    margin-top: 1rem;
    background-image: url("https://img.icons8.com/material-sharp/20/000000/visible.png");
    background-position: 97% center;
    background-repeat: no-repeat;
  }

  #password.visible {
    background-image: url("https://img.icons8.com/material-outlined/20/000000/invisible.png");

  }

  #toggle-password {
    display: none;

  }

  .pass {
    margin-top: 2rem;
    margin-bottom: -1px;

  }

  #toggle-password+label {
    text-indent: -9999px;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: -32px;
    cursor: pointer;
  }

  .register {
    text-align: center;
  }

  /* --------------------------------------------------------------- MEDIA QUERIES ----------------------------------------------------------- */
  @media screen and (min-width: 767px) {
    .card-login {
      width: 100%
    }

    input,
     .button,
     .card-login p,
     .forgot-pass {
      width: 75%;
    }

  }
  @media screen and (min-width: 1170px) {

    .img-dog-login{
      object-fit: cover;
      width: 45%;
      height: 100%;
      display:block
    }
    input,
     .button,
     .card-login p,
     .forgot-pass {
      width: 80%;
    }
  .card-login{
    width: 28rem;
    height: 40rem;
    padding: 3.5rem 5rem;
  }
.btn-login-email{
  margin-top: 5rem;
}

  }

  @media screen and (min-width: 1300px) {

  .img-dog-login{
      display:block
    }

  }

  input,
     .button,
     .card-login p,
     .forgot-pass {
      width: 90%;
    }

    .register{
      margin-top: 2rem;
    }

</style>
