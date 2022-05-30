<template>
  <div>
    <button></button>
  </div>
</template>

<script>
import { SMTPClient } from "emailjs"

export default {
  data() {
    return {
      client: new SMTPClient({
        user: "buscokompi@gmail.com",
        password: "FeitHul9Shrot@",
        host: "smtp.buscokompi@gmail.com",
        ssl: true
      }),

      templateParams: "",
      serviceID: "default_service",
      templateID: "service_wk4o34r",
    }
  },
  methods: {
    sendEmail() {
      this.client.send({
        text: "funciona porfa",
        from: "you <buscokompi@gmail.com>",
        to: "someone <joseferalvarezromero@gmail.com>",
        subject: "Hola"
      }, (err, message) => {
        console.log(err || message);
      })
    }
  }
}
</script>

<style scoped>
</style>
