import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './modules/sidebar'
import storiesList from './modules/storiesList'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sidebar,
    storiesList
  },
  getters
})

export default store
