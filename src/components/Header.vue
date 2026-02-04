<script setup>
import Typewriter from './partials/Typewriter.vue';

const myPhrases = [
    "Hola, soy J.Pallarés",
    "Hi, I'm J.Pallarés",
    "Ciao, sono J.Pallarés",
    "Salut, je suis J.Pallarés",
    "Hallo, ich bin J.Pallarés",
]
</script>

<template>
    <header>
        <Typewriter :phrases="myPhrases" />
        <p>Based on Huelva, Spain</p>
    </header>
</template>

<style scoped>
    header {
        text-align: center;
    }
</style>