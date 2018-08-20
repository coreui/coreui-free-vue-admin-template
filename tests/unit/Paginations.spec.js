import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Paginations from '@/views/base/Paginations'

Vue.use(BootstrapVue)

describe('Paginations.vue', () => {
  it('has a name', () => {
    expect(Paginations.name).toMatch('paginations')
  })
  it('has a created hook', () => {
    expect(typeof Paginations.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Paginations.data).toMatch('function')
    const defaultData = Paginations.data()
    expect(defaultData.currentPage).toBe(3)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Paginations)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Paginations', () => {
    const wrapper = shallowMount(Paginations)
    expect(wrapper.is(Paginations)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Paginations)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Pagination')
  })
})
