import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Widgets from '@/views/widgets/Widgets'

Vue.use(CoreuiVue)

describe('Widgets.vue', () => {
  it('has a name', () => {
    expect(Widgets.name).toBe('Widgets')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Widgets', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.findComponent(Widgets)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.element).toMatchSnapshot()
  })
})
