import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Widgets from '@/views/Widgets'

Vue.use(BootstrapVue)

describe('Widgets.vue', () => {
  it('has a name', () => {
    expect(Widgets.name).toMatch('widgets')
  })
  it('has a created hook', () => {
    expect(typeof Widgets.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Widgets.data).toMatch('function')
    const defaultData = Widgets.data()
    expect(defaultData.msg).toMatch('Widgets')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Widgets', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.is(Widgets)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Widgets)
    expect(wrapper.element).toMatchSnapshot()
  })
})
