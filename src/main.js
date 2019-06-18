import Vue from 'vue'
import App from './App'
import router from './router'
// import CoreuiVue from '@coreui/vue/src'
import { CIconPlugin } from '@coreui/icons/vue'
import { iconsSet } from './assets/icons/icons.js'

import CoreuiVue from '@coreui/vue/src'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(CIconPlugin, iconsSet)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
})
