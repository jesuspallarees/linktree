<script setup>
import { FileText } from 'lucide-vue-next';
</script>

<template>
  <nav class="navbar" data-aos="fade-down" data-aos-duration="1000">
    <div class="nav-content">
      <span class="logo">Jesús Pallarés</span>

      <div class="nav-actions">
        <a href="./curriculum.pdf" target="_blank" class="cv-button">
          <span>CV</span>
          <FileText :size="15" />
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: 'JetBrains Mono', monospace;
  color: #1d1d1f;
  letter-spacing: -0.5px;
  font-size: 1rem;
}

.cv-button {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: black;
  padding: 6px 8px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 800;
  transition: all 0.3s ease;
  border: none;
}

.cv-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent);
  transition: none;
}

.cv-button:hover {
  color: #ffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 113, 227, 0.6);
  background: #0077ed;
}

.cv-button:hover::after {
  left: 100%;
  transition: all 0.6s ease;
}

.cv-button:active {
  transform: translateY(0);
}

@media (max-width: 480px) {
  .cv-button span {
    display: none;
  }

  .cv-button {
    padding: 8px 12px;
  }
}
</style>