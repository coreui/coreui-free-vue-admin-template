import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  showSidebar: 'responsive'
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.showSidebar)
    state.showSidebar = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.showSidebar)
    state.showSidebar = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})