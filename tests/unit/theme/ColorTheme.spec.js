import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/theme/ColorTheme'

Vue.use(BootstrapVue)
const ComponentName = 'ColorTheme'

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
