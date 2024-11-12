/**
 * @description axios请求模块
 * */
import axios from 'axios';
import {Session} from '@utils/storage.ts';
import {ElMessage, ElMessageBox} from 'element-plus';

/**
 * @description 创建 axios 实例
 * @description Content-Type: Content-Type 是一个HTTP头字段，用于指示
 *        传输内容的媒体类型。它告诉接收方如何处理传输的内容，比如是文本、图像，还是其他类型的数据。
 * */
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 50000, // 请求超时时间
  headers: {"Content-Type": "application/json;charset=utf-8"},
})

/**
 * @description 请求拦截器
 * */
service.interceptors.request.use(
    (config) => {
  if(!config.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }
  if(Session.get('token')) {
    config.headers.Authorization = `${Session.get('token')}`;
  }
  return config
},
    (error) => {
  return Promise.reject(error)
})

/**
 * @description 响应拦截器
 * */
service.interceptors.response.use(({data})=>{
  // 对响应数据做点什么
  const {code, msg} = data;
  if (code === '00000') {
    return data;
  } else {
    ElMessage({
      message: msg || '系统出错',
      type: 'error'
    })
    return Promise.reject(new Error(msg || 'Error'))
  }
}, (error) => {
  const {code, msg} = error.response.data
  if (code === 'A0230') {  // token 过期
    Session.clear(); // 清除浏览器全部临时缓存
    window.location.href = '/'; // 跳转登录页
    ElMessageBox.alert('当前页面已失效，请重新登录', '提示', {})
        .then(() => {
        })
        .catch(() => {
        });
  }
  return Promise.reject(new Error(msg || 'Error'))
})

// 导出 axios 实例
export default service
