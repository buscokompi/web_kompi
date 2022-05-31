<template>
  <div class="containerall">
    <img class="img-dog-login" src="../assets/images/foto_perro.svg">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg">
      </RouterLink>

      <form class="card-login">

        <div>
          <p class="email">E-mail <span>*</span></p>
          <input v-model="email" class="input-email" type="email" required="required"
            placeholder="adoptaunkompi@gmail.com">

          <p class="pass">Contraseña <span>*</span></p>
        </div>

        <div>
          <input v-model="password" name="password" class="input-password input-email" placeholder="Buscokompi6."
            id="password" :type="type_1" required="required"
            pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" />
          <input type="checkbox" id="toggle-password" />
          <label @click="toggleClicked" for="toggle-password"></label>
        </div>


        <p class="text-pass">Utiliza ocho caracteres como mínimo con una mayuscula, una minúscula, un número y un
          caracter
          especial</p>




        <div>
          <p>Verifica tu contraseña <span>*</span></p>
          <input v-model="passwordCheck" name="password2" class="input-password input-email" placeholder="Buscokompi6."
            id="password2" :type="type_2" required="required"
            pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" />
          <input type="checkbox" id="toggle-password2" />
          <label @click="toggleClicked2" for="toggle-password2"></label>
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
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initFirebase } from '@/firebase/firebase.js';
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "Singin",
  components: { BaseButton },
  data() {
    return {
      firebaseapp: "",
      auth: null,
      email: "",
      password: "",
      passwordCheck: "",
      visible: "visible",
      fieldType: "password",
      type_1: "password",
      type_2: "password",
      buttonAlert: "alertSignin",
    }
  },
  mounted() {
    this.firebaseapp = initFirebase() // Inicizaliza la BBDD
    this.auth = getAuth();
  },
  methods: {

    async signin() {
      if (this.password !== this.passwordCheck) {
        this.buttonAlert = "alertSignin";
      } else {
        await createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            this.buttonAlert = "";
            this.$router.push("/NewUser");
            console.log("usuario registrado");
          }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
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
    },

    info() {
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordCheck);
    },

    toggleClicked() {
      password.classList.toggle("visible");
      if (this.type_1 == "password") {
        this.type_1 = "text"
      } else {
        this.type_1 = "password";
      }
    },
    toggleClicked2() {
      password2.classList.toggle("visible");
      if (this.type_2 == "password") {
        this.type_2 = "text"
      } else {
        this.type_2 = "password";
      }
    }
  }
}


</script>

<style scoped>
.containerall {
  display: flex;
  flex-direction: row;
  margin: 0;
  background-color: #fff;
  justify-content: center;
  height: 100vh;

}

.img-dog-login {
  display: none;

}

.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: var(--lightgrey);

}

.logo {
  width: 8rem;
  margin: 2.6rem;
  margin-top: -0.1rem;
  cursor: pointer;
}


.card-login {
  /* margin-left: 8rem;
  display: flex;
  width: 28rem;
  height: 60%;
  flex-direction: column;
  border-radius: 1.9rem;*/

  padding-top: 4rem;
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
  border-radius: 1.9rem;
  background-color: white;
}

.input-email {
  width: 14rem;
}

#password {
  width: 14rem;
}


.card-login p {
  color: var(--black);
  font-family: var(--text-font);

}

.text-pass {
  margin: 5% 15%;
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
  height: 1.5rem;
  width: 14rem;
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
  height: 2.5rem;
  width: 18rem;
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
  margin-left: 5%;
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

.email {
  margin-top: 1rem;
  margin-bottom: 1rem;
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


#toggle-password2+label {
  text-indent: -9999px;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: -32px;
  cursor: pointer;
}

@media screen and (min-width: 500px) {
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

  .input-email {
    width: 21rem;
  }

  #password {
    width: 21rem;
  }

  .button {
    height: 1.5rem;
    width: 18rem;
  }


  .card-login p {
    width: 75%;
  }

  .btn-signin-google {
    background-color: var(--white);
    border: var(--grey) 0.06rem solid;
    color: var(--black);
    margin-bottom: 1rem;
    height: 2.5rem;
    width: 22rem;
  }



}


@media screen and (min-width: 1000px) {

  .container-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    width: 75%;


  }

}

@media screen and (min-width: 1170px) {
  .img-dog-login {
    display: block;
    width: 44.5%;
    height: 100%;
    object-fit: cover;
  }

  .container-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
  }

  .card-login {
    width: 55%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1.9rem;
    background-color: var(--white);
  }

  .input-email {
    width: 30rem;
  }

  #password {
    width: 30rem;
  }

  .button {
    height: 1.5rem;
    width: 27rem;
  }

  .btn-signin-google {
    background-color: var(--white);
    border: var(--grey) 0.06rem solid;
    color: var(--black);
    margin-bottom: 1rem;
    height: 2.5rem;
    width: 30rem;
  }

  .register {
    margin-top: 1rem;
  }

  .google {
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 20%;
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
