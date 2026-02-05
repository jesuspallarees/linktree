<script setup>
import { FileText } from 'lucide-vue-next';
</script>

<template>
  <nav class="navbar" data-aos="fade-down" data-aos-duration="1000">
    <div class="nav-content">
      <router-link to="/" class="logo">
        <span>Jesús Pallarés</span>
        <div class="underline"></div>
      </router-link>

      <div class="nav-actions">
        <router-link to="/projects" class="nav-link">
          <span>Projects</span>
          <div class="underline"></div>
        </router-link>

        <a href="./curriculum.pdf" target="_blank" class="cv-button">
          <div class="cv-content">
            <span>CV</span>
            <FileText :size="15" />
          </div>
          <div class="underline"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
}

.logo {
  font-weight: 600;
  position: relative;
  font-family: 'JetBrains Mono', monospace;
  color: #1d1d1f;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-link,
.cv-button {
  position: relative;
  text-decoration: none;
  color: #1d1d1f;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
}

.cv-content {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
}

.underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #0071e3;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.logo:hover .underline,
.nav-link:hover .underline,
.cv-button:hover .underline {
  transform: scaleX(1);
  transform-origin: left;
}

.logo:hover,
.nav-link:hover,
.cv-button:hover {
  transition: color 0.3s ease;
  background-color: transparent;
}

.cv-button:hover .cv-content {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

@media (max-width: 480px) {
  .cv-content span {
    display: none;
  }

  .nav-actions {
    gap: 15px;
  }
}
</style>