import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Charts from '@/views/Charts'

Vue.use(BootstrapVue)

describe('Charts.vue', () => {
  it('has a name', () => {
    expect(Charts.name).toMatch('charts')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Charts)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Charts', () => {
    const wrapper = shallowMount(Charts)
    expect(wrapper.is(Charts)).toBe(true)
  })
})
