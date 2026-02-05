<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({ 
  icon: { type: String, default: 'lucide:link' }, 
  name: { type: String, default: 'Enlace' }, 
  url: { type: String, default: '#' } 
})
</script>

<template>
  <div class="card" data-aos="fade-up" data-aos-duration="1000">
    <a :href="url" class="link-card" target="_blank">
      <div class="icon-link-card">
        <Icon :icon="icon" :ssr="true" width="22" height="22" class="shiny-effect" />
      </div>
      
      <div class="text-link-card">
        <h4 class="shiny-effect">{{ name }}</h4>
      </div>

      <div class="spacer"></div>
    </a>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
}

.link-card {
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  width: 320px; 
  padding: 14px 20px;
  text-decoration: none;
  color: #1d1d1f; 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-link-card {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.text-link-card {
  display: flex;
  justify-content: center;
}

.text-link-card h4 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: inherit; 
}

.spacer {
  width: 40px;
}

.shiny-effect {
  background: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  -webkit-text-fill-color: initial;
  display: inline-block;
}

.link-card:hover .shiny-effect {
  background: linear-gradient(
    to right, 
    currentColor 0%, 
    currentColor 40%, 
    rgba(255, 255, 255, 0.9) 50%, 
    currentColor 60%, 
    currentColor 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 1.2s linear forwards;
}

@keyframes shine {
  0% {
    background-position: 120% center;
  }
  100% {
    background-position: -120% center;
  }
}

.link-card:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: translateY(-5px) scale(1.05);
  color: #0071e3; 
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.link-card:hover .icon-link-card {
  transform: scale(1.15);
}

@media (max-width: 360px) {
  .link-card {
    width: 90vw;
  }
}
</style>