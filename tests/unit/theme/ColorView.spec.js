import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/theme/ColorView'

Vue.use(BootstrapVue)
const ComponentName = 'ColorView'

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
