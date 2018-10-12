import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/widgets/Widget08'

Vue.use(BootstrapVue)

const ComponentName = 'Widget08'
const wrapper = shallowMount(Component)

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
