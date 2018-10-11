import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Component from '@/views/widgets/Widget06'

Vue.use(BootstrapVue)

const ComponentName = 'Widget06'
const wrapper = shallowMount(Component)

describe(ComponentName + '.vue', () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('correctly sets default props and data when created', () => {
    expect(wrapper.props().cardClasses).toBe('')
    expect(wrapper.props().header).toBe('header:string')
    expect(wrapper.props().text).toBe('text:string')
    expect(wrapper.props().chartType).toBe('chart1')
    expect(wrapper.props().chartHeight == 70).toBe(true)
  })
})
