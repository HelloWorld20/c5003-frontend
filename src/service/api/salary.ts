import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchSalaryList(params: Record<string, any>) {
  return get('/salary/list', params);
}

export function delSalary(Employee_ID: string | number) {
  return del(`/salary/deletion`, { Employee_ID });
}

export function addSalary(params: any) {
  return post(`/salary/addition`, params);
}

export function updateSalary(params: any) {
  return put(`/salary/update`, params);
}
