<script setup lang="ts">
import Header from './components/Header.vue';
import LinkCard from './components/LinkCard.vue';

const myLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jesuspallares/', icon: 'lucide:linkedin' },
  { name: 'Github', url: 'https://www.github.com/jesuspallarees/', icon: 'lucide:github' },
]
</script>

<template>
  <div class="main-container">
    <Header />
    <LinkCard v-for="link in myLinks" :key="link.name" v-bind="link" />
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}


.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
