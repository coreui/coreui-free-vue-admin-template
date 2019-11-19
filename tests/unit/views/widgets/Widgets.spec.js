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
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Widgets', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.is(Widgets)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.element).toMatchSnapshot()
  })
})
