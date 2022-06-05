/*
 * @Author: Thomas_H 
 * @Date: 2021-04-16 23:32:52 
 * @Last Modified by:   Thomas_H 
 * @Last Modified time: 2021-04-16 23:32:52 
 */

//封装axios
import axios from 'axios'
// 默认路径
const BASE_URL = 'http://localhost:4000'
const TIMEOUT = 30000
const MIME_TYPE = { JSON: 'json' }
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: false,
  responseType: MIME_TYPE.JSON,
})
instance.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)

export default instance
