import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const staticRouters = [
  {
    path: '/',
    name: 'IndexPage',
    component: _import('homePage/IndexPage')
  },
  {
    path: '/themeData/:id',
    name: 'ThemeData',
    component: _import('themeData/ThemeData')
  },
  {
    path: '/stories/:id',
    name: 'stories',
    component: _import('stories/StoriesDetail')
  }
]

export default new Router({
  routes: staticRouters
})
