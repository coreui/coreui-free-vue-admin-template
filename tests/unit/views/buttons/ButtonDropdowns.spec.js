import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Dropdowns from '@/views/buttons/Dropdowns'

Vue.use(BootstrapVue)

describe('Dropdowns.vue', () => {
  it('has a name', () => {
    expect(Dropdowns.name).toMatch('dropdowns')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Dropdowns)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Dropdowns', () => {
    const wrapper = shallowMount(Dropdowns)
    expect(wrapper.is(Dropdowns)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Dropdowns)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Dropdown')
  })
  test('renders correctly', () => {
    const wrapper = mount(Dropdowns)
    expect(wrapper.element).toMatchSnapshot()
  })
})
