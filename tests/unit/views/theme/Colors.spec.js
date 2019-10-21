import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Colors from '@/views/theme/Colors'

Vue.use(CoreuiVue)

describe('Colors.vue', () => {
  it('has a name', () => {
    expect(Colors.name).toBe('Colors')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Colors)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Colors', () => {
    const wrapper = shallowMount(Colors)
    expect(wrapper.is(Colors)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(Colors)
    expect(wrapper.element).toMatchSnapshot()
  })
})
