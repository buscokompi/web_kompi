<template>
    <TheHeader />
    <MainMain />
    <MainCategory />
    <MainAdoption />
    <MainCounter />
    <MainGuide />
    <MainList />
    <TheFooter />
</template>

<script>
import MainMain from '../components/MainMain.vue'
import MainCategory from '../components/MainCategory.vue'
import MainAdoption from '../components/MainAdoption.vue'
import MainCounter from '../components/MainCounter.vue'
import MainList from '../components/MainList.vue'
import MainGuide from '../components/MainGuide.vue'
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
    export default {
    components: { TheHeader ,MainMain, MainCategory, MainAdoption, MainCounter, MainGuide, MainList, TheFooter}
}

</script>

<style scoped>

</style>
