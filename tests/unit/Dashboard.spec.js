import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Dashboard from '@/views/Dashboard'

Vue.use(BootstrapVue)

describe('Dashboard.vue', () => {
  it('has a name', () => {
    expect(Dashboard.name).toMatch('dashboard')
  })
  it('has a created hook', () => {
    expect(typeof Dashboard.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Dashboard.data).toMatch('function')
    const defaultData = Dashboard.data()
    expect(defaultData.selected).toMatch('Month')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Dashboard', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.is(Dashboard)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.find('#traffic').text()).toMatch('Traffic')
  })
})
