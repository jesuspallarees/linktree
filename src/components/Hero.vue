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
    <section class="hero">
        <img id="avatar" src="../assets/mi-foto-original.jpeg" alt="">
        <Typewriter :phrases="myPhrases" />
        <p>Based on Huelva, Spain</p>
    </section>
</template>

<style scoped>
    .hero {
        text-align: center;
    }

    #avatar {
        width: 200px;
        border-radius: 100%;
    }
</style>