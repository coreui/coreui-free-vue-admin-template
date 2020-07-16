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
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Colors', () => {
    const wrapper = shallowMount(Colors)
    expect(wrapper.findComponent(Colors)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(Colors)
    expect(wrapper.element).toMatchSnapshot()
  })
})
