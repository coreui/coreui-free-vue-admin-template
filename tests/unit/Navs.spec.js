import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Navs from '@/views/base/Navs'

Vue.use(BootstrapVue)

describe('Navs.vue', () => {
  it('has a name', () => {
    expect(Navs.name).toMatch('navs')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Navs)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Navbars', () => {
    const wrapper = shallowMount(Navs)
    expect(wrapper.is(Navs)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Navs)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Navs')
  })
})
