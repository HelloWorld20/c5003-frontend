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

/**
 * 按员工ID获取详情
 *
 * @param emp_no 员工编号
 * @returns 员工详情对象
 */
export function fetchEmployeeById(emp_no: string | number) {
  return get(`/employees/${emp_no}`);
}

export function homeVisualization() {
  return get('/home_vizs');
}
