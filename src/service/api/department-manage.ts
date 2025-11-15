import { del, get, post, put } from '@/utils/my-service';

/** get current department managers (only managers with MAX(to_date) = '9999-01-01') */
export function fetchDepartmentList(params: Record<string, any>) {
  return get('/dept_manager/list', params);
}

/** get all department managers (including historical records) */
export function fetchDepartmentListAll(params: Record<string, any>) {
  return get('/dept_manager/list/all', params);
}

export function delDepartment(params: { emp_no: string | number; dept_no: string }) {
  return del(`/dept_manager/deletion`, params);
}

export function addDepartment(params: any) {
  return post(`/dept_manager/addition`, params);
}

export function updateDepartment(params: any) {
  return put(`/dept_manager/update`, params);
}
