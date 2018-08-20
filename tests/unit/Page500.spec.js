import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Page500 from '@/views/Pages/Page500'

Vue.use(BootstrapVue)

describe('Page500.vue', () => {
  it('has a name', () => {
    expect(Page500.name).toMatch('Page500')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Page500)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Page500', () => {
    const wrapper = shallowMount(Page500)
    expect(wrapper.is(Page500)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Page500)
    expect(wrapper.find('h1').text()).toMatch('500')
  })
})
