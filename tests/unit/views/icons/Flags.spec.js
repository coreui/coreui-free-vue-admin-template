import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import { CIconPlugin } from '@coreui/icons/vue'
import Flags from '@/views/icons/Flags'

Vue.use(CoreuiVue)
Vue.use(CIconPlugin)

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
  test('renders correctly', () => {
    const wrapper = shallowMount(Flags)
    expect(wrapper.element).toMatchSnapshot()
  })
})
