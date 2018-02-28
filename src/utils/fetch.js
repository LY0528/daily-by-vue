import axios from 'axios'
axios.defaults.timeout = 6000
// axios.defaults.baseURL = 'http://news-at.zhihu.com'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/**
 * @description 获取数据
 * @param {String} method  需要请求数据的接口地址
 * @param {Object} param 提交的参数
 * @param {Function} callback 请求成功之后的回调函数
 */
export function request (method, param, callback) {
  axios.get(method, param).then(response => {
    callback(response)
  }).catch(error => {
    console.log(error)
  })
}
