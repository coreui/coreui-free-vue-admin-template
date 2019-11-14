import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Brands from '@/views/icons/Brands'

Vue.use(CoreuiVue)

describe('Brands.vue', () => {
  it('has a name', () => {
    expect(Brands.name).toBe('Brands')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Brands)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Brands', () => {
    const wrapper = shallowMount(Brands)
    expect(wrapper.is(Brands)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(Brands)
    expect(wrapper.element).toMatchSnapshot()
  })
})
