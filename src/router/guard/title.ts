import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';

export function createDocumentTitleGuard(router: Router) {
  router.afterEach(to => {
    const appStore = useAppStore();
    // Use locale-specific title: English or Chinese
    const documentTitle = appStore.locale === 'zh-CN' ? '人力資源系統' : 'HR Management System';
    useTitle(documentTitle);
  });
}
