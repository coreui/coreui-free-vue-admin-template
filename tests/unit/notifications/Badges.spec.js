import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Badges from '@/views/notifications/Badges'

Vue.use(BootstrapVue)

describe('Badges.vue', () => {
  it('has a name', () => {
    expect(Badges.name).toMatch('badges')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Badges)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Badges', () => {
    const wrapper = shallowMount(Badges)
    expect(wrapper.is(Badges)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Badges)
    expect(wrapper.find('header.card-header > div').text()).toMatch('Bootstrap Badge docs')
  })
})
