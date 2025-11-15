import axios, { type AxiosRequestConfig } from 'axios';

/**
 * 创建 axios 请求实例
 * @returns axios 实例
 */
const createRequest = () => {
  const service = axios.create({
    baseURL: 'http://localhost:8000'
  });

  service.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Something went wrong!');
    },
    err => {
      console.error('Request error:', err);
      if (err.response) {
        // Server responded with error status
        const errorMessage = err.response?.data?.detail || err.response?.data?.message || err.message;
        console.error('Error response:', {
          status: err.response.status,
          data: err.response.data,
          message: errorMessage
        });
        return Promise.reject(new Error(errorMessage));
      } else if (err.request) {
        // Request was made but no response received
        console.error('No response received:', err.request);
        return Promise.reject(new Error('Network error: No response from server. Please check if the backend is running.'));
      } else {
        // Error setting up the request
        console.error('Request setup error:', err.message);
        return Promise.reject(err);
      }
    }
  );

  return service;
};

const service = createRequest();

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
