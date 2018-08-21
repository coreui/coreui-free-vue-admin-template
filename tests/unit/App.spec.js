import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from '@/App'

Vue.use(BootstrapVue)

describe('App.vue', () => {
  it('has a name', () => {
    expect(App.name).toMatch('app')
  })
})
