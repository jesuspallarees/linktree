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
        <img id="avatar" src="../assets/mi-foto-original.jpeg" alt="my avatar" data-aos="fade-down" data-aos-duration="1000">
        <div data-aos="fade-down" data-aos-duration="1000">
            <Typewriter :phrases="myPhrases" />
            <p>Software developer based on Huelva, Spain</p>
        </div>
    </section>
</template>

<style scoped>
.hero {
    color: #1d1d1f;
    text-align: center;
    padding: 3rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;

    border: 4px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.hero div {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

p {
    font-size: 1.1rem;
    font-weight: 400;
    color: #86868b;
    letter-spacing: -0.01em;
}

:deep(.typewriter) {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0;
}
</style>