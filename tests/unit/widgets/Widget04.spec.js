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
    expect(wrapper.props().rightHeader).toBe('rightHeader:string')
    expect(wrapper.props().rightFooter).toBe('rightFooter:string')
    expect(wrapper.props().leftHeader).toBe('leftHeader:string')
    expect(wrapper.props().leftFooter).toBe('leftFooter:string')
  })
})
