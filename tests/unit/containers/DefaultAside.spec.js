import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DefaultAside from '@/containers/DefaultAside'

Vue.use(BootstrapVue)

describe('DefaultAside.vue', () => {
  it('has a name', () => {
    expect(DefaultAside.name).toMatch('DefaultAside')
  })
})
