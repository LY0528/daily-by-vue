import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const staticRouters = [
  {
    path: '/',
    name: 'IndexPage',
    component: _import('homePage/IndexPage')
  }
]

export default new Router({
  routes: staticRouters
})
