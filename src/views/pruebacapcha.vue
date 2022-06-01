<template>

  <div>

    <vue-recaptcha ref="recaptcha" @verify="onVerify" sitekey="6Ld5mTcgAAAAAERozGsnUwLpBMQ3yFkCFY_7eR3X">

    </vue-recaptcha>
    <button @click="sendEmail()">hola</button>

  </div>

</template>



<script>

import { VueRecaptcha } from "vue-recaptcha";
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      verifyKey: "",

      templateparams: {
        user_email: "joseferalvarezromero@gmail.com",
        client_email: "jrm3301@gmail.com",
        "g-recaptcha-response": ""
      }
    }
  },

  components: { VueRecaptcha },

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
  },

};

</script>
