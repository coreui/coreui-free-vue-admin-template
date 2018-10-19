import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Breadcrumbs from '@/views/base/Breadcrumbs'

Vue.use(BootstrapVue)

describe('Breadcrumbs.vue', () => {
  it('has a name', () => {
    expect(Breadcrumbs.name).toMatch('breadcrumbs')
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
  it('should render correct content', () => {
    const wrapper = mount(Breadcrumbs)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Breadcrumb')
  })
  test('renders correctly', () => {
    const wrapper = mount(Breadcrumbs)
    expect(wrapper.element).toMatchSnapshot()
  })
})
