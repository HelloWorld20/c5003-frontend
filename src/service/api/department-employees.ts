import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchDepartmentEmpList(params: Record<string, any>) {
  return get('/dept_emp/list', params);
}

export function delDepartmentEmp(Employee_ID: string | number) {
  return del(`/dept_emp/deletion`, { Employee_ID });
}

export function addDepartmentEmp(params: any) {
  return post(`/dept_emp/addition`, params);
}

export function updateDepartmentEmp(params: any) {
  return put(`/dept_emp/update`, params);
}
