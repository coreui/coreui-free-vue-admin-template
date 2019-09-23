import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Paginations from '@/views/base/Paginations'

Vue.use(CoreuiVue)

describe('Paginations.vue', () => {
  it('has a name', () => {
    expect(Paginations.name).toBe('Paginations')
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
  test('renders correctly', () => {
    const wrapper = shallowMount(Paginations)
    expect(wrapper.element).toMatchSnapshot()
  })
})
