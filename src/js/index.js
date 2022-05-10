
// Burger menu for mobile

const click = document.querySelectorAll(".burger-img");
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
