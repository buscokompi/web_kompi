<template>

  <div class="container">
    <h1><span>¡Ya casi estás!</span> Verifica tu identidad completando el captcha</h1>
    <vue-recaptcha ref="recaptcha" @verify="onVerify" sitekey="6Ld5mTcgAAAAAERozGsnUwLpBMQ3yFkCFY_7eR3X">
    </vue-recaptcha>
    <BaseButton @click="sendEmail()" text="Continuar"></BaseButton>

  </div>

</template>



<script>
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { VueRecaptcha } from "vue-recaptcha";
import { KompiStore } from "@/stores/KompiStore.js"
import { getAuth } from "firebase/auth";
import emailjs from "@emailjs/browser";
import BaseButton from "./BaseButton.vue";

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
  components: {
    VueRecaptcha,
    BaseButton
  },
  data() {
    return {
      firebaseapp: "",
      fs: "",
      auth: "",
      userEmail: "",
      ownerAnimalEmail: "",
      store: "",

      verifyKey: "",

      templateparams: {
        user_email: "",
        client_email: "",
        client_name: "",
        client_phone: "",

        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
        question11: "",
        question12: "",
        question13: "",
        question14: "",
        question15: "",

        "g-recaptcha-response": ""
      }
    }
  },
  created() {
    this.store = KompiStore() // Inicializamos el enlace a la store cuando se crea el componente
    this.ownerAnimalEmail = this.store.getEmail();
  },
  mounted() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.fs = getFirestore();
    this.checkUser();
    this.templateparams.user_email = this.ownerAnimalEmail;
  },
  methods: {

    onVerify(e) {
      this.verifyKey = e;

    },
    sendEmail() {
      this.templateparams["g-recaptcha-response"] = this.verifyKey;
      console.log(this.templateparams);
      emailjs.send("gmailkompi", "templatecontacto", this.templateparams, "G_EMyGv_3eAspWWRT")
        .then((result) => {
          console.log("Funciona", result.text);
        }, (error) => {
          console.log("No va", error.text);
        });
    },

    checkUser() {
      const auth = getAuth();

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.userEmail = user.email;
          this.getDataForm(user.email);
          this.getUserForm(user.email);
        } else {
          this.$router.push("/Signin");
        }
      });
    },

    async getDataForm(userEmail) {
      const docRef = doc(this.fs, "userform", userEmail);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.templateparams.question1 = docSnap.data().answer1;
        this.templateparams.question2 = docSnap.data().answer2;
        this.templateparams.question3 = docSnap.data().answer3;
        this.templateparams.question4 = docSnap.data().answer4;
        this.templateparams.question5 = docSnap.data().answer5;
        this.templateparams.question6 = docSnap.data().answer6;
        this.templateparams.question7 = docSnap.data().answer7;
        this.templateparams.question8 = docSnap.data().answer8;
        this.templateparams.question9 = docSnap.data().answer9;
        this.templateparams.question10 = docSnap.data().answer10;
        this.templateparams.question11 = docSnap.data().answer11;
        this.templateparams.question12 = docSnap.data().answer12;
        this.templateparams.question13 = docSnap.data().answer13;
        this.templateparams.question14 = docSnap.data().answer14;
        this.templateparams.question15 = docSnap.data().answer15;
      } else {
        this.$swal({
          text: "Hemos detectado que no tienes completado el formulario del adoptante. Para poder contactar con el cuidador debes rellenarlo previamente.",
          showCancelButton: "true",
          confirmButtonText: "Completar",
          cancelButtonText: "Volver atrás",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push({
              path: '/FormUser',
            })
          } else {
            window.history.back();
          }
        });
      }
    },

    async getUserForm(userEmail) {
      const docRef = doc(this.fs, "usuarios", userEmail);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.templateparams.client_email = userEmail;
        this.templateparams.client_name = docSnap.data().name;
        this.templateparams.client_phone = docSnap.data().phone;
      } else {
      }
    },
  },

};

</script>

<style scoped>
.container {
  width: 45rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: var(--lightgrey);
  border-radius: 1.9rem;
}

h1 {
  font-family: var(--text-font);
  font-weight: 400;
  font-size: 1.2rem;
}

span {
  font-weight: 600;
}
</style>
