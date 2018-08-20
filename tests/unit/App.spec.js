import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import App from '@/App'

Vue.use(BootstrapVue)

describe('App.vue', () => {
  it('has a name', () => {
    expect(App.name).toMatch('app')
  })
})
