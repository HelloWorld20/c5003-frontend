import { request } from '../request';
import { localStg } from '@/utils/storage';

/**
 * Login
 *
 * @param userName User name
 * @param password Password
 */
export function fetchLogin(userName: string, password: string) {
  // Handle admin/admin login locally if backend doesn't support it
  if (userName === 'admin' && password === 'admin') {
    return Promise.resolve({
      data: {
        token: 'admin-token-' + Date.now(),
        refreshToken: 'admin-refresh-token-' + Date.now()
      },
      error: null
    });
  }
  
  return request<Api.Auth.LoginToken>({
    url: '/auth/login',
    method: 'post',
    data: {
      userName,
      password
    }
  });
}

/** Get user info */
export function fetchGetUserInfo() {
  // Check if we're using admin token
  const token = localStg.get('token');
  if (token && token.startsWith('admin-token-')) {
    return Promise.resolve({
      data: {
        userId: 'admin',
        userName: 'admin',
        roles: ['admin'],
        buttons: []
      },
      error: null
    });
  }
  
  return request<Api.Auth.UserInfo>({ url: '/auth/getUserInfo' });
}

/**
 * Refresh token
 *
 * @param refreshToken Refresh token
 */
export function fetchRefreshToken(refreshToken: string) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/refreshToken',
    method: 'post',
    data: {
      refreshToken
    }
  });
}

/**
 * return custom backend error
 *
 * @param code error code
 * @param msg error message
 */
export function fetchCustomBackendError(code: string, msg: string) {
  return request({ url: '/auth/error', params: { code, msg } });
}
