<template>
  <div class="app">
    <img class="img-dog-login" src="../assets/images/foto_perro.jpg" alt="Fotografía perro Pug">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi Negro">
      </RouterLink>
      <!-- <img class="logo" src="../assets/icons/version_blanca_logo.svg" alt="Logotipo Kompi Blanco"> -->
      <!-- <DarkMode /> -->
      <div class="card-login">

        <div class="field">
          <p class="email">E-mail*</p>
          <input class="input-email" placeholder="adoptaunkompi@gmail.com" v-model="email">
        </div>

        <div class="field">
          <p>Contraseña*</p>
          <div class="see">
            <input :type="fieldType" id="password" placeholder="BuscoKompi6." v-model="password"
              v-bind:class="visible" />
            <div>
              <input type="checkbox" id="toggle-password" @click.prevent="seePassword()" />
              <label for="toggle-password" v-bind:class="visible"></label>
            </div>
          </div>
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
import PrivacyPolicy from "./PrivacyPolicy.vue";
import { KompiStore } from "../stores/KompiStore";

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

      store: ""
    };
  },
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();

    this.store = KompiStore();
  },

  methods: {

    async loginEmail() {
      await signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          this.store.setEmail(this.email);
          this.$router.push("/");
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
          this.store.setEmail(user.email);
          this.$router.push("/");
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
  components: { PrivacyPolicy },

}

</script>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  margin: 0;
  background-color: var(--white);
  justify-content: center;
  width: 100vw;
}

.logo {
  width: 7rem;
  margin: 3rem 0 1rem;
  cursor: pointer;
}

.img-dog-login {
  display: none;
}


.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
}

.card-login {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  flex-direction: column;
  border-radius: 1.9rem;
}

.card-login p {
  color: var(--black);
  font-family: var(--text-font);

}

.field {
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: 5rem;
  transition: all 1s;
}

.field p {
  width: 70vw;
  margin: 1rem 0 0;
  text-align: left;
}




input {
  min-width: 13rem;
  width: 70vw;
  min-height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 0.8rem;
  border: var(--grey) 0.1rem solid;
  font-family: var(--text-font);
  transition: all 1s;
  font-size: 1rem;

}

input:focus {
  color: var(--black);
  outline-color: var(--black);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset;
}

.forgot-pass {
  width: 70vw;
  margin-top: .5rem;
}

.forgot-pass a {
  font-family: var(--text-font);
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
  color: var(--black);
}

.button {
  min-width: 13rem;
  width: 70vw;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  transition: all 1s;
  font-family: var(--text-font);
  font-weight: 600;
  color: var(--black);
  font-size: 0.9rem;
}

.button img {
  object-fit: contain;
  margin: 0 0.4rem 0 0rem;
}

/* BOTONES LOGIN */

.btn-login-email {
  background-color: var(--orange);
  margin-top: 2rem;
  justify-content: center;
  cursor: pointer;
}



.btn-login-email:hover {
  background-color: #cc9320;
}

.btn-login-email:hover span {
  color: var(--white-color);
}

.btn-login-google {
  background-color: var(--white);
  color: var(--black);
  margin: 1rem 0;
  border: 0.1rem solid var(--grey);
  font-family: var(--text-font);
  font-size: 0.9rem;
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
  width: 1.2rem;
  height: 1.2rem;
}


/* see password */
.see {
  display: flex;
  flex-direction: row;
}


#toggle-password {
  display: none;

}

#toggle-password+label {
  background-image: url("https://img.icons8.com/material-sharp/20/000000/visible.png");
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 1rem 0 0 -2.2rem;
}

#toggle-password+label.visible {
  background-image: url("https://img.icons8.com/material-sharp/20/000000/visible.png");
  background-image: url("https://img.icons8.com/material-outlined/20/000000/invisible.png");

}

.register {
  margin-top: 1rem;
  text-align: center;
}

/* --------------------------------------------------------------- MEDIA QUERIES ----------------------------------------------------------- */
@media screen and (min-width: 767px) {

  .logo {
    margin: 5rem 0 0
  }


  .card-login {
    width: 75%;
    padding: 4rem 0;
    display: flex;
    border-radius: 1.9rem;
    background-color: var(--white);
    gap: 0.5rem;
  }

  .btn-login-google,
  .button {
    font-size: 1rem;
  }

  .google {
    width: 1.8rem;
    height: 1.8rem;
  }

  .button,
  input,
  .field p,
  .forgot-pass {
    width: 27rem;
  }

  .button,
  input {
    min-height: 3rem;
  }


  input::placeholder {
    font-size: 1rem;
  }

  .forgot-pass {
    margin-top: 0;
  }

  .button:first-child {
    margin-top: 3rem;
  }

  .register {
    margin: 3rem 0;
  }
}

@media screen and (min-width: 1170px) {
  .img-dog-login {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .app {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 3fr 3.5fr;
    grid-template-rows: 1fr;
  }

  .container-login {
    width: auto;
    height: 100%;
    margin-bottom: 0;
  }

  .card-login {
    width: 70%;
    gap: 0.7rem
  }

  .field {
    width: 10vw;
  }

  .field:nth-child(4) p {
    margin-top: 0.5rem;
  }


}

@media screen and (min-width: 1440px) {

  .logo {
    margin: 3.5rem 0 2.5rem;
  }

  .container-login {
    background: var(--lightgrey)
  }


  .card-login {
    width: 32rem;
    background: var(--white);
    padding: 5rem 3rem;
    gap: 1.5rem
  }


}
</style>
