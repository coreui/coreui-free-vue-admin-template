import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Brands from '@/views/icons/Brands'

Vue.use(CoreuiVue)

describe('Brands.vue', () => {
  it('has a name', () => {
    expect(Brands.name).toBe('Brands')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Brands)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Brands', () => {
    const wrapper = shallowMount(Brands)
    expect(wrapper.findComponent(Brands)).toBeTruthy()
  })
})
