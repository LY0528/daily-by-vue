import Vue from 'vue'
import Vuex from 'vuex'
import test1 from './modules/test1'
import test2 from './modules/test2'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  modules: {
    test1,
    test2
  },
  strict: debug
})

export default store
