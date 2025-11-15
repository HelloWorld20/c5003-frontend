<script setup lang="ts">
import { computed, h, ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
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
const manuallyExpandedKeys = ref<Set<string>>(new Set());

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function updateExpandedKeys() {
  if (appStore.siderCollapse || !selectedKey.value) {
    expandedKeys.value = [];
    return;
  }

  const keyPath = routeStore.getSelectedMenuKeyPath(selectedKey.value);

  // 合并自动展开的路径和手动展开的菜单
  const allExpandedKeys = new Set([...keyPath, ...manuallyExpandedKeys.value]);
  expandedKeys.value = Array.from(allExpandedKeys);
}

function handleMenuExpand(keys: string[]) {
  manuallyExpandedKeys.value = new Set(keys);
  expandedKeys.value = keys;
}

const router = useRouter();

function handleMenuItemClick(key: any) {
  // Handle Home menu item specially - navigate directly to /home
  if (key === 'home') {
    router.push('/home');
    return;
  }

  routerPushByKeyWithMetaQuery(key);

  // 点击子菜单项时，保持父菜单的展开状态
  const parentKey = findParentKey(key);
  if (parentKey) {
    manuallyExpandedKeys.value.add(parentKey);
    updateExpandedKeys();
  }
}

const menuOptions = [
  {
    label: 'Home',
    key: 'home',
    icon: renderIcon(BookIcon)
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
            { default: () => 'Employee Number' }
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
            { default: () => 'Salary by Title' }
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
            { default: () => 'Gender Diversity' }
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
            { default: () => 'Tenure Distribution' }
          ),
        key: '35'
      }
      // {
      //   label: () =>
      //     h(
      //       RouterLink,
      //       {
      //         to: '/charts/headcount'
      //       },
      //       { default: () => 'Headcount' }
      //     ),
      //   key: '31'
      // }
    ]
  },
  {
    label: 'Employees',
    key: '2',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/employees'
            },
            { default: () => 'Current Employees' }
          ),
        key: '21'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/employees/history'
            },
            { default: () => 'Employee History' }
          ),
        key: '22'
      }
    ]
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
  },
  {
    label: 'Departments Manager',
    key: '5',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/departments-manager'
            },
            { default: () => 'Current Managers' }
          ),
        key: '51'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/departments-manager/history'
            },
            { default: () => 'Manager History' }
          ),
        key: '52'
      }
    ]
  }
];

function findParentKey(childKey: string): string | null {
  for (const option of menuOptions) {
    if (option.children) {
      const child = option.children.find(c => c.key === childKey);
      if (child) {
        return option.key;
      }
    }
  }
  return null;
}

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
        @update:expanded-keys="handleMenuExpand"
        @update:value="handleMenuItemClick"
      />
    </SimpleScrollbar>
  </Teleport>
</template>

<style scoped>
/* Hide expand/collapse arrow icons for all menu items */
:deep(.n-submenu-icon),
:deep(.n-menu-item .n-submenu-icon) {
  display: none !important;
}

/* Ensure menu items without children don't show expand icons */
:deep(.n-menu-item:not(.n-submenu) .n-menu-item-content__icon),
:deep(.n-menu-item:not(.n-submenu) .n-submenu-icon) {
  display: none !important;
}

/* Hide any empty or default icons that might appear as hamburger bars */
:deep(.n-menu-item-content__icon:empty) {
  display: none !important;
}
</style>
