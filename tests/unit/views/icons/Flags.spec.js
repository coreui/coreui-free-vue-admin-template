import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Flags from '@/views/icons/Flags'

Vue.use(BootstrapVue)

describe('Flags.vue', () => {
  it('has a name', () => {
    expect(Flags.name).toMatch('flags')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Flags)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Flags', () => {
    const wrapper = shallowMount(Flags)
    expect(wrapper.is(Flags)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Flags)
    expect(wrapper.find('div.card-header').text()).toMatch('Flags')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Flags)
    expect(wrapper.element).toMatchSnapshot()
  })
})
