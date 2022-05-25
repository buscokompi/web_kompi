<template>
  <section class="counter">

    <div class="unit">
      <p class="number">811</p>
      <p>adoptadas</p>
    </div>
    <div class="unit">
      <p class="number">319</p>
      <p>en adopción</p>
    </div>
    <div class="unit">
      <p class="number">7</p>
      <p>colaboradoras</p>
    </div>

  </section>


</template>

<script>
    export default {
  components: { },

    }
</script>

<style scoped>

.counter {
  width: 100%;
  height: 30vh;
  border-top: 0.15rem solid var(--grey);
  border-bottom: 0.15rem solid var(--grey);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.unit {
  width: 7rem;
  height: fit-content;
  margin: 1rem;
}

.number {
  font-size: 2rem;
  font-weight: 600;
  color: var(--green);
}

@media screen and (min-width: 767px) {
.counter {
    gap: 5rem;
  }

  .number {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }

}

@media screen and (min-width: 1170px) {


}

@media screen and (min-width: 1300px) {
.counter {
    gap: 10rem;
  }
}

</style>
