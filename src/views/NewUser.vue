<template>
  <div class="containeruser">
    <img class="img-dog-login" src="../assets/images/foto_perro.svg" alt="Fotografía perro Pug">

    <div class="container-login">

      <RouterLink to="/">
        <img class="logo" src="../assets/icons/version_negro_logo.svg" alt="Logotipo Kompi">
      </RouterLink>

      <form class="card-login">
        <!-- <p class="p-title">Regístrate</p> -->
        <p>Nombre*</p>
        <input v-model="nameUser" class="input-name" ref="name" required="required"
          pattern="[a - zA - ZñÑáéíóúÁÉÍÓÚ\s]{2,}" title="Debes poner más de una letra.">

        <p>Apellidos*</p>
        <input v-model="surnameUser" class="input-surname" required="required" ref="subname"
          pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}" title="Debes poner más de una letra.">

        <div class="double-input">
          <div class="input-container">
            <p>DNI, NIE, Pasaporte*</p>
            <input v-model="dniUser" class="input-dni" required="required" ref="dni" pattern="[0-9]{8}[A-Za-z]{1}]"
              title="Debes poner 8 números y una letra.">
          </div>
          <div class="input-container input-container-date">
            <p>Fecha de nacimiento*</p>
            <input v-model="birthdateUser" class="input input-birthdate" ref="date" type="date" required="required">
          </div>
          <div>
            <p>Provincia*</p>
            <select>
              <option v-for="e in provincias">{{ e }}</option>
            </select>
          </div>
          <div class="input-container">
            <p>Localidad*</p>
            <input class="input input-location" required="required" ref="location" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}"
              title="Debes poner tu localidad.">
          </div>
        </div>

        <p>Dirección*</p>
        <input v-model="directionUser" class="input-direction" ref="direction" required="required"
          pattern="/?{,1}[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,}[0-9\s]{1,}" title="Debes poner tu dirección.">
        <p>Número de teléfono*</p>
        <input v-model="phoneUser" class="input-phone" required="required" ref="number" pattern="+?{,3}[0-9]{9,}"
          title="Debes poner un numéro de teléfono valido.">
        <button @click.prevent="sendUserData" type="submit"
          class="button btn-login-email btn-continue">Continuar</button>

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
        await setDoc(doc(this.fs, "usuarios", this.userEmail), {
          name: this.nameUser,
          surnames: this.surnameUser,
          nif: this.dniUser,
          birthdate: this.birthdateUser,
          province: this.provinceUser,
          location: this.locationUser,
          direction: this.directionUser,
          phone: this.phoneUser
        });

        this.$swal({
          title: "¡Gracias!",
          text: "Tu cuenta ha sido creada correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        this.$router.push("/OptionsNewUser");
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

select {
  appearance: none;
  background: none;
  white-space: normal;
  min-width: 13rem;
  width: 16.3rem;
  min-height: 2.7rem;
  border-radius: 0.8rem;
  border: var(--grey) 0.1rem solid;
  font-family: var(--text-font);
  transition: all 1s;
  padding: 0 0.5rem;

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
  width: 15rem;
  color: var(--black);
  font-family: var(--text-font);
  margin-top: 0.5rem;
}

.double-input p {
  margin-left: 0.5rem;
}


input {
  border: 0;
  min-width: 13rem;
  width: 15rem;
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

.form-control {
  display: flex;
  padding: 0.5rem;
  border-radius: 0.75rem;
  border: var(--grey) 0.06rem solid;
  font-family: var(--text-font);
  font-size: 1rem;
  background-color: white;
}


.form-control:focus {
  color: var(--black);
  outline-color: var(--black);
}



.button {
  width: 16rem;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  transition: all 1s;
  border: 0;
  color: var(--black);
  font-weight: 600;
  font-size: 1rem;
}

.button img {
  object-fit: contain;
  margin: 0 0.4rem 0 0rem;
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

@media screen and (min-width: 767px) {

  .logo {
    margin: 4rem 0 0
  }


  .card-login {
    width: 75%;
    padding: 2rem 0;
    display: flex;
    border-radius: 1.9rem;
    background-color: var(--white);
    gap: 0.2rem;
  }

  input,
  .card-login p {
    width: 27rem;
  }

  .button {
    width: 28rem;
  }

  select {
    width: 28.2rem;
  }

}

@media screen and (min-width: 1170px) {
  .img-dog-login {
    display: flex;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .containeruser {
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

  .double-input {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 0.5rem;
    width: 28rem;
  }

  .double-input input,
  .input-container,
  .input-dni input {

    min-width: none;
    width: 70%;
    padding: 0 0.1rem;
    justify-self: left;
  }

  .double-input p {
    width: 100%;
  }



  select {
    width: 13.5rem;
    justify-self: left;
  }



}


@media screen and (min-width: 1440px) {

  .logo {
    margin: 3.5rem 0 2.5rem;
  }

  .containeruser {
    background: var(--lightgrey)
  }

  .card-login {
    width: 32rem;
    background: var(--white);
    padding: 3.5rem;
    gap: 0.5rem;
  }

}
</style>
