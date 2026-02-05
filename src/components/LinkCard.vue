<script setup lang="ts">
interface Props {
  name: string;
  url: string;
  icon: any; 
}

defineProps<Props>();
</script>

<template>
  <div class="card" data-aos="fade-up" data-aos-duration="1000">
    <a :href="url" class="link-card" target="_blank">
      <div class="icon-link-card">
        <component :is="icon" :size="22" :stroke-width="2" />
      </div>

      <div class="text-link-card">
        <div class="text-wrapper">
          <h4>{{ name }}</h4>
          <div class="underline"></div>
        </div>
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
  position: relative; 
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

.text-wrapper {
  position: relative;
  display: inline-block;
}

.text-link-card h4 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: inherit;
  padding-bottom: 2px;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #0071e3;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.link-card:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: translateY(-5px) scale(1.02);
  color: #0071e3;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.link-card:hover .underline {
  transform: scaleX(1);
  transform-origin: left;
}

.link-card:hover .icon-link-card {
  transform: scale(1.1);
}

.spacer {
  width: 40px;
}

@media (max-width: 360px) {
  .link-card {
    width: 90vw;
  }
}
</style>