import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Register from '@/views/pages/Register'

Vue.use(CoreuiVue)

describe('Register.vue', () => {
  it('has a name', () => {
    expect(Register.name).toBe('Register')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Register', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.is(Register)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.find('h1').text()).toMatch('Register')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.element).toMatchSnapshot()
  })
})
