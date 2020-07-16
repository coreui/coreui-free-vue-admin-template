import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Modals from '@/views/notifications/Modals'

Vue.use(CoreuiVue)

describe('Modals.vue', () => {
  it('has a name', () => {
    expect(Modals.name).toBe('Modals')
  })
  it('has a created hook', () => {
    expect(typeof Modals.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Modals.data).toMatch('function')
    const defaultData = Modals.data()
    expect(defaultData.largeModal).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Modals)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Modals', () => {
    const wrapper = shallowMount(Modals)
    expect(wrapper.findComponent(Modals)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Modals)
    expect(wrapper.element).toMatchSnapshot()
  })
})
