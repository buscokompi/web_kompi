<template>
  <section v-if="desktop" class=" category">

    <div class="icon">
      <div class="shadow">
        <a href='./filter-animals.html?category="Perro"'> <img src="../assets/icons/icono_perro.svg" alt="perros"></a>
      </div>
      <div class="shadow">
        <a href='./filter-animals.html?category="Gato"'><img src="../assets/icons/icono_gato.svg" alt="gatos"></a>
      </div>
      <div class="shadow">
        <a href='./filter-animals.html?category="Ave"'> <img src="../assets/icons/icono_pajaro.svg" alt="pajaros"></a>
      </div>
      <div class="shadow">
        <a href='./filter-animals.html?category="Roedor"'> <img src="../assets/icons/icono_roedor.svg"
            alt="roedores"></a>
      </div>
      <div class="shadow">
        <a href='./filter-animals.html?category="Reptil"'><img src="../assets/icons/icono_reptil.svg"
            alt="reptiles"></a>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      desktop: false,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 1170) {
        this.desktop = true;
        this.mobileNav = false;
        return;
      }
      this.desktop = false;
      this.mobileNav = false;
      return;
    }
  }

}
</script>

<style scoped>
.category {
  width: 100%;
  height: 20vh;
  background: var(--orange);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.category .icon {
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-auto-flow: column;
  gap: 4rem;
}

.shadow {
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.3rem solid var(--yellow);
  background: var(--white);
  width: 4.5rem;
  height: 4.5rem;
}

.category .icon img {
  width: 2.6rem;
  height: 3.3rem;
}


@media screen and (min-width: 1300px) {
  .category .icon .shadow {
    width: 7rem;
    height: 7rem;
  }

  .category .icon img {
    width: 3.2rem;
    height: 4.5;
  }
}
</style>
