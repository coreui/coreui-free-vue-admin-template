import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Jumbotrons from '@/views/base/Jumbotrons'

Vue.use(BootstrapVue)

describe('Jumbotrons.vue', () => {
  it('has a name', () => {
    expect(Jumbotrons.name).toMatch('jumbotrons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Jumbotrons', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.is(Jumbotrons)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Jumbotrons)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Jumbotron')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
