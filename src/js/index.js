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

// Header transparent to white when scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".topbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Burger menu for mobile

const click = document.querySelectorAll(".menuClick");
click.forEach(element => {
  element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const burger = document.querySelector(".burger");
  const logo = document.querySelector(".logo");

  menuToggle.classList.toggle("active");
  burger.classList.toggle("active");
  logo.classList.toggle("active");
}
