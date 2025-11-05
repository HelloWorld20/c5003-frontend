<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'HomE' });

const loading = ref(true);

const handleLoad = () => {
  loading.value = false;
};
</script>

<template>
  <NSpace vertical :size="16">
    <div v-if="loading">Data is comming, please wait...</div>
    <NImage src="http://127.0.0.1:8000/home_vizs" alt="home" @load="handleLoad" />
  </NSpace>
</template>

<style scoped></style>
