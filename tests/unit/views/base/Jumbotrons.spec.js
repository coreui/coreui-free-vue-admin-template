import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Jumbotrons from '@/views/base/Jumbotrons'

Vue.use(CoreuiVue)

describe('Jumbotrons.vue', () => {
  it('has a name', () => {
    expect(Jumbotrons.name).toBe('Jumbotrons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Jumbotrons', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.is(Jumbotrons)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
