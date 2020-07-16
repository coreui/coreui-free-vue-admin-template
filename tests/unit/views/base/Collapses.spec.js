import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Collapses from '@/views/base/Collapses'

Vue.use(CoreuiVue)

describe('Collapses.vue', () => {
  it('has a name', () => {
    expect(Collapses.name).toBe('Collapses')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Collapses)
    expect(wrapper.vm).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(Collapses)
    expect(wrapper.element).toMatchSnapshot()
  })
})
