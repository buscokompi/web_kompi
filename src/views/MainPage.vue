<template>
    <TheHeader />
    <MainMain />
    <MainCategory />
    <MainAdoption />
    <MainCounter />
    <MainGuide />
    <MainList />
    <AlertError />
    <TheFooter />
</template>

<script>
import MainMain from '../components/MainMain.vue'
import MainCategory from '../components/MainCategory.vue'
import MainAdoption from '../components/MainAdoption.vue'
import MainCounter from '../components/MainCounter.vue'
import MainGuide from '../components/MainGuide.vue'
import MainList from '../components/MainList.vue'
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
import AlertError from '../components/AlertError.vue'
export default {
    components: { TheHeader, MainMain, MainCategory, MainAdoption, MainCounter, MainGuide, MainList, TheFooter, AlertError }
}

</script>

<style scoped>
</style>
