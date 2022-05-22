<script>
export default {
    name: 'SelectForm',
    components: {},
    props: { label1: String, label2: String, formOptions: Array }
}
</script>

<template>
    <p>{{ label1 }} <select name="" class="question">
            <option :value="option" v-for="option in formOptions">{{ option }}</option>
        </select>{{ label2 }}</p>
</template>


<style>
</style>