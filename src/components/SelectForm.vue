<script>
export default {
    name: 'SelectForm',
    components: {},
    props: { label1: String, label2: String, formOptions: Array }
}
</script>

<template>
    <p>{{ label1 }} <v-select v-model="formOptions[0]" name="" class="question" :options='formOptions'
            :clearable="false">
        </v-select> {{ label2 }} </p>
</template>


<style scoped>
.question {
    width: fit-content;
    font-size: 1rem;
    font-weight: 700;
    font-family: var(--text-font);
    color: var(--green);
    background-color: none;
    border: 0px;
    border-radius: 0.7rem;
    padding: 0.7rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

}

option {
    font-weight: 600;

}
</style>