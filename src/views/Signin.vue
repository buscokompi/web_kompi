<template>
  <div class="containerall">
    <img class="img-dog-login" src="../assets/images/foto_perro.svg">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg">
      </RouterLink>

      <form class="card-login">

        <div>
          <p>E-mail <span>*</span></p>
          <input v-model="email" class="input-email" type="email" required="required"
            placeholder="adoptaunkompi@gmail.com">

          <p class="pass">Contraseña <span>*</span></p>
        </div>

        <div>
          <input v-model="password" name="password" class="input-password input-email" placeholder="Buscokompi6."
            id="password" type="password" required="required"
            pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" />
          <input type="checkbox" id="toggle-password" />
          <label for="toggle-password"></label>
        </div>


        <p>Utiliza ocho caracteres como mínimo con una mayuscula, una minúscula, un número y un caracter
          especial</p>

        <p>Verifica tu contraseña <span>*</span></p>


        <div>
          <input v-model="passwordCheck" name="password2" class="input-password input-email" placeholder="Buscokompi6."
            id="password2" type="password" required="required"
            pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" />
          <input type="checkbox" id="toggle-password2" />
          <label for="toggle-password2"></label>
        </div>



        <span id='message'></span>

        <BaseButton text="Continuar" :value="buttonAlert" @click="signin" class="button btn-signin-email" />

        <!--<div class="button btn-signin-email"><span>Continuar</span></div>-->
        <div class="button btn-signin-google"><img class="google"
            src="../assets/icons/google_icono.svg"><span>Regístrate
            con Google</span></div>

        <RouterLink class="link" to="/NewUser">NewUser</RouterLink>

        <!-- <div class="button btn-signin-facebook"><img class="facebook"
                        src="../assets/icons/facebook_icono.svg"><span>Regístrate con Facebook</span></div> -->
      </form>
      <p class="register">¿Ya tienes una cuenta?
        <RouterLink class="link" to="/Login">Inicia sesión</RouterLink>
      </p>
    </div>

  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import BaseButton from "../components/BaseButton.vue";

const firebaseConfig = {
  apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
  authDomain: "web-kompi.firebaseapp.com",
  projectId: "web-kompi",
  storageBucket: "web-kompi.appspot.com",
  messagingSenderId: "556298514839",
  appId: "1:556298514839:web:92e508e18c5685e99694d2",
  measurementId: "G-93MGP34YQN"
};
export default {
  name: "Singin",
  components: { BaseButton },
  data() {
    return {
      firebaseapp: "",
      auth: "",
      email: "",
      password: "",
      passwordCheck: "",
      visible: "visible",
      fieldType: "password",
      buttonAlert: "alertSignin",
    }
  },
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();
  },
  methods: {

    async signin() {
      if (this.password !== this.passwordCheck) {
        this.buttonAlert = "alertSignin";
      } else {
        // signInFirebase(email, password);
        await createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            this.buttonAlert = "";
            this.$router.push("/NewUser");
            console.log("usuario registrado");
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            this.buttonAlert = "";
          });
      }
    },
    async loginGoogle() {
      const provider = new GoogleAuthProvider();
      this.auth.languageCode = "es";

      await signInWithPopup(this.auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("Autenticado con google");
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);
          alert("Login invalido");
        });
    }

  }
}

// const signInButton = document.querySelector(".btn-signin-email");
// const logGoogle = document.querySelector(".btn-signin-google");
// const logFacebook = document.querySelector(".btn-signin-facebook");
// const inputPassword = document.getElementById("password2");
// // Evento on click que coge el nombre de usuario y contraseña y lo registra en la base de datos de firebase
// signInButton.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const email = document.querySelector(".input-email").value;
//     const password = document.querySelector(".input-password").value;
//     const passwordCheck = document.querySelector(".input-password").value;

//     check();

//     if (password !== passwordCheck) {
//         alert("Comprueba que la contraseña sea correcta");
//     } else {
//         // signInFirebase(email, password);
//         await createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.log("usuario registrado");
//                 window.location.href = "newuser.html";
//             }).catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 alert("invalido");
//             });
//     }
// });
// // Login con google


// logGoogle.addEventListener("click", () => {
//     logInGoogle();
// });


// // Login con facebook
// logFacebook.addEventListener("click", () => {
//     logInFacebook();
// });

// const check = function () {
//     console.log(document.getElementById("password").value);
//     console.log(document.getElementById("password2").value);
//     if (document.getElementById("password").value ==
//         document.getElementById("password2").value) {
//         document.getElementById("message").style.color = "green";
//         document.getElementById("message").innerHTML = "Las contraseñas coinciden";
//     } else {
//         document.getElementById("message").style.color = "red";
//         document.getElementById("message").innerHTML = "Las contraseñas no coinciden. Inténtalo de nuevo.";
//     }
// };

// // Codigo para cuando se teclee la contraseña se verifique, ver si coinciden ambas contraseñas

// const checkPassword = document.querySelector(".input-password");
// checkPassword.addEventListener("keyup", check);

