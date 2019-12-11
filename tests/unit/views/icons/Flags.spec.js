import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Flags from '@/views/icons/Flags'

Vue.use(CoreuiVue)

describe('Flags.vue', () => {
  it('has a name', () => {
    expect(Flags.name).toBe('Flags')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Flags)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Flags', () => {
    const wrapper = shallowMount(Flags)
    expect(wrapper.is(Flags)).toBe(true)
  })
})
