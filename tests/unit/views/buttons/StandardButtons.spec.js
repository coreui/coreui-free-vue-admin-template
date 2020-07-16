import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import StandardButtons from '@/views/buttons/StandardButtons'

Vue.use(CoreuiVue)

describe('StandardButtons.vue', () => {
  it('has a name', () => {
    expect(StandardButtons.name).toBe('StandardButtons')
  })
  it('has a created hook', () => {
    expect(typeof StandardButtons.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof StandardButtons.data).toMatch('function')
    const defaultData = StandardButtons.data()
    expect(defaultData.togglePress).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(StandardButtons)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is StandardButtons', () => {
    const wrapper = shallowMount(StandardButtons)
    expect(wrapper.findComponent(StandardButtons)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(StandardButtons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
