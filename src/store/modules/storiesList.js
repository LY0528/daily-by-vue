import Cookies from 'js-cookie'

const storiesList = {
  state: {
    storiesList: {
      list: Cookies.get('storiesList').split('|')
    }
  },
  mutations: {
    TOGGLE_STORIESLIST (state, obj) {
      Cookies.set('storiesList', obj.list.join('|'))
      state.storiesList.list = obj.list
    }
  },
  actions: {
    ToggleStoriesList: ({commit}, obj) => {
      commit('TOGGLE_STORIESLIST', obj)
    }
  }
}

export default storiesList
