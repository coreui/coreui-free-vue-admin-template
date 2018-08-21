import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DefaultContainer from '@/containers/DefaultContainer'

Vue.use(BootstrapVue)

describe('DefaultContainer.vue', () => {
  it('has a name', () => {
    expect(DefaultContainer.name).toMatch('full')
  })
  it('has a created hook', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
    const defaultData = DefaultContainer.data()
    expect(typeof defaultData.nav).toMatch('object')
  })
})
