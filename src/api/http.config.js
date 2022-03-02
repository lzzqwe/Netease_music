import axios from 'axios'
import { delUserInfo } from '../common/js/cache'
import { Notify } from 'vant';
import router from '../router'
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
axios.interceptors.request.use((config) => {
    console.log(config);
    return config
})
axios.interceptors.response.use((res) => {
    console.log(res);
    return res
}, (err) => {
    console.log(err);
    console.log(err.response);
    if (err.response.status === 301) {
        delUserInfo()
        router.push({
            path: '/login'
        })
    }
})

function request(options) {
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            console.log(res)
            if (res.data.code === 200) {
                resolve(res.data)
            }
        }, err => {
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
            paramsSerializer: function(params) {
                return transformRequest(params)
            }
        })
    },

    post(url, data = {}) {
        return request({
            url: url,
            method: 'post',
            data: data,
            transformRequest: [function(data, headers) {
                return JSON.stringify(data)
            }]
        })
    },
    put(url, data = {}) {
        return request({
            url: url,
            method: 'put',
            data: data,
            transformRequest: [function(data, headers) {
                return JSON.stringify(data)
            }]
        })
    },
    delete(url, params) {
        return request({
            url: url,
            method: 'delete',
            params: params,
            paramsSerializer: function(params) {
                return transformRequest(params)
            }
        })
    }
}