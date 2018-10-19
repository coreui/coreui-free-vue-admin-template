import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Forms from '@/views/base/Forms'

Vue.use(BootstrapVue)

describe('Forms.vue', () => {
  it('has a name', () => {
    expect(Forms.name).toMatch('forms')
  })
  it('has a created hook', () => {
    expect(typeof Forms.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Forms.data).toMatch('function')
    const defaultData = Forms.data()
    expect(defaultData.show).toBe(true)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Forms)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Forms', () => {
    const wrapper = shallowMount(Forms)
    expect(wrapper.is(Forms)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Forms)
    expect(wrapper.find('div.card-header > div > strong').text()).toMatch('Credit Card')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Forms)
    expect(wrapper.element).toMatchSnapshot()
  })
})
