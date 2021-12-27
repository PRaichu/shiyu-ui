import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: {
      isOpen: true
    }
  },
  mutations: {
    setSidebar(state, sidebar) {
      state.sidebar = sidebar
    },
    setData(state, param) { // param:{key:*,val:*}
      let val = param.val
      if (typeof param.val === 'object') {
        val = JSON.stringify(val)
      }
      // eslint-disable-next-line no-eval
      eval(`state.${param.key}=${val}`)
    }
  },
  getters: {
    getSidebar: (state) => state.sidebar
  },
  actions: {
  },
  modules: {
  }
})
