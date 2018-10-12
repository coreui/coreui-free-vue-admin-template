import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import StandardButtons from '@/views/buttons/StandardButtons'

Vue.use(BootstrapVue)

describe('StandardButtons.vue', () => {
  it('has a name', () => {
    expect(StandardButtons.name).toMatch('standard-buttons')
  })
  it('has a created hook', () => {
    expect(typeof StandardButtons.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof StandardButtons.data).toMatch('function')
    const defaultData = StandardButtons.data()
    expect(defaultData.togglePress).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(StandardButtons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is StandardButtons', () => {
    const wrapper = shallowMount(StandardButtons)
    expect(wrapper.is(StandardButtons)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(StandardButtons)
    expect(wrapper.find('div.card-header > strong').text()).toMatch('Standard buttons')
    expect(wrapper.find('div.card-header > div > strong').text()).toMatch('Toggle pressed state')
  })
})
