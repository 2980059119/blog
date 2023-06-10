import axios from 'axios'
import router from '@/router/routers'
import {ElNotification} from 'element-plus'
import store from '../store'
import {getToken} from '@/utils/auth'
import Config from '@/settings'
import Cookies from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})
console.log(service.getUri())
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_BASE_API)
// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 兼容blob下载出错json提示
    // 这段代码主要是为了检查后端返回的错误信息是否为 JSON 格式的。
    //
    // 首先，判断 error.response.data instanceof Blob，是因为 axios 在接收到后端返回的数据时，会把这些数据使用 Blob 类型封装起来，方便在不同的平台（Web、Node.js 等）中使用。
    //
    // 接着，通过 error.response.data.type.toLowerCase() 获取到数据的 MIME 类型。如果是 JSON 格式的数据，MIME 类型一般是 application/json，即包含 json 关键字。
    //
    // 最后，通过 indexOf 方法检查 json 关键字是否在 MIME 类型中出现，如果存在，则说明后端返回的错误信息是 JSON 格式的。
    //
    // 综上，这段代码的作用就是检查后端返回的错误信息是否为 JSON 格式的，从而在统一处理错误时，可以方便地解析错误信息并传递给下一层处理。
    if (error.response.data instanceof Blob && error.response.data.type.toLowerCase().indexOf('json') !== -1) {
      const reader = new FileReader()
      reader.readAsText(error.response.data, 'utf-8')
      reader.onload = function (e) {
        console.log(e)
        const errorMsg = JSON.parse(reader.result).message
        ElNotification.error({
          title: errorMsg,
          duration: 5000
        })
      }
    } else {
      let code = 0
      try {
        // 获取 异常消息 状态
        code = error.response.data.status
      } catch (e) {
        // 这段代码主要是用来解决网络请求超时的情况。
        //
        // 首先，通过 error.toString().indexOf('Error: timeout') 判断该错误信息是否包含 “Error: timeout”，如果包含，则说明网络请求超时。
        //
        // 接着，使用 ElNotification.error 方法弹出一个错误提示框，提示用户网络请求超时，方便用户在异常情况下及时得到反馈。
        //
        // 最后，通过 Promise.reject(error) 将错误向下传递，以便上层的代码或者其他操作可以根据具体的业务场景进行处理。
        //
        // 综上，这段代码的作用就是在网络请求超时的情况下，使用提示框提示用户，并将错误向下传递，以便异常的处理。
        if (error.toString().indexOf('Error: timeout') !== -1) {
          ElNotification.error({
            title: '网络请求超时',
            duration: 5000
          })
          return Promise.reject(error)
        }
      }
      // 判断 是否 获取到异常消息 状态
      if (code) {
        if (code === 403) {
          router.push({path: '/401'})
        } else {
          const errorMsg = error.response.data.message
          if (errorMsg !== undefined) {
            ElNotification.error({
              title: errorMsg,
              duration: 5000
            })
          }
        }
      } else {
        ElNotification.error({
          title: '接口请求失败',
          duration: 5000
        })
      }
    }
    return Promise.reject(error)
  }
)
export default service
