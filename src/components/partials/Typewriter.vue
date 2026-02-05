<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    phrases: Array
})

const displayText = ref('');
const isDeleting = ref(false);
let phraseIndex = 0;
let charIndex = 0;

const type = () => {
    const currentPhrase = props.phrases[phraseIndex];
    const fullText = currentPhrase;

    // Deleting logic
    if (isDeleting.value) {
        displayText.value = fullText.substring(0, charIndex - 1);
        charIndex--;
    // Writing logic
    } else {
        displayText.value = fullText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting.value ? 50 : 100;

    // If not deleting, and the word is completed, reverse the logic
    if (!isDeleting.value && charIndex === fullText.length) {
        isDeleting.value = true;
        typeSpeed = 2000; 
    }
    // Opposite from above
    else if (isDeleting.value && charIndex === 0) {
        isDeleting.value = false;
        phraseIndex = (phraseIndex + 1) % props.phrases.length; 
        typeSpeed = 500; 
    }

    setTimeout(type, typeSpeed);
}

onMounted(() => {
    if (props.phrases && props.phrases.length > 0) {
        type();
    }
})
</script>

<template>
    <h1 class="typewriter">{{ displayText }} <span class="cursor">|</span></h1>
</template>

<style scoped>
    .typewriter {
        font-size: 1.5rem;
    }

    .cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        50% {opacity: 0;}
    }
</style>