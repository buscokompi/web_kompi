<template>
  <div class="containeruser">
    <img class="img-dog-login" src="../assets/images/foto_perro.svg" alt="Fotografía perro Pug">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
      </RouterLink>

      <form class="card-login">
        <!-- <p class="p-title">Regístrate</p> -->
        <p>Nombre <span>*</span></p>
        <input v-model="nameUser" class="input-name" required="required" ref="name" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}"
          title="Debes poner más de una letra.">
        <p>Apellidos <span>*</span></p>
        <input v-model="surnameUser" class="input-surname" required="required" ref="subname"
          pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}" title="Debes poner más de una letra.">

        <div class="double-input">
          <div class="input-container">
            <p>DNI, NIE, Pasaporte <span>*</span></p>
            <input v-model="dniUser" class="input-dni" required="required" ref="dni" pattern="[0-9]{8}[A-Za-z]{1}]"
              title="Debes poner 8 números y una letra.">
          </div>
          <div class="input-container input-container-date">
            <p>Fecha de nacimiento <span>*</span></p>
            <input v-model="birthdateUser" class="input input-birthdate" ref="date" type="date" required="required">
          </div>
          <div>
            <p>Provincia <span>*</span></p>
            <SelectOptions :options="provincias" class="select"></SelectOptions>
          </div>
          <div class="input-container">
            <p>Localidad <span>*</span></p>
            <input class="input input-location" required="required" ref="location" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}"
              title="Debes poner tu localidad.">
          </div>
        </div>

        <p>Dirección <span>*</span></p>
        <input v-model="directionUser" class="input-direction" ref="direction" required="required"
          pattern="/?{,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}[0-9\s]{1,}" title="Debes poner tu dirección.">
        <p>Número de teléfono <span>*</span></p>
        <input v-model="phoneUser" class="input-phone" required="required" ref="number" pattern="+?{,3}[0-9]{9,}"
          title="Debes poner un numéro de teléfono valido.">
        <button @click.prevent="sendUserData" type="submit"
          class="button btn-login-email btn-continue">Continuar</button>

        <RouterLink class="link" to="/OptionsNewUser">Opciones nuevo usuario</RouterLink>

      </form>
    </div>

  </div>
</template>

<script>
import { initFirebase } from '@/firebase/firebase.js'
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import SelectOptions from "../components/SelectOptions.vue";


export default {
  name: "Newuser",
  components: {
    SelectOptions
  },
  data() {
    return {
      firebaseapp: null,
      auth: null,
      fs: null,
      userEmail: null,
      html: "",
      // inputs formulario
      nameUser: "",
      surnameUser: "",
      dniUser: "",
      birthdateUser: "",
      provinceUser: "",
      locationUser: "",
      directionUser: "",
      phoneUser: "",
      userEmail: "",
      maxDate: "",

      provincias: ["Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Barcelona", "Burgos",
        "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real", "Ceuta", "Córdoba", "Cuenca", "Gerona",
        "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Islas Baleares", "Jaén", "La Coruña",
        "La Rioja",
        "Las Palmas", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense",
        "Palencia",
        "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel",
        "Toledo",
        "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"
      ],
    }

  },
  mounted() {
    this.firebaseapp = initFirebase();
    this.auth = getAuth();
    this.fs = getFirestore();
    this.checkUser();

  },
  methods: {

    actualDate() {
      const fecha = new Date();
      const anioActual = fecha.getFullYear();
      let hoy = fecha.getDate();
      let mesActual = fecha.getMonth() + 1;

      if (mesActual.toString().length === 1) {
        mesActual = "0" + mesActual;
      }

      if (hoy.toString().length === 1) {
        hoy = "0" + hoy;
      }
      console.log(`${anioActual}-${mesActual}-${hoy}`)
      //pasar a vue
      this.maxDate = `${anioActual}-${mesActual}-${hoy}`
      this.birthdateUser = `${anioActual}-${mesActual}-${hoy}`
    },
    async sendUserData() {
      if (this.$refs.name.validity.valid && this.$refs.subname.validity.valid && this.$refs.dni.validity.valid && this.$refs.date.validity.valid && this.$refs.location.validity.valid && this.$refs.direction.validity.valid && this.$refs.number.validity.valid) {
        /*await setDoc(doc(this.fs, "usuarios", this.userEmail), {
          name: this.nameUser,
          surnames: this.surnameUser,
          nif: this.dniUser,
          birthdate: this.birthdateUser,
          province: this.provinceUser,
          location: this.locationUser,
          direction: this.directionUser,
          phone: this.phoneUser
        });*/

        this.$swal({
          title: "¡Gracias!",
          text: "Tu cuenta ha sido creada correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        // this.$router.push("/OptionsNewUser");
      } else {
        this.$swal("Error", "Uno o varios datos de los introducidos son incorrectos", "error");
      }
    },
    checkInputs() {
      if (true) {
        sendUserData();
        this.$swal({
          title: "¡Gracias!",
          text: "Tu cuenta ha sido creada correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: true,
        });
      } else {
        this.$swal("Error", "Uno o varios datos de los introducidos son incorrectos", "error");
      }
    },

    checkUser() {
      const auth = getAuth();

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.userEmail = user.email;
        } else {
          console.log("el usuario no esta logueado");
        }
      });
    }
  }
}
</script>

<style scoped>
.containeruser {
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

.select {
  appearance: none;
  display: flex;
  padding: 0 0 4px 0;
  background: none;
  border: 1px solid rgba(60, 60, 60, 0.26);
  border-radius: 4px;
  white-space: normal;
  width: 13.5rem;
}


.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
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
  height: 80%;
  flex-direction: column;
  border-radius: 1.9rem;
  padding: 2rem 5rem 2.5rem;
  background-color: white;
}

.card-login p {
  color: var(--black);
  font-family: var(--text-font);
}

input {
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: var(--grey) 0.06rem solid;
  font-family: var(--text-font);
  font-size: 1rem;
}

.form-control {
  display: flex;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: var(--grey) 0.06rem solid;
  font-family: var(--text-font);
  font-size: 1rem;
  background-color: white;
}

input:focus {
  color: var(--black);
  outline-color: var(--black);
}

.form-control:focus {
  color: var(--black);
  outline-color: var(--black);
}

.input-container input {
  width: 12.3rem;
  height: 1.5rem;
}

.double-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
}

.button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  border-radius: 0.75rem;
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
  margin-top: 2.5rem;
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

.link-signin {
  color: var(--green);
  font-family: var(--text-font);
  font-weight: 600;
}

p {
  font-family: var(--text-font);
  color: var(--black);
  font-size: 0.9rem;
}

/* calendar */

input::-webkit-inner-spin-button,
input::-webkit-clear-button {
  display: block;
}

input::-webkit-calendar-picker-indicator {
  opacity: 1;
}

input::-webkit-calendar-picker-indicator:hover {
  cursor: pointer;
}

input::-webkit-calendar-picker-indicator::after {
  content: "";
  display: block;
  background: url("https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-32.png") no-repeat;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -1rem;
}


@media screen and (min-width: 1100px) {
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
    font-size: x-large;
  }

  input {
    width: 44rem;
    height: 2rem;
  }

  .button {
    height: 4.0rem;
    font-size: x-large;
  }

  .button img {
    object-fit: contain;
    margin-right: 1.5rem;
    margin-left: 12rem;
  }

  .input-container input {
    width: 20.0rem;
    height: 2rem;
    margin-right: 2rem;
  }

  .select {
    width: 21.5rem;
    height: 3.3rem;
  }

  .session {
    font-size: x-large;
  }

}
</style>
