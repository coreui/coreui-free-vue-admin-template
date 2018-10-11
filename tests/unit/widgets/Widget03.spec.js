import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/widgets/Widget03'

Vue.use(BootstrapVue)

const ComponentName = 'Widget03'
const wrapper = shallowMount(Component)

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('correctly sets default props when created', () => {
    const vm = new Vue(Component).$mount()
    expect(vm.header).toBe('header:string')
    expect(vm.text).toBe('text:string')
    expect(vm.iconClasses).toBe('fa fa-cogs bg-primary')
  })
})
