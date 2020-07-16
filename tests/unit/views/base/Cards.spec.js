import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Cards from '@/views/base/Cards'

Vue.use(CoreuiVue)

describe('Cards.vue', () => {
  it('has a name', () => {
    expect(Cards.name).toBe('Cards')
  })
  it('has a created hook', () => {
    expect(typeof Cards.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Cards.data).toMatch('function')
    const defaultData = Cards.data()
    expect(defaultData.show).toBe(true)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Cards)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Cards', () => {
    const wrapper = shallowMount(Cards)
    expect(wrapper.findComponent(Cards)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(Cards)
    expect(wrapper.element).toMatchSnapshot()
  })
})
