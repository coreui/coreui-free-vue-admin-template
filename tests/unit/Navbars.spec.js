import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Navbars from '@/views/base/Navbars'

Vue.use(BootstrapVue)

describe('Navbars.vue', () => {
  it('has a name', () => {
    expect(Navbars.name).toMatch('navbars')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Navbars)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Navbars', () => {
    const wrapper = shallowMount(Navbars)
    expect(wrapper.is(Navbars)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Navbars)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Navbar')
  })
})
