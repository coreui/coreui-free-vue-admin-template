import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import Switches from '@/views/base/Switches'

Vue.use(CoreuiVue)

describe('Switches.vue', () => {
  it('has a name', () => {
    expect(Switches.name).toMatch('switches')
  })
  it('has a created hook', () => {
    expect(typeof Switches.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Switches.data).toMatch('function')
    const defaultData = Switches.data()
    expect(typeof defaultData.fields).toMatch('object')
    expect(defaultData.checker).toMatch('yes')
  })
  it('is Vue instance', () => {
    const wrapper = mount(Switches)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Switches', () => {
    const wrapper = mount(Switches)
    expect(wrapper.is(Switches)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Switches)
    expect(wrapper.element).toMatchSnapshot()
  })
})
