import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Navbars from '@/views/base/Navbars'

Vue.use(CoreuiVue)

describe('Navbars.vue', () => {
  it('has a name', () => {
    expect(Navbars.name).toBe('Navbars')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Navbars)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Navbars', () => {
    const wrapper = shallowMount(Navbars)
    expect(wrapper.findComponent(Navbars)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Navbars)
    expect(wrapper.element).toMatchSnapshot()
  })
})
