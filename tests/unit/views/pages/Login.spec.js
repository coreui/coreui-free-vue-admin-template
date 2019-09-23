import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Login from '@/views/pages/Login'

Vue.use(CoreuiVue)

describe('Login.vue', () => {
  it('has a name', () => {
    expect(Login.name).toBe('Login')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Login', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.is(Login)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.find('h1').text()).toMatch('Login')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.element).toMatchSnapshot()
  })
})
