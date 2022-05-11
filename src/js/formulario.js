const arraySections = document.querySelectorAll(".sections p");
const arrayLines = document.querySelectorAll(".sections hr");
const profileContent = document.querySelector(".profile-content");

function chargeForm() {
  profileContent.innerHTML = /* html */`
      <form class="formulario">
        <div class="name">
          <h3>Nombre *</h3>
          <input type="text">
        </div>
        <div class="species">
          <h3>Especie *</h3>
          <input type="text">
        </div>
        <div class="age">
          <h3>Edad *</h3>
          <input type="number">
        </div>
        <div class="breed">
          <h3>Raza *</h3>
          <input type="text">
        </div>
        <div class="gender">
          <h3>Sexo *</h3>
          <input type="text">
        </div>
        <div class="size">
          <h3>Tamaño *</h3>
          <input type="number">
        </div>
        <div class="weight">
          <h3>Peso *</h3>
          <input type="number">
        </div>
        <div class="color">
          <h3>Color *</h3>
          <input type="text">
        </div>
        <div class="hair">
          <h3>Pelo *</h3>
          <input type="text">
        </div>
        <div class="microchip">
          <h3>Microchip *</h3>
          <input type="text">
        </div>
        <div class="vaccination">
          <h3>Vacunación * *</h3>
          <input type="text">
        </div>
        <div class="sterilized">
          <h3>Esterilizado *</h3>
          <input type="text">
        </div>
        <div class="danger-certificate">
          <h3>Certificado ppp *</h3>
          <input type="text">
        </div>
        <div class="description">
          <h3>Decripción</h3>
          <input type="text">
        </div>
        <div class="images">
          <h3>Fotografías</h3>
          <input type="text">
        </div>
    </form>
    `;
}

function aboutMe() {
  profileContent.innerHTML = /* html */`

    `;
}

function adopterProfile() {
  profileContent.innerHTML = /* html */`
    
    `;
}

function animalProfile() {
  profileContent.innerHTML = /* html */`
    <p>Para poner en adopción a un animal, pulsa el botón 'Añadir animal' y completa el formulario</p>

    <div class="new-animal-link">
        <a href="#">Añadir animal</a>
    </div>
    `;

  const newAnimal = document.querySelector(".new-animal-link");
  newAnimal.addEventListener("click", () => chargeForm());
}

function favorites() {
  profileContent.innerHTML = /* html */`
    
    `;
}

function settings() {
  profileContent.innerHTML = /* html */`
    
    `;
}
function chargeSection(index) {
  arrayLines.forEach(element => {
    element.classList.remove("selected");
  });
  arrayLines[index].classList.add("selected");

  switch (index) {
    case 0:
      aboutMe();
      break;
    case 1:
      adopterProfile();
      break;
    case 2:
      animalProfile();
      break;
    case 3:
      favorites();
      break;
    case 4:
      settings();
      break;
  }
}

arraySections.forEach((element, index) => {
  element.addEventListener("click", () => chargeSection(index));
});
