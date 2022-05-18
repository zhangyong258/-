import axios from 'axios'
// import QS from 'qs'
// import router from '@/router'
// import { rewriteMessage } from '@/utils/message'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 30000,
  headers: {
    // 'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/json'
    /**
     * Content-Type: application/json ：
     * 请求体中的数据会以json字符串的形式发送到后端
     * Content-Type: application/x-www-form-urlencoded：
     * 请求体中的数据会以普通表单形式（键值对）发送到后端
     * Content-Type: multipart/form-data：
     * 它会将请求体的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。
     */
  }
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// get请求
export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {params: data})
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// post请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then((response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        })
  })
}