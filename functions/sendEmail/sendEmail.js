// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
/* const handler = async(event) => {

  try {
    const client = require("@sendgrid/mail");

    client.setApiKey("");

    const message = {
      to: "joseferalvarezromero@gmail.com",
      from: "buscokompi@gmail.com",
      subject: "Hola mamahuevo",
      text: "Hola mamahuevox2",
      // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    client
      .send(message)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].handler);
      })
      .catch(error => {
        console.error(error);
      });
    return {
      statusCode: 200,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler }; */

const client = require("@sendgrid/mail");

client.setApiKey("");

const message = {
  to: "joseferalvarezromero@gmail.com",
  from: "buscokompi@gmail.com",
  subject: "Hola mamahuevo",
  text: "Hola mamahuevox2",
  // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

export function sendEmail() {
  client.send(message, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("mail send");
    }
  });
}
