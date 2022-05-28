<script>
export default {
    name: 'SelectForm',
    components: {},
    props: { label1: String, formOptions: Array }
}
</script>

<template>
    <p>{{ label1 }} <v-select class="question" :options='formOptions' :clearable="false"></v-select>
    </p>
</template>


<style scoped>
.question {
    width: fit-content;
}

.question ::placeholder {
    font-family: var(--text-font);
    font-weight: 500;
    color: var(--green);
}
</style>
