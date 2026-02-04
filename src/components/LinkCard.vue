<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({icon: String, name: String, url: String})
</script>

<template>
    <div class="card">
        <a :href="url" class="link-card">
            <Icon :icon="icon" :ssr="true"/>
            <span>{{ name }}</span>
        </a>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    min-width: 300px;
}

.link-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    padding: 15px 20px;
    border: 1px solid black;
    border-radius: 8px;
    width: 100%;
}
</style>