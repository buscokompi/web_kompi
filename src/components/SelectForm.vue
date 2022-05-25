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
        </select> {{ label2 }} </p>
</template>


<style>
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

.question:hover,
option:hover {
    background: var(--orange);
    color: var(--black);
    outline: none;
    cursor: pointer;
}
</style>