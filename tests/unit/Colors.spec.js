import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Colors from '@/views/theme/Colors'

Vue.use(BootstrapVue)

describe('Colors.vue', () => {
  it('has a name', () => {
    expect(Colors.name).toMatch('colors')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Colors)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Colors', () => {
    const wrapper = shallowMount(Colors)
    expect(wrapper.is(Colors)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Colors)
    expect(wrapper.find('header.card-header > div').text()).toMatch('Theme colors')
  })
})
