<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/locales';

defineOptions({ name: 'GenderRole' });

const loading = ref(true);

const handleLoad = () => {
  loading.value = false;
};
</script>

<template>
  <NSpace vertical :size="16">
    <div v-if="loading">{{ $t('common.loading') || 'Data is coming, please wait...' }}</div>
    <NImage src="http://127.0.0.1:8000/chart_3" alt="home" @load="handleLoad" />
  </NSpace>
</template>

<style scoped></style>
