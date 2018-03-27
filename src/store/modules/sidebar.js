import Cookies from 'js-cookie'

const sidebar = {
  state: {
    sidebar: {
      id: Cookies.get('sidebarId')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR (state, obj) {
      Cookies.set('sidebarId', obj.id)
      state.sidebar.id = obj.id
    }
  },
  actions: {
    ToggleSidebar: ({commit}, obj) => {
      commit('TOGGLE_SIDEBAR', obj)
    }
  }
}

export default sidebar
