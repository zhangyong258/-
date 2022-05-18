import axios from 'axios'
import QS from 'qs'
// import router from '@/router'
// import { rewriteMessage } from '@/utils/message'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 30000
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
    instance.post(url, QS.stringify(data))
      .then((response) => {
          resolve(response.data)
        },
        (err) => {
          reject(err)
        })
  })
}