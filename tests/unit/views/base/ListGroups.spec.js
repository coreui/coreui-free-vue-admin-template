import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import ListGroups from '@/views/base/ListGroups'

Vue.use(BootstrapVue)

describe('ListGroups.vue', () => {
  it('has a name', () => {
    expect(ListGroups.name).toMatch('list-groups')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(ListGroups)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is ListGroups', () => {
    const wrapper = shallowMount(ListGroups)
    expect(wrapper.is(ListGroups)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(ListGroups)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap list group')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(ListGroups)
    expect(wrapper.element).toMatchSnapshot()
  })
})
