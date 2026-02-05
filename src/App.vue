<script setup lang="ts">
import Background from './components/Background.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import LinkCard from './components/LinkCard.vue';

const myLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jesuspallares/', icon: 'lucide:linkedin' },
  { name: 'Github', url: 'https://www.github.com/jesuspallarees/', icon: 'lucide:github' },
]
</script>

<template>
  <Header/>
  <Background/>
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