// // See first password
// const password = document.getElementById("password");
// const togglePassword = document.getElementById("toggle-password");
// togglePassword.addEventListener("click", toggleClicked);

// function toggleClicked() {
//     password.classList.toggle("visible");
//     if (this.checked) {
//         password.type = "text";
//     } else {
//         password.type = "password";
//     }
// }

// // See second password
// const password2 = document.getElementById("password2");
// const togglePassword2 = document.getElementById("toggle-password2");
// togglePassword2.addEventListener("click", toggleClicked2);

// function toggleClicked2() {
//     password2.classList.toggle("visible");
//     if (this.checked) {
//         password2.type = "text";
//     } else {
//         password2.type = "password";
//     }
// }
// inputPassword.addEventListener("keyup", check);

</script>

<style scoped>
.containerall {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.img-dog-login {
  display: none;

}

.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

}

.logo {
  width: 8rem;
  margin: 2rem 0px;
  cursor: pointer;
}

.card-login {
  display: flex;
  width: 28rem;
  height: 100%;
  flex-direction: column;
  border-radius: 1.9rem;
  padding: 2rem 5rem 2.5rem;
  background-color: white;
}

.input-email {
  width: 27rem;
}

#password {
  width: 27rem;
}


.card-login p {
  color: var(--black);
  font-family: var(--text-font);
}

/* .p-title {
  text-align: center;
  font-family: var(--text-font);
  font-size: 2rem;
  margin-top: -1rem;
} */

input {
  padding: 0.5rem;
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

.button img {
  object-fit: contain;
  margin-right: 1.5rem;
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
  background-color: var(--white-color);
  border: var(--grey) 0.06rem solid;
  color: var(--black);
  margin-bottom: 1rem;
  margin-top: rem;
}

.btn-login-google:hover {
  background-color: #bebebe;
}

.btn-login-google span {
  color: var(--black);
}

.btn-login-facebook {
  background-color: #30457b;
}

.btn-login-facebook span {
  color: var(--white);
}

.btn-login-facebook:hover {
  background-color: rgb(10 20 44);
}

/* BOTONES SIGN IN */

.btn-signin-email {
  background-color: var(--orange);
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.btn-signin-email:hover {
  background-color: #cc9320;
}

.btn-signin-google {
  background-color: var(--white);
  border: var(--grey) 0.06rem solid;
  color: var(--black);
  margin-bottom: 1rem;
}

.btn-signin-google:hover {
  background-color: #bebebe;
}

.btn-signin-google span {
  color: var(--black);
}

.btn-signin-facebook {
  background-color: #30457b;
}

.btn-signin-facebook span {
  color: var(--white);
}

.btn-signin-facebook:hover {
  background-color: rgb(10 20 44);
}

.link-signin {
  color: var(--green);
  font-family: var(--text-font);
  font-weight: 600;
}

.google {
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 20%;
}

.facebook {
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 20%;
}

.register {
  font-family: var(--text-font);
  color: var(--black);
  font-size: 0.9rem;
}

.forgot-pass {
  font-family: var(--text-font);
  font-size: 0.8rem;
}

.forgot-pass a {
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

/* see first password */

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

/* see second password */

#password2 {
  margin-top: 1rem;
  background-image: url("https://img.icons8.com/material-sharp/20/000000/visible.png");
  background-position: 97% center;
  background-repeat: no-repeat;
}

#password2.visible {
  background-image: url("https://img.icons8.com/material-outlined/20/000000/invisible.png");
}

#toggle-password2 {
  display: none;
}

/* .pass {
  margin-top: 2rem;
  margin-bottom: -1px;
} */

#toggle-password2+label {
  text-indent: -9999px;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: -32px;
  cursor: pointer;
}

@media screen and (min-width: 700px) {
  .container-login {
    width: 100%;
  }
}

@media screen and (min-width: 1170px) {
  .img-dog-login {
    display: block;
    width: 45%;
    height: 100%;
    object-fit: cover;
  }

  .container-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    width: 55%;


  }



}


@media screen and (min-width: 2100px) {

  .logo {
    width: 15rem;
    margin: 4rem 0px;
    cursor: pointer;
  }

  .card-login {
    display: flex;
    width: 45rem;
    height: 70%;
    flex-direction: column;
    border-radius: 1.9rem;
    padding: 2rem 8rem 0px;
    background-color: white;
  }

  .card-login p {
    color: var(--black);
    font-family: var(--text-font);
    font-size: x-large;
  }

  .input-email {
    width: 44rem;
    height: 3rem;
  }

  #password {
    width: 44rem;
  }

  .button {
    height: 4.5rem;
    border-radius: 0.8rem;
    border: 0;
    font-size: 1.5rem;
    font-family: var(--text-font);
    font-weight: 600;
    transition: background-color 0.7s ease;
  }

  .button img {
    object-fit: contain;
    margin-right: 1.5rem;
    margin-left: 12rem;
  }


  .register {
    font-size: 1.5rem;
  }

  ::placeholder {
    font-size: 1.5rem;
  }


}
</style>
