const state = {
  a: 1
}
const getters = {
  a: state => state.a
}
const actions = {
  checkout (context, count) {
    context.commit('addCount', count)
  }
}
const mutations = {
  addCount (state, count) {
    state.a = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
