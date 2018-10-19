import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue'
import Switches from '@/views/base/Switches'

Vue.use(BootstrapVue)

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
  it('should render correct content', () => {
    const wrapper = mount(Switches)
    expect(wrapper.find('div.card-header > div').text()).toMatch('Switch default')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Switches)
    expect(wrapper.element).toMatchSnapshot()
  })
})
