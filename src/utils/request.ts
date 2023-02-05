//封装axios
import axios, { responseEncoding } from 'axios';
import { message } from 'antd';

// 默认路径
const BASE_URL = '/api';
const TIMEOUT = 10000;
const MIME_TYPE = 'json';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: false,
  responseType: MIME_TYPE
});
instance.interceptors.response.use(
  (res) => {
    const data = res.data;
    if (res.status === 200) {
      return data;
    }
  },
  (error) => {
    if (error?.response?.status) {
      switch (error.response?.status) {
        case 400:
          message.error({
            content: `请求错误`
            // description: error.response.data?.msg || 'Error'
          });
          break;
        case 401:
          //未登录
          window.location.href = '/login';
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空store中token对象
        // 跳转登录页面
        case 403:
          window.location.href = '/login';
          break;
        case 404:
          //请求不存在
          message.error({
            content: `请求不存在`
            // description: error.response.data?.msg || 'Error'
          });
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
