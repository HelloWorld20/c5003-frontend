import { get } from '@/utils/my-service';

/** get constant routes */
export function fetchExecutor(sql: string) {
  return get('/exec', { sql });
}
