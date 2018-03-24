import Vue from 'vue'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

export function request (url, params) {
  return new Promise((resolve, reject) => {
    Vue.http.get(`api/${url}`, {
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
