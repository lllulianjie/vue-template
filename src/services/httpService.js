/**
 * Http 服务类
 */

import vue from 'vue'
import axios from 'axios'
import globalService from './globalConfigService'

const defaultConfig = {
  baseURL: '',
  timeout: 20000
}
const thisVue = vue

// 不需要loading动画
// const skipLoadingList = []

const configValue = globalService.getConfig()
const httpInstance = createAxios(configValue && configValue.axiosConfig)

function createAxios (axiosConfig) {
  if (axiosConfig) {
    axiosConfig = Object.assign({}, defaultConfig, axiosConfig)
  }
  return axios.create(axiosConfig)
}

function get (url, params = {}) {
  return httpInstance.get(url, {
    params: params
  })
}

let loading = null
httpInstance.interceptors.request.use((config) => {
  // let url = config.url
  // url = url.substring(configValue.baseURL.length)
  // if (skipLoadingList.indexOf(url) > -1) {

  // }
  loading = thisVue.prototype.$loading({
    lock: true,
    // text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  // console.log(config)
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})
httpInstance.interceptors.response.use(resp => {
  loading.close()
  return resp
}, err => {
  console.log(err)
  loading.close()
  return Promise.reject(err)
})
// post请求，默认headers是application/x-www-form-urlencoded;charset=UTF-8，如需修改可通过config传递
function post (url, data = {}, config) {
  let params = ''
  let firstParam = true
  for (let item in data) {
    if (!firstParam) {
      params += '&'
    }
    firstParam = false
    params += item + '=' + data[item]
  }
  return httpInstance.post(url, params, config)
}

function postVo (url, data, config) {
  return httpInstance.post(url, data, config)
}

function del (url, config) {
  return httpInstance.delete(url, config)
}

/**
 * 获取baseUrl
 */
function getBaseUrl () {
  if (httpInstance == null) {
    return ''
  }
  return httpInstance.defaults.baseURL
}

export default {
  getBaseUrl,
  get,
  post,
  postVo,
  del
}
