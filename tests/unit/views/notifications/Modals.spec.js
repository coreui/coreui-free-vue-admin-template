import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Modals from '@/views/notifications/Modals'

Vue.use(BootstrapVue)

describe('Modals.vue', () => {
  it('has a name', () => {
    expect(Modals.name).toMatch('modals')
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
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Modals', () => {
    const wrapper = shallowMount(Modals)
    expect(wrapper.is(Modals)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Modals)
    expect(wrapper.find('div.card-header > div').text()).toMatch('Bootstrap Modals')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Modals)
    expect(wrapper.element).toMatchSnapshot()
  })
})
