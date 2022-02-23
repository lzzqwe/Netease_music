import axios from 'axios'
import { Notify } from 'vant';
import router from 'vue-router'
/*
* 全局 axios 默认配置
*/
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
// axios.defaults.headers.common.Authorization = ''
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get.Accept = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.delete['X-Requested-With'] = 'XMLHttpRequest'
function transformRequest(param) {
  return Object.keys(param).map(key => {
    const value = typeof param[key] === 'object' ? encodeURIComponent(JSON.stringify(param[key])) : param[key]
    return `${key}=${value}`
  }).join('&')
}

function request(options) {
  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      console.log(res)
      if (res.data.code === 200) {
        resolve(res.data)
      } else if (res.data.code === 302) {
        window.location.href = res.data.data
      }
      else {
        // Message.error(res.data.msg)
        console.log('00011111111111111')
        Notify('暂无数据');
      }
    }, err => {
     // window.location.href =window.location.host.indexOf('127.0.0.1')!= -1? 'http://127.0.0.1:8080/#/login' :  `http://${window.location.host}`
      console.log('000')
      handleError(err)
      reject(err)
    })
  })
}

function handleError(error) {
  Notify(error)
  console.log(error)
}

export default {
  get(url, params = {}) {
    return request({
      url: url,
      method: 'get',
      params: params,
      paramsSerializer: function (params) {
        return transformRequest(params)
      }
    })
  },

  post(url, data = {}) {
    return request({
      url: url,
      method: 'post',
      data: data,
      transformRequest: [function (data, headers) {
        return JSON.stringify(data)
      }]
    })
  },
  put(url, data = {}) {
    return request({
      url: url,
      method: 'put',
      data: data,
      transformRequest: [function (data, headers) {
        return JSON.stringify(data)
      }]
    })
  },
  delete(url, params) {
    return request({
      url: url,
      method: 'delete',
      params: params,
      paramsSerializer: function (params) {
        return transformRequest(params)
      }
    })
  }
}
