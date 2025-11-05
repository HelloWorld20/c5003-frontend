import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchDepartmentList(params: Record<string, any>) {
  return get('/dept_manager/list', params);
}

export function delDepartment(Employee_ID: string | number) {
  return del(`/dept_manager/deletion`, { Employee_ID });
}

export function addDepartment(params: any) {
  return post(`/dept_manager/addition`, params);
}

export function updateDepartment(params: any) {
  return put(`/dept_manager/update`, params);
}
