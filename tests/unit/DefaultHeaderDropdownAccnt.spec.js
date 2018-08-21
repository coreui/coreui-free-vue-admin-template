import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DefaultHeaderDropdownAccnt from '@/containers/DefaultHeaderDropdownAccnt'

Vue.use(BootstrapVue)

describe('DefaultHeaderDropdownAccnt.vue', () => {
  it('has a name', () => {
    expect(DefaultHeaderDropdownAccnt.name).toMatch('DefaultHeaderDropdownAccnt')
  })
  it('has a created hook', () => {
    expect(typeof DefaultHeaderDropdownAccnt.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultHeaderDropdownAccnt.data).toMatch('function')
    const defaultData = DefaultHeaderDropdownAccnt.data()
    expect(defaultData.itemsCount).toBe(42)
  })
})
