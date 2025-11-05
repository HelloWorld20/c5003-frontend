<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// import { SimpleScrollbar } from '@sa/materials';
import { useBoolean } from '@sa/hooks';
import { GLOBAL_SIDER_MENU_ID } from '@/constants/app';
import { useAppStore } from '@/store/modules/app';
import { useThemeStore } from '@/store/modules/theme';
import { useRouteStore } from '@/store/modules/route';
import { useRouterPush } from '@/hooks/common/router';
import { $t } from '@/locales';
import { useMenu, useMixMenuContext } from '../../../context';
import FirstLevelMenu from '../components/first-level-menu.vue';
import GlobalLogo from '../../global-logo/index.vue';

defineOptions({
  name: 'VerticalMixMenu'
});

const route = useRoute();
const appStore = useAppStore();
const themeStore = useThemeStore();
const routeStore = useRouteStore();
const { routerPushByKeyWithMetaQuery } = useRouterPush();
const { bool: drawerVisible, setBool: setDrawerVisible } = useBoolean();
const {
  allMenus,
  childLevelMenus,
  activeFirstLevelMenuKey,
  setActiveFirstLevelMenuKey,
  getActiveFirstLevelMenuKey
  //
} = useMixMenuContext();
const { selectedKey } = useMenu();

const inverted = computed(() => !themeStore.darkMode && themeStore.sider.inverted);

const hasChildMenus = computed(() => childLevelMenus.value.length > 0);

const showDrawer = computed(() => hasChildMenus.value && (drawerVisible.value || appStore.mixSiderFixed));

function handleSelectMixMenu(menu: App.Global.Menu) {
  setActiveFirstLevelMenuKey(menu.key);

  if (menu.children?.length) {
    setDrawerVisible(true);
  } else {
    routerPushByKeyWithMetaQuery(menu.routeKey);
  }
}

function handleResetActiveMenu() {
  setDrawerVisible(false);

  if (!appStore.mixSiderFixed) {
    getActiveFirstLevelMenuKey();
  }
}

const expandedKeys = ref<string[]>([]);

function updateExpandedKeys() {
  if (appStore.siderCollapse || !selectedKey.value) {
    expandedKeys.value = [];
    return;
  }
  expandedKeys.value = routeStore.getSelectedMenuKeyPath(selectedKey.value);
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing'
    // icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    // icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    // icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    // icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
            // icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man'
            // icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        // icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
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
  <Teleport :to="`#${GLOBAL_SIDER_MENU_ID}`">
    <div class="h-full flex" @mouseleave="handleResetActiveMenu">
      <FirstLevelMenu
        :menus="allMenus"
        :active-menu-key="activeFirstLevelMenuKey"
        :inverted="inverted"
        :sider-collapse="appStore.siderCollapse"
        :dark-mode="themeStore.darkMode"
        :theme-color="themeStore.themeColor"
        @select="handleSelectMixMenu"
        @toggle-sider-collapse="appStore.toggleSiderCollapse"
      >
        <GlobalLogo :show-title="false" :style="{ height: themeStore.header.height + 'px' }" />
      </FirstLevelMenu>
      <div
        class="relative h-full transition-width-300"
        :style="{ width: appStore.mixSiderFixed && hasChildMenus ? themeStore.sider.mixChildMenuWidth + 'px' : '0px' }"
      >
        <DarkModeContainer
          class="absolute-lt h-full flex-col-stretch nowrap-hidden shadow-sm transition-all-300"
          :inverted="inverted"
          :style="{ width: showDrawer ? themeStore.sider.mixChildMenuWidth + 'px' : '0px' }"
        >
          <header class="flex-y-center justify-between px-12px" :style="{ height: themeStore.header.height + 'px' }">
            <h2 class="text-16px text-primary font-bold">{{ $t('system.title') }}</h2>
            <PinToggler
              :pin="appStore.mixSiderFixed"
              :class="{ 'text-white:88 !hover:text-white': inverted }"
              @click="appStore.toggleMixSiderFixed"
            />
          </header>
          <!-- <SimpleScrollbar> -->
          <NMenu
            v-model:expanded-keys="expandedKeys"
            mode="vertical"
            :value="selectedKey"
            :options="menuOptions"
            :inverted="inverted"
            :indent="18"
            @update:value="routerPushByKeyWithMetaQuery"
          />
          <!-- </SimpleScrollbar> -->
        </DarkModeContainer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
