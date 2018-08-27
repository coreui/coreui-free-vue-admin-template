import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Login from '@/views/pages/Login'

Vue.use(BootstrapVue)

describe('Login.vue', () => {
  it('has a name', () => {
    expect(Login.name).toMatch('Login')
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
})
