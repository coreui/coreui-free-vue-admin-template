import Vue from 'vue'
import { mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Popovers from '@/views/base/Popovers'

Vue.use(BootstrapVue)

describe('Popovers.vue', () => {
  it('has a name', () => {
    expect(Popovers.name).toMatch('popovers')
  })
  it('has a created hook', () => {
    expect(typeof Popovers.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Popovers.data).toMatch('function')
    const defaultData = Popovers.data()
    expect(defaultData.show).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = mount(Popovers)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Popovers', () => {
    const wrapper = mount(Popovers)
    expect(wrapper.is(Popovers)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Popovers)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Popovers')
  })
})
