<template>

  <div>

    <vue-recaptcha ref="recaptcha" @verify="onVerify" sitekey="6Ld5mTcgAAAAAERozGsnUwLpBMQ3yFkCFY_7eR3X">

    </vue-recaptcha>
    <button @click="sendEmail()">hola</button>

  </div>

</template>



<script>
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { VueRecaptcha } from "vue-recaptcha";
import { KompiStore } from "@/stores/KompiStore.js"
import { getAuth } from "firebase/auth";
import emailjs from "@emailjs/browser";

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
  components: { VueRecaptcha },
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
        user_email: "attenerigonmen@gmail.com",
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
    this.getUserForm();

    console.log(this.ownerAnimalEmail);

  },
  methods: {

    onVerify(e) {
      this.verifyKey = e;
      console.log(e);

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
        // doc.data() will be undefined in this case
        console.log("no va");
      }
    },

    async getUserForm(userEmail) {
      const docRef = doc(this.fs, "usuarios", this.ownerAnimalEmail);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.templateparams.client_email = this.ownerAnimalEmail;
        this.templateparams.client_name = docSnap.data().name;
        this.templateparams.client_phone = docSnap.data().phone;
      } else {
        // doc.data() will be undefined in this case
        console.log("no va");
      }
    },
  },

};

</script>
