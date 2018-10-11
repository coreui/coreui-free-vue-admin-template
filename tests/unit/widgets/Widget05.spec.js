import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/widgets/Widget05'

Vue.use(BootstrapVue)

const ComponentName = 'Widget05'
const wrapper = shallowMount(Component)

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('has a created hook', () => {
    expect(typeof Component.data).toMatch('function')
  })
  it('correctly sets default props and data when created', () => {
    const vm = new Vue(Component).$mount()
    expect(vm.backgroundColor).toBe('')
    expect(vm.styleClasses).toBe('')
    expect(vm.header).toBe('header:string')
    expect(vm.text).toBe('text:string')
    expect(vm.variant).toBe('')
    expect(vm.value == 25).toBe(true)
  })
  it('correctly sets variant when background is not white', () => {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: {variant : 'background-success'}}).$mount()
    expect(vm.backgroundColor).toBe('success')
    expect(vm.styleClasses).toBe('text-white bg-success')
  })
})
