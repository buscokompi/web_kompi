<template>
  <div>
    <pruebacapcha></pruebacapcha>
  </div>
</template>

<script>
import pruebacapcha from '../components/pruebacapcha.vue';
export default {
  components: {
    pruebacapcha,
  }

}
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
}
</style>
