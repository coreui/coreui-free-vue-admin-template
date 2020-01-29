import Vue from 'vue'
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import CChartBarExample from '@/views/charts/CChartBarExample'

Vue.use(CoreuiVue)

describe('CChartBarExample', () => {
  it('has a name', () => {
    expect(CChartBarExample.name).toBe('CChartBarExample')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(CChartBarExample)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is CChartBarExample', () => {
    const wrapper = shallowMount(CChartBarExample)
    expect(wrapper.is(CChartBarExample)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(CChartBarExample)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should have computed', () => {
    const wrapper = shallowMount(CChartBarExample)

    expect(wrapper.vm.defaultDatasets).toBeDefined()
  })
})
