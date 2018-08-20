import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Page404 from '@/views/Pages/Page404'

Vue.use(BootstrapVue)

describe('Page404.vue', () => {
  it('has a name', () => {
    expect(Page404.name).toMatch('Page404')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Page404)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Page500', () => {
    const wrapper = shallowMount(Page404)
    expect(wrapper.is(Page404)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Page404)
    expect(wrapper.find('h1').text()).toMatch('404')
  })
})
