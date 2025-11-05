import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchDepartmentsList(params: Record<string, any>) {
  return get('/dept/list', params);
}

export function delDepartment(dept_no: string | number) {
  return del(`/dept/${dept_no}`);
}

export function addDepartment(params: any) {
  return post(`/dept`, params);
}

export function updateDepartment(params: any) {
  return put(`/dept/update`, params);
}
