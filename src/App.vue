<script setup lang="ts">
import { Linkedin, Github } from 'lucide-vue-next';
import Hero from './components/Hero.vue';
import LinkCard from './components/LinkCard.vue';

const myLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jesuspallares/',
        icon: Linkedin
    },
    {
        name: 'Github',
        url: 'https://www.github.com/jesuspallarees/',
        icon: Github
    },
]
</script>

<template>
    <div class="main-container">
        <Hero />
        <LinkCard v-for="link in myLinks" :key="link.name" v-bind="link" />
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    transition: background-color 0.5s ease;
}

:global(html.dark) .main-container {
    background-color: #000000;
}
</style>