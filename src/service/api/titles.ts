import { del, get, post, put } from '@/utils/my-service';

/** get constant routes */
export function fetchTitlesList(params: Record<string, any>) {
  return get('/titles/list', params);
}

export function delTitle(Employee_ID: string | number, Title: string) {
  console.log('%c [ { Employee_ID, Title } ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', {
    Employee_ID,
    Title
  });
  return del(`/titles/deletion`, { Employee_ID, Title });
}

export function addTitle(params: any) {
  return post(`/titles/addition`, params);
}

export function updateTitle(params: any) {
  return put(`/titles/update`, params);
}
