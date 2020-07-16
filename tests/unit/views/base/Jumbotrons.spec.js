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
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Jumbotrons', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.findComponent(Jumbotrons)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Jumbotrons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
