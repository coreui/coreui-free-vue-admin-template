import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Collapses from '@/views/base/Collapses'

Vue.use(BootstrapVue)

describe('Collapses.vue', () => {
  it('has a name', () => {
    expect(Collapses.name).toMatch('collapses')
  })
  it('has a created hook', () => {
    expect(typeof Collapses.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Collapses.data).toMatch('function')
    const defaultData = Collapses.data()
    expect(defaultData.showCollapse).toBe(true)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Collapses)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Collapses', () => {
    const wrapper = shallowMount(Collapses)
    expect(wrapper.is(Collapses)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Collapses)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Collapse')
  })
})
