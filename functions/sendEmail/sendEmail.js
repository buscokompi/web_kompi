// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async(event) => {
  try {
    const client = require("@sendgrid/mail");

    client.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      to: "joseferalvarezromero@gmail.com",
      from: "buscokompi@gmail.com",
      subject: "Hola mamahuevo",
      text: "Hola mamahuevox2",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    client
      .send(message)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].handler);
        console.log("Esta funcionando");
      })
      .catch(error => {
        console.error(error);
        console.log("no esta funcionando");
      });
    return {
      statusCode: 200,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

/* const client = require("@sendgrid/mail");

client.setApiKey("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");

const message = {
  to: "joseferalvarezromero@gmail.com",
  from: "buscokompi@gmail.com",
  subject: "Hola mamahuevo",
  text: "Hola mamahuevox2",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

client.send(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("mail send");
  }
}); */
