// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import '@babel/polyfill'

// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import CoreuiVue from '@coreui/vue/src'
import { CIconPlugin } from '@coreui/icons/vue'
import { iconsSet } from './assets/icons/icons.js'

import CoreuiVue from '@coreui/vue'

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
