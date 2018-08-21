import Vue from 'vue'
import { mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Tabs from '@/views/base/Tabs'

Vue.use(BootstrapVue)

describe('Tabs.vue', () => {
  it('has a name', () => {
    expect(Tabs.name).toMatch('tabs')
  })
  it('has a created hook', () => {
    expect(typeof Tabs.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Tabs.data).toMatch('function')
    const defaultData = Tabs.data()
    expect(defaultData.tabs).toEqual(["Calculator", "Shopping cart", "Charts"])
    expect(defaultData.tabIndex).toEqual([0, 0])
  })
  it('is Vue instance', () => {
    const wrapper = mount(Tabs)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Tabs', () => {
    const wrapper = mount(Tabs)
    expect(wrapper.is(Tabs)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Tabs)
    expect(wrapper.find('div.card-header > div').text()).toMatch('Tabs')
  })
})
