import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Carousels from '@/views/base/Carousels'

Vue.use(BootstrapVue)

describe('Carousels.vue', () => {
  it('has a name', () => {
    expect(Carousels.name).toMatch('carousels')
  })
  it('has a created hook', () => {
    expect(typeof Carousels.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Carousels.data).toMatch('function')
    const defaultData = Carousels.data()
    expect(defaultData.slide).toBe(0)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Carousels)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Carousels', () => {
    const wrapper = shallowMount(Carousels)
    expect(wrapper.is(Carousels)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Carousels)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Carousel')
  })
})
