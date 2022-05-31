<template>
  <div class="container-login">
    <RouterLink to="/">
      <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
    </RouterLink>
    <div class="text">
      <p>Indica tu e-mail y te enviaremos un enlace para restablecer la contraseña</p>
    </div>
    <div class="card-login">
      <p>E-mail</p>
      <input class="input-email" v-model="email">
      <button class="btn" @click="sendEmail">Restaurar contraseña</button>
    </div>
  </div>
</template>

<script>
//Importa las funciones de firebase
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

//Esto hay que ponerlo en el .env
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
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      auth: "",
      firebaseapp: ""
    };
  },
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();
  },
  methods: {
    //Funcion de firebase que manda un email al usuario
    sendEmail() {
      sendPasswordResetEmail(this.auth, this.email)
        .then(() => {
          this.$swal("¡Gracias!", "Hemos enviado un correo a la dirección electrónica que nos has facilitado. Revisa tu bandeja de entrada o spam", "success");
        })
        .catch((error) => {
          //Si el usuario es incorrecto, imprime el error por consola
          const errorCode = error.code;
          const errorMessage = error.message;
          this.$swal("Error", "El email introducido no es correcto", "error");
        });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import '../assets/base.css';

.container-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--lightgrey);
}

.logo {
  width: 8rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.container-login a {
  margin-bottom: 0.5rem;
}

.container-login .text {
  text-align: center;
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

@media screen and (max-width: 650px) {
  .card-login {
    width: 18rem;
  }

  .container-login .text {
    width: 18rem;
  }

  .btn {
    width: 17rem;
  }
}

@media screen and (max-width: 500px) {
  .card-login {
    width: 15rem;
  }

  .container-login .text {
    width: 15rem;
  }

  .btn {
    width: 14rem;
  }
}

@media screen and (max-width: 390px) {
  .card-login {
    width: 10rem;
  }

  .container-login .text {
    width: 10rem;
  }

  .btn {
    width: 9rem;
  }
}

@media screen and (max-width: 300px) {
  .card-login {
    width: 7.5rem;
  }

  .container-login .text {
    width: 7.5rem;
  }

  .btn {
    width: 6.5rem;
  }
}
</style>
