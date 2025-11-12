import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchDepartmentsList(params: Record<string, any>) {
  return get('/dept/list', params);
}

export function delDepartment(dept_no: string | number) {
  return del(`/departments/deletion`, { dept_no });
}

export function addDepartment(params: any) {
  return post(`/departments/addition`, params);
}

export function updateDepartment(params: any) {
  return put(`/departments/update`, params);
}

export function getDepartmentDetail(dept_no: string | number) {
  return get(`/departments/detail`, { Dept_ID: dept_no });
}
