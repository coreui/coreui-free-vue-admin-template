import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarClass: '',
  },
  mutations: {
    toggleSidebar (state) {
      if(state.sidebarClass === ''){
        state.sidebarClass = 'sidebar-self-hiding-xxl'
      }else{
        state.sidebarClass = ''
      }
    }
  },
  actions: {},
  modules: {},
});
