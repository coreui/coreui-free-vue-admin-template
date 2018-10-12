import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/widgets/Widget07'

Vue.use(BootstrapVue)

const ComponentName = 'Widget07'
const wrapper = shallowMount(Component)

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
