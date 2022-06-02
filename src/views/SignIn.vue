<template class="body">
  <div class="containerall">
    <img class="img-dog-login" src="../assets/images/foto_perro.jpg">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg">
      </RouterLink>

      <form class="card-login">

        <div class="field">
          <p class="email">E-mail<span>*</span></p>
          <input v-model="email" class="input-email" type="email" required="required"
            placeholder="adoptaunkompi@gmail.com">
        </div>


        <div class="field">
          <p>Contraseña<span>*</span></p>
          <div class="see">
            <input v-model="password" name="password" class="input-password input-email" placeholder="Buscokompi6."
              id="password" :type="type_1" required="required"
              pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" />
            <div>
              <input type="checkbox" id="toggle-password" />
              <label @click="toggleClicked" for="toggle-password"></label>
            </div>
          </div>
        </div>

        <p class="text-pass">Utiliza ocho caracteres como mínimo con una mayúscula, una minúscula, un número y
          un caracter especial
        </p>

        <div class="field">
          <p>Verifica tu contraseña<span>*</span></p>
          <div class="see">
            <input v-model="passwordCheck" name="password2" class="input-password input-email"
              placeholder="Buscokompi6." id="password2" :type="type_2" required="required"
              pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" />
            <div><input type="checkbox" id="toggle-password2" />
              <label @click="toggleClicked2" for="toggle-password2"></label>
            </div>
          </div>
        </div>

        <div>
          <div @click="signin">
            <BaseButton text="Continuar" :value="buttonAlert" class="button btn-signin-email" />
          </div>
        </div>
        <!--<div class="button btn-signin-email"><span>Continuar</span></div>-->
        <div class="button btn-signin-google"><img class="google" src="../assets/icons/google_icono.svg">Regístrate
          con Google</div>


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
  name: "SignIn",
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
      buttonAlert: "",
    }
  },
  mounted() {
    this.firebaseapp = initFirebase() // Inicizaliza la BBDD
    this.auth = getAuth();
  },
  methods: {

    async signin() {
      if (this.password !== this.passwordCheck) {
        this.$swal("Error", "Las contraseñas no coinciden.", "error");
      } else {
        await createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            this.$router.push("/NewUser");
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.$swal("Error", "El email que has introducido es inválido o ya existe", "error");
          });
      }
    },
    async loginGoogle() {
      const provider = new GoogleAuthProvider();
      this.auth.languageCode = "es";

      await signInWithPopup(this.auth, provider)
        .then((result) => {
          const user = result.user;
          this.$router.push("/NewUser");
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          this.$swal("Error", "El email que has introducido es inválido o ya existe", "error");
        });
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
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: 5rem;
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

  font-size: 1rem;

}

input:focus {
  color: var(--black);
  outline-color: var(--black);
}

.text-pass {
  width: 70vw;
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
}

.button img {
  object-fit: contain;
  margin: 0 0.4rem 0 0rem;
}


/* BOTONES SIGN IN */





.btn-signin-google {
  background-color: var(--white);
  color: var(--black);
  margin: 1rem 0;
  border: 0.1rem solid var(--grey);
  font-family: var(--text-font);
  font-size: 1rem;
  font-weight: 600;
}

.btn-signin-google:hover {
  background-color: #bebebe;
}



.google {
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 5%;
}

.facebook {
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 20%;
}

.link {
  font-family: var(--text-font);
  color: var(--green);
  font-weight: 600;
}

.register {
  margin-top: 1rem;
}

/* see first password */

.see {
  display: flex;
  flex-direction: row;
}

#password,
#password2 {
  background-image: url("https://img.icons8.com/material-sharp/20/000000/visible.png");
  background-position: 97% center;
  background-repeat: no-repeat;

}



#password.visible,
#password2.visible {
  background-image: url("https://img.icons8.com/material-outlined/20/000000/invisible.png");
}

#toggle-password,
#toggle-password2 {
  display: none;
}

#toggle-password+label,
#toggle-password2+label {
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  margin: 0.7rem 0 0 -1.8rem;
}

.email {
  margin-top: 1rem;
  margin-bottom: 1rem;
}




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

  .button,
  input,
  .field p,
  .text-pass {
    width: 27rem;
  }

  .google {
    width: 1.8rem;
    height: 1.8rem;
  }

  .button,
  input {
    min-height: 3rem;
  }


  input::placeholder {
    font-size: 1rem;
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
    display: flex;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }


  .containerall {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 3fr 3.5fr;
    grid-template-rows: 1fr;
  }

  .container-login {
    width: auto;
    height: 100vh;
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

  .text-pass {
    font-size: 0.8rem;
  }




}


@media screen and (min-width: 1440px) {
  .logo {
    margin: 3.5rem 0 2.5rem;
  }

  .containerall {
    background: var(--lightgrey)
  }


  .card-login {
    width: 32rem;
    background: var(--white);
    padding: 3rem;
    gap: 1.5rem
  }

  .text-pass {
    margin-top: -0.8rem;
  }
}
</style>
