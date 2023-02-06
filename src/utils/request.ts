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
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  withCredentials: true,
  responseType: MIME_TYPE
});

// 请求拦截
// instance.interceptors.request.use((config) => {
//   // 自定义header，可添加项目token
//   config.headers.token = 'token';
//   return config;
// });

instance.interceptors.response.use(
  (res) => responseSuccessHandler(res),
  (error) => responseErrorHandler(error)
);

// 响应拦截器
const responseSuccessHandler = (response: any) => {
  // eslint-disable-next-line yoda
  // 这里没有必要进行判断，axios 内部已经判断
  // const isOk = 200 <= response.status && response.status < 300
  return Promise.resolve(response.data);
};

const responseErrorHandler = (err: any) => {
  const { response } = err;

  if (response) {
    switch (response?.status) {
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
        err.message = '拒绝访问';
        window.location.href = '/login';
        break;
      case 404:
        //请求不存在
        message.error({
          content: `请求不存在`
          // description: error.response.data?.msg || 'Error'
        });
        break;

      case 408:
        err.message = '请求超时';
        break;

      case 500:
        err.message = '服务器内部错误';
        break;

      case 501:
        err.message = '服务未实现';
        break;

      case 502:
        err.message = '网关错误';
        break;

      case 503:
        err.message = '服务不可用';
        break;

      case 504:
        err.message = '网关超时';
        break;

      case 505:
        err.message = 'HTTP版本不受支持';
        break;
      default:
        break;
    }
  }
  return Promise.reject(err);
};
export default instance;
