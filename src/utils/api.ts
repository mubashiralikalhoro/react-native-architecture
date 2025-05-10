import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import apiEndpoints from '../constants/api-endpoints';

// setup base thing
const axiosInter = axios.create({
  baseURL: apiEndpoints.BASE_URL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
});

interface ResponseObject<T> {
  success: boolean;
  failed: boolean;
  data: T | null;
  error: string;
}

// caller function
const caller = async <T>(
  area: 'public' | 'private',
  type: 'post' | 'get' | 'put' | 'delete',
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any>,
) => {
  const responseObject: ResponseObject<T> = {
    success: false,
    failed: false,
    data: null,
    error: '',
  };

  try {
    let response;
    if (type === 'get' || type === 'delete') {
      response = await axiosInter[type](url, config);
    } else {
      response = await axiosInter[type](url, data, config);
    }

    responseObject.success = true;
    responseObject.failed = false;
    responseObject.data = response.data;
    responseObject.error = '';
  } catch (err: any) {
    const response = err?.response?.data;
    const errorMessage =
      response?.error?.message ||
      response?.message ||
      err?.message ||
      'Something went wrong';

    responseObject.error = errorMessage;
    responseObject.data = response?.data || null;
    responseObject.failed = true;
    responseObject.success = false;
  }

  return responseObject as ResponseObject<T>;
};

const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig<any>) =>
    caller<T>('public', 'get', url, undefined, config),
  delete: async <T>(url: string, config?: AxiosRequestConfig<any>) =>
    caller<T>('public', 'delete', url, undefined, config),
  post: async <T>(url: string, data: any, config?: AxiosRequestConfig<any>) =>
    caller<T>('public', 'post', url, data, config),
  put: async <T>(url: string, data: any, config?: AxiosRequestConfig<any>) =>
    caller<T>('public', 'put', url, data, config),
};

export default api;
