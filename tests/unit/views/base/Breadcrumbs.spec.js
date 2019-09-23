import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Breadcrumbs from '@/views/base/Breadcrumbs'

Vue.use(CoreuiVue)

describe('Breadcrumbs.vue', () => {
  it('has a name', () => {
    expect(Breadcrumbs.name).toBe('Breadcrumbs')
  })
  it('has a created hook', () => {
    expect(typeof Breadcrumbs.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Breadcrumbs.data).toMatch('function')
    const defaultData = Breadcrumbs.data()
    expect(typeof defaultData.items).toMatch('object')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Breadcrumbs)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Breadcrumbs', () => {
    const wrapper = shallowMount(Breadcrumbs)
    expect(wrapper.is(Breadcrumbs)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(Breadcrumbs)
    expect(wrapper.element).toMatchSnapshot()
  })
})
