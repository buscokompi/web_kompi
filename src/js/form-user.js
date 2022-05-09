const answersForm = [["no tengo preferencia", "un perro", "un gato", "un ave", "un roedor", "un reptil"],
  ["no tengo preferencia", "una hembra", "un macho"],
  ["no tengo preferencia", "cachorro", "joven", "adulta", "anciana"],
  ["no tengo preferencia", "pequeña", "mediana", "grande", "gigante"],
  ["no tengo preferencia", "muy activo", "activo", "poco activo"],
  ["un piso", "una casa", "una casa con jardín"],
  ["no tengo preferencia", "adiestrada", "sus vacunas al día", "microchip", "todas las anteriores"],
  ["dispuesto/a", "no dispuesto/a"],
  ["Es la primera vez que soy", "Actualmente soy", "Anteriormente fui"],
  ["ninguna mascota", "un perro", "un gato", "un ave", "un roedor", "otro animal doméstico", "varios de los mencionados anteriormente"],
  ["solo yo", "mi pareja", "mi pareja y mis hijos"],
  ["no tengo hijos", "menores de 10", "mayores de 10", "menores y mayores"],
  ["no hay restricciones", "hay restricciones"],
  ["de 2 a 5 horas", "de 5 a 8 horas", "de 8 a 12 horas"],
  ["tengo en mi entorno a alguien que cuide del animal", "no tengo a nadie que cuide del animal"]];

const questions = document.getElementsByClassName("question");

for (let i = 0; i < questions.length; i++) {
  let html = "";
  for (let e = 0; e < answersForm[i].length; e++) {
    console.log(answersForm[i][e]);
    html += `<option value="${answersForm[i][e]}">${answersForm[i][e]}</option>`;
    // html += `<div class="quest" data-value="${answersForm[i][e]}">${answersForm[i][e]}</div>`;
  }
  questions[i].innerHTML = html;
};

const quest = document.getElementsByClassName("quest");
const textbox = document.getElementsByClassName("textbox");
const dropdow = document.getElementsByClassName("dropdown");

for (let a = 0; a < quest.length; a++) {
  quest[a].addEventListener("click", (e) => {
    e.target.parentNode.parentNode.classList.remove("active");
    document.querySelector(".textbox").value = quest[a].getAttribute("data-value");
  });
}

for (let x = 0; x < dropdow.length; x++) {
  dropdow[x].addEventListener("click", () => {
    for (let g = 0; g < dropdow.length; g++) {
      dropdow[g].classList.remove("active");
    }
    dropdow[x].classList.add("active");
  });
};
