<template>
  <div class="app">
    <img class="img-dog-login" src="../assets/images/foto_perro.svg" alt="Fotografía perro Pug">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi Negro">
      </RouterLink>
      <!-- <img class="logo" src="../assets/icons/version_blanca_logo.svg" alt="Logotipo Kompi Blanco"> -->
      <!-- <DarkMode /> -->
      <div class="card-login">
        <div class="login">
          <p class="email">E-mail</p>
          <input class="input-email" placeholder="adoptaunkompi@gmail.com" v-model="email">
          <p class="pass">Contraseña</p>
          <input :type="fieldType" id="password" placeholder="BuscoKompi6." v-model="password" v-bind:class="visible" />
          <input type="checkbox" id="toggle-password" @click.prevent="seePassword()" />
          <label for="toggle-password"></label>
        </div>
        <p class="forgot-pass">
          <RouterLink class="link" to="/ForgotPassword">¿Has olvidado tu contraseña?</RouterLink>
        </p>
        <div class="button btn-login-email" @click="loginEmail()"><span>Continuar</span>

        </div>
        <div class="button btn-login-google" @click="loginGoogle()"><img class="google"
            src="../assets/icons/google_icono.svg" alt="Icono Google">
          <span>
            Inicia sesión con Google
          </span>
        </div>
      </div>
      <p class="register">¿No tienes una cuenta?
        <RouterLink class="link-signin" to="/Signin">Regístrate</RouterLink>
      </p>
    </div>
  </div>

</template>

<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import DarkMode from "../components/DarkMode.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";
import { ModeStorage } from "@/stores/ModeStorage.js"

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
  name: "OptionsNewUser",
  name: "PrivacyPolicy",
  data() {
    return {
      email: "",
      password: "",
      auth: "",
      firebaseapp: "",
      visible: "visible",
      fieldType: "password",
      modeStorage: ModeStorage(),
      darkMode: false,
      lightMode: false
    };
  },
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();
  },

  watch: {
    modeStorage() {
      this.darkMode = this.modeStorage.darkMode
      this.lightMode = !this.modeStorage.darkMode
    }
  },

  methods: {
    info() {
      console.log(this.modeStorage)
      this.darkMode = false
    },

    async loginEmail() {
      await signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          console.log("El usuario existe");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          alert("Login invalido");
        });
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
    },
    seePassword() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
      if (this.visible === "visible") {
        this.visible = "";
      }
      else {
        this.visible = "visible";
      }
    }
  },
  components: { DarkMode, PrivacyPolicy },

}

</script>

<style scoped>
.app {
  flex-direction: row;
  margin: 0;
  background-color: #fff;
  justify-content: center;
  height: 100vh;
}

.img-dog-login {
  display: none;
}

.login {
  width: 95%
}

.logo {
  width: 8rem;
  margin: 3rem;
  cursor: pointer;
}

.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: var(--lightgrey);
}

.card-login {
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
  border-radius: 1.9rem;
}

.card-login p {
  width: 75%;
  min-width: 250px;
  color: var(--black);
  font-family: var(--text-font);
}

.email {

  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

input {
  width: 95%;
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

.pass {
  margin-top: 2rem;
  margin-bottom: -1px;
}

.forgot-pass {
  margin-top: 1rem;
  font-family: var(--text-font);
  font-size: 0.8rem;
}

.forgot-pass a {
  margin-left: 1rem;
  cursor: pointer;
  text-decoration: underline;
  color: var(--black);
}

.button {
  width: 95%;
  min-width: 250px;
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

/* BOTONES LOGIN */

.btn-login-email {
  background-color: var(--orange);
  margin-top: 2rem;
  margin-bottom: 3rem;
  justify-content: center;
  cursor: pointer;
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

.btn-login-google {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  background-color: white;
  border: var(--grey) 0.06rem solid;
  margin-bottom: 1rem;
  cursor: pointer;
}


.btn-login-google:hover {
  background-color: #bebebe;
}

.btn-login-google span {
  color: #3f3d3b;
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
@media screen and (min-width: 500px) {
  .register {
    margin-top: 3rem;
  }


  .button,
  .card-login p {
    width: 75%;
  }

  .login {
    width: 75%;
  }

  .email,
  .pass {
    margin-left: 1rem;
  }

  .container-login {
    width: 100%;
  }

  .card-login {
    width: 60%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1.9rem;
    background-color: var(--white);
  }
}

@media screen and (min-width: 1170px) {
  .img-dog-login {
    object-fit: cover;
    width: 45%;
    display: block
  }

  .login,
  .button,
  .card-login p {
    width: 80%;
  }

  .card-login {
    width: 28rem;
    height: 40rem;
  }

  .btn-login-email {
    margin: 3rem;
  }

  .app {
    display: flex;
  }


}

@media screen and (min-width: 1300px) {

  .card-login {
    width: 55%;
    height: 70%;
  }

  .email {
    margin-top: 4rem;
  }


  .email,
  .pass {
    margin-left: 1rem;
  }


  .register {
    margin-top: 25px;
  }



}
</style>
