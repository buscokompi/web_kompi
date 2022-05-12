// // Burger menu for mobile
import { getFirestore, collection, getDocs, setDoc, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initFirebase } from "./fbinit.js";

const firebaseapp = initFirebase();

const fs = getFirestore();

const auth = getAuth();

const content2 = document.querySelector(".display");
const profile2 = document.querySelector(".login");
const profileName = document.querySelector(".profile-name");

auth.onAuthStateChanged(function(user) {
  if (user) {
    content2.style.display = "grid";
    profile2.style.display = "none";
    getUserName(user.email);
  } else {
    content2.style.display = "none";
    profile2.style.display = "flex";
  }
});

const click = document.querySelectorAll(".burger-img", ".display");
click.forEach(element => {
  element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const burger = document.querySelector(".burger");
  const burgerImg = document.querySelector(".burger-img");

  burger.classList.toggle("active");
  burgerImg.classList.toggle("active");
}

// Profile menu for mobile

const profile = document.querySelectorAll(".display");
profile.forEach(element => {
  element.addEventListener("click", displayMenu);
});

function displayMenu() {
  const display = document.querySelector(".display");
  display.classList.toggle("active");
}

// Questions display

const question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");

    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

/* function comprobarUser() {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.email);
    } else {
      console.log("el usuario no esta logueado");
    }
  });
} */

async function getUserName(userEmail) {
  const userRef = collection(fs, "usuarios");
  const q = query(userRef, where("id", "==", userEmail));
  let user = "";

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    user = doc.data().name + " " + doc.data().surname;
  });

  console.log(user);

  profileName.textContent = user;
}
