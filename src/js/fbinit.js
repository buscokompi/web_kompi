import { initializeApp } from "firebase/app";

// Inicializa la api de firebase
export function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDNpsioEsIzd4kywsZhLS0Mhhsqq2WfJoA",
    authDomain: "web-kompi.firebaseapp.com",
    projectId: "web-kompi",
    storageBucket: "web-kompi.appspot.com",
    messagingSenderId: "556298514839",
    appId: "1:556298514839:web:92e508e18c5685e99694d2",
    measurementId: "G-93MGP34YQN"
  };

  // Inicializa firebase
  initializeApp(firebaseConfig);
}
