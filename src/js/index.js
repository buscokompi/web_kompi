// // Burger menu for mobile

import { getAuth } from "firebase/auth";
import { initFirebase } from "./fbinit.js";

initFirebase();

const auth = getAuth();

const content2 = document.querySelector(".display");
const profile2 = document.querySelector(".login");
const profileName = document.querySelector(".profile-name");

const user = auth.currentUser;
console.log(user);
if (user) {
  content2.style.display = "grid";
  profile2.style.display = "none";
  profileName.textContent = user.email;
} else {
  content2.style.display = "none";
  profile2.style.display = "flex";
  console.log(user);
}

/* window.onload = function() {
  const user = auth.currentUser;
  console.log(user);
  if (user) {
    content2.style.display = "none";
    profile2.style.display = "block";
    console.log(user);
  } else {
    content2.style.display = "block";
    profile2.style.display = "none";
    console.log(user);
  }
}; */

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
