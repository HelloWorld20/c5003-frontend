<script setup lang="ts">
import { computed, h, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { NIcon } from 'naive-ui';
import { SimpleScrollbar } from '@sa/materials';
import { BookOutline as BookIcon } from '@vicons/ionicons5';
import { GLOBAL_SIDER_MENU_ID } from '@/constants/app';
import { useAppStore } from '@/store/modules/app';
import { useThemeStore } from '@/store/modules/theme';
import { useRouteStore } from '@/store/modules/route';
import { useRouterPush } from '@/hooks/common/router';
import { useMenu } from '../../../context';

defineOptions({
  name: 'VerticalMenu'
});

const route = useRoute();
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
const { routerPushByKeyWithMetaQuery } = useRouterPush();

const { selectedKey } = useMenu();

const inverted = computed(() => !themeStore.darkMode && themeStore.sider.inverted);

const expandedKeys = ref<string[]>([]);
function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function updateExpandedKeys() {
  if (appStore.siderCollapse || !selectedKey.value) {
    expandedKeys.value = [];
    return;
  }
  expandedKeys.value = routeStore.getSelectedMenuKeyPath(selectedKey.value);
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/home'
        },
        { default: () => 'Home' }
      ),
    key: '1',
    icon: renderIcon(BookIcon)
    // children: [
    //   {
    //     label: () => h(RouterLink, { to: '/home/home_sql' }, { default: () => 'SQL' }),
    //     key: '11'
    //   }
    // ]
  },
  {
    label: 'Charts',
    key: '3',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/charts/current-employee-per-department'
            },
            { default: () => 'Current Employee per Department' }
          ),
        key: '32'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/charts/salary-title'
            },
            { default: () => 'Salary Title' }
          ),
        key: '33'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/charts/gender-role'
            },
            { default: () => 'Gender Role' }
          ),
        key: '34'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/charts/distribution'
            },
            { default: () => 'Distribution' }
          ),
        key: '35'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/charts/headcount'
            },
            { default: () => 'Headcount' }
          ),
        key: '31'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/employees'
        },
        { default: () => 'Employees' }
      ),
    key: '2',
    icon: renderIcon(BookIcon)
  },

  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/departments'
        },
        { default: () => 'Departments' }
      ),
    key: '4',
    icon: renderIcon(BookIcon)
  }
];

watch(
  () => route.name,
  () => {
    updateExpandedKeys();
  },
  { immediate: true }
);
</script>

<template>
  <!-- :options="routeStore.menus" -->
  <Teleport :to="`#${GLOBAL_SIDER_MENU_ID}`">
    <SimpleScrollbar>
      <NMenu
        v-model:expanded-keys="expandedKeys"
        mode="vertical"
        :value="selectedKey"
        :collapsed="appStore.siderCollapse"
        :collapsed-width="themeStore.sider.collapsedWidth"
        :collapsed-icon-size="22"
        :inverted="inverted"
        :options="menuOptions"
        :indent="18"
        @update:value="routerPushByKeyWithMetaQuery"
      />
    </SimpleScrollbar>
  </Teleport>
</template>

<style scoped></style>
