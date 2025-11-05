import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchEmployeesList(params: Record<string, any>) {
  return get('/employees/list', params);
}

export function delEmployee(emp_no: string | number) {
  return del(`/employees/${emp_no}`);
}

export function addEmployee(params: any) {
  return post(`/employees`, params);
}

export function updateEmployee(emp_no: string | number, params: any) {
  return put(`/employees/${emp_no}`, params);
}

export function homeVisualization() {
  return get('/home_vizs');
}
