import Vue from 'vue'
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import Charts from '@/views/charts/Charts'

Vue.use(CoreuiVue)

describe('Charts.vue', () => {
  it('has a name', () => {
    expect(Charts.name).toBe('Charts')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Charts)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Charts', () => {
    const wrapper = shallowMount(Charts)
    expect(wrapper.is(Charts)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Charts)
    expect(wrapper.element).toMatchSnapshot()
  })
})
