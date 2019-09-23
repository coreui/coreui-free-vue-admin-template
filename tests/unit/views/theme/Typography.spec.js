import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Typography from '@/views/theme/Typography'

Vue.use(CoreuiVue)

describe('Typography.vue', () => {
  it('has a name', () => {
    expect(Typography.name).toBe('Typography')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Typography', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.is(Typography)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.element).toMatchSnapshot()
  })
})
