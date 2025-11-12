import { get } from '@/utils/my-service';

/**
 * 获取人力变动数据（New hires、Departures、Net change、Turnover rate）
 *
 * @param params 查询参数，包含 `start_year` 与 `end_year`
 * @returns 后端返回的数据对象，含 `summary` 与逐年 `data` 数组
 */
export function fetchHeadcountChanges(params: { start_year?: number; end_year?: number }) {
  return get('/headcount/changes', params);
}