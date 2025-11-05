import type { RouteRecordRaw } from 'vue-router';

/**
 * Get route name from route path
 * @param routePath Route path
 */
export function getRouteName(routePath: string): string {
  return routePath.replace(/^\//, '').replace(/\//g, '_') || 'root';
}

/**
 * Get route path from route key
 * @param routeKey Route key
 */
export function getRoutePath(routeKey: string): string {
  return `/${routeKey.replace(/_/g, '/')}`;
}

/**
 * Transform elegant routes to vue routes (simplified)
 * @param routes Routes
 */
export function transformElegantRoutesToVueRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes;
}
