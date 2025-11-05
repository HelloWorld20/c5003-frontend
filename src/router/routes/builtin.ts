import type { RouteRecordRaw } from 'vue-router';
import { routes } from '../elegant/routes';

export const ROOT_ROUTE: RouteRecordRaw = {
  name: 'root',
  path: '/',
  redirect: import.meta.env.VITE_ROUTE_HOME || '/home',
  meta: {
    title: 'root',
    constant: true
  }
};

const NOT_FOUND_ROUTE: RouteRecordRaw = {
  name: 'not-found',
  path: '/:pathMatch(.*)*',
  component: () => import('@/layouts/blank-layout/index.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/_builtin/404/index.vue')
    }
  ],
  meta: {
    title: 'not-found',
    constant: true
  }
};

/** builtin routes, it must be constant and setup in vue-router */
const builtinRoutes: RouteRecordRaw[] = [ROOT_ROUTE, NOT_FOUND_ROUTE, ...routes];

/** create builtin vue routes */
export function createBuiltinVueRoutes() {
  return builtinRoutes;
}
