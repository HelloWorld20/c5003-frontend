import axios, { type AxiosRequestConfig } from 'axios';

/**
 * 创建 axios 请求实例
 * @returns axios 实例
 */
const createReqeust = () => {
  const service = axios.create({
    baseURL: 'http://localhost:8000'
  });

  service.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('somethimg went wrong!');
    },
    err => {
      console.log('%c [ err ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', err);
      if (err.status !== 200) {
        return Promise.reject(err.response?.data?.detail);
        // return err.response.data.detail;
      }
      return err;
    }
  );

  return service;
};

const service = createReqeust();

export const request = (config: AxiosRequestConfig) => {
  return service(config);
};

export const get = (url: string, params?: Record<string, any>, config?: AxiosRequestConfig) => {
  return request({
    url,
    method: 'get',
    params,
    ...config
  });
};

export const post = (url: string, data?: Record<string, any>, config?: AxiosRequestConfig) => {
  return request({
    url,
    method: 'post',
    data,
    ...config
  });
};

export const put = (url: string, data?: Record<string, any>, config?: AxiosRequestConfig) => {
  return request({
    url,
    method: 'put',
    data,
    ...config
  });
};

export const del = (url: string, data?: Record<string, any>, config?: AxiosRequestConfig) => {
  return request({
    url,
    method: 'delete',
    data,
    ...config
  });
};
