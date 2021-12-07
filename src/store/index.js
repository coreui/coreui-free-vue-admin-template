import { createStore } from 'vuex'

const COREUI_LIBRARY_SHORT_VERSION =
  process.env.COREUI_LIBRARY_SHORT_VERSION || ''

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  getters: {
    coreuiLibraryShortVersion() {
      return COREUI_LIBRARY_SHORT_VERSION
    },
  },
  actions: {},
  modules: {},
})
