import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import ButtonGroups from '@/views/buttons/ButtonGroups'

Vue.use(BootstrapVue)

describe('ButtonGroups.vue', () => {
  it('has a name', () => {
    expect(ButtonGroups.name).toMatch('button-groups')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(ButtonGroups)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is ButtonGroups', () => {
    const wrapper = shallowMount(ButtonGroups)
    expect(wrapper.is(ButtonGroups)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(ButtonGroups)
    expect(wrapper.find('header.card-header').text()).toMatch('Bootstrap button group')
  })
  test('renders correctly', () => {
    const wrapper = mount(ButtonGroups)
    expect(wrapper.element).toMatchSnapshot()
  })
})
