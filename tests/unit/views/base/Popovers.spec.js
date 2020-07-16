import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Popovers from '@/views/base/Popovers'

Vue.use(CoreuiVue)

describe('Popovers.vue', () => {
  it('has a name', () => {
    expect(Popovers.name).toBe('Popovers')
  })
  it('has a created hook', () => {
    expect(typeof Popovers.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Popovers)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Popovers', () => {
    const wrapper = shallowMount(Popovers)
    expect(wrapper.findComponent(Popovers)).toBeTruthy()
  })
})
