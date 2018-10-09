import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/widgets/Widget04'

Vue.use(BootstrapVue)

const ComponentName = 'Widget04'
const wrapper = shallowMount(Component)

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('correctly sets default props and data when created', () => {
    const vm = new Vue(Component).$mount()
    expect(vm.rightHeader).toBe('rightHeader|string')
    expect(vm.rightFooter).toBe('rightFooter|string')
    expect(vm.leftHeader).toBe('leftHeader|string')
    expect(vm.leftFooter).toBe('leftFooter|string')
  })
})
