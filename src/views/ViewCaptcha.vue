<template>
  <div>
    <TheCaptcha />
  </div>
</template>

<script>
import TheCaptcha from '../components/TheCaptcha.vue'
export default {
  components: {
    TheCaptcha,
  }

}
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
