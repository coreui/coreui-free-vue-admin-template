import Vue from 'vue'
import { mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import ProgressBars from '@/views/base/ProgressBars'

Vue.use(BootstrapVue)

describe('ProgressBars.vue', () => {
  it('has a name', () => {
    expect(ProgressBars.name).toMatch('progress-bars')
  })
  it('has a created hook', () => {
    expect(typeof ProgressBars.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof ProgressBars.data).toMatch('function')
    const defaultData = ProgressBars.data()
    expect(defaultData.counter).toBe(45)
  })
  it('is Vue instance', () => {
    const wrapper = mount(ProgressBars)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is ProgressBars', () => {
    const wrapper = mount(ProgressBars)
    expect(wrapper.is(ProgressBars)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(ProgressBars)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Progress')
  })
})
