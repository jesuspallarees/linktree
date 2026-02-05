<template>
  <div class="gradient-bg">
    <div class="gradients-container">
      <div class="g1"></div>
      <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
    </div>
  </div>
</template>

<style scoped>
.gradient-bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  background: #ffffff; 
  top: 0;   
  left: 0;
  z-index: -1;
}

.gradients-container {
  filter: blur(80px); 
  width: 100%;
  height: 100%;
}

.g1, .g2, .g3, .g4 {
  position: absolute;
  width: 80%;
  height: 80%;
  opacity: 0.6;
}

.g1 {
  background: radial-gradient(circle at center, rgba(100, 180, 255, 0.5) 0, rgba(100, 180, 255, 0) 50%) no-repeat;
  top: -10%;
  left: -10%;
  animation: moveVertical 30s ease infinite;
}
    
.g2 {
  background: radial-gradient(circle at center, rgba(66, 184, 131, 0.4) 0, rgba(66, 184, 131, 0) 50%) no-repeat;
  bottom: -10%;
  right: -10%;
  animation: moveInCircle 20s reverse infinite;
}

.g3 {
  background: radial-gradient(circle at center, rgba(200, 150, 255, 0.3) 0, rgba(200, 150, 255, 0) 50%) no-repeat;
  top: 40%;
  left: 30%;
  animation: moveInCircle 40s linear infinite;
}

.g4 {
  background: radial-gradient(circle at center, rgba(57, 118, 175, 0.5) 0, rgba(100, 180, 255, 0) 50%) no-repeat;
  top: -10%;
  left: -10%;
  animation: moveVertical 30s ease infinite;
}

@keyframes moveVertical {
  0% { transform: translateY(-10%); }
  50% { transform: translateY(10%); }
  100% { transform: translateY(-10%); }
}

@keyframes moveInCircle {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>