<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth';
import { $t } from '@/locales';

defineOptions({
  name: 'LogoutButton'
});

const authStore = useAuthStore();

function handleLogout() {
  window.$dialog?.info({
    title: $t('common.tip'),
    content: $t('common.logoutConfirm'),
    positiveText: $t('common.confirm'),
    negativeText: $t('common.cancel'),
    onPositiveClick: () => {
      authStore.resetStore();
    }
  });
}
</script>

<template>
  <ButtonIcon
    icon="ph:sign-out"
    :tooltip-content="$t('common.logout')"
    @click="handleLogout"
  />
</template>

<style scoped></style>

