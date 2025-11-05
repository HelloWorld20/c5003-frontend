import type { RouteRecordRaw } from 'vue-router';
import { routes } from '../elegant/routes';

/**
 * custom routes
 */
const customRoutes: RouteRecordRaw[] = [];

/** create routes when the auth route mode is static */
export function createStaticRoutes() {
  const constantRoutes: RouteRecordRaw[] = [];
  const authRoutes: RouteRecordRaw[] = [];

  [...customRoutes, ...routes].forEach(item => {
    if (item.meta?.constant) {
      constantRoutes.push(item);
    } else {
      authRoutes.push(item);
    }
  });

  return {
    constantRoutes,
    authRoutes
  };
}

/**
 * Get auth vue routes
 *
 * @param authRoutes Auth routes
 */
export function getAuthVueRoutes(authRoutes: RouteRecordRaw[]) {
  return authRoutes;
}
