import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import CoreUIIcons from '@/views/icons/CoreUIIcons'

Vue.use(BootstrapVue)

describe('CoreUIIcons.vue', () => {
  it('has a name', () => {
    expect(CoreUIIcons.name).toMatch('CoreUIIcons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(CoreUIIcons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is CoreUIIcons', () => {
    const wrapper = shallowMount(CoreUIIcons)
    expect(wrapper.is(CoreUIIcons)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(CoreUIIcons)
    expect(wrapper.find('div.card-header').text()).toMatch('CoreUI Icons New')
  })
  test('renders correctly', () => {
    const wrapper = mount(CoreUIIcons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
