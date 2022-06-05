/*
 * @Author: Thomas_H 
 * @Date: 2021-04-16 22:56:35 
 * @Last Modified by:   Thomas_H 
 * @Last Modified time: 2021-04-16 22:56:35 
 */

export const localStorageFactory = (params) => {
  const {
    key,
    defaultValue,
    raw,
    serizalizer = JSON.stringify,
    deserizalizer = JSON.parse,
  } = params
  const setItem = (value) => {
    const data = raw ? value : serizalizer(value)
    window.localStorage.setItem(key, data || defaultValue)
  }
  const getItem = () => {
    const data = window.localStorage.getItem(key) || defaultValue
    return raw ? data : deserizalizer(data)
  }
  const removeItem = () => {
    window.localStorage.removeItem(key)
  }
  return { setItem, getItem, removeItem }
}
