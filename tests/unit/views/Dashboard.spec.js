import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Dashboard from '@/views/Dashboard'

Vue.use(BootstrapVue)

describe('Dashboard.vue', () => {
  it('has a name', () => {
    expect(Dashboard.name).toMatch('dashboard')
  })
  it('has a created hook', () => {
    expect(typeof Dashboard.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Dashboard.data).toMatch('function')
    const defaultData = Dashboard.data()
    expect(defaultData.selected).toMatch('Month')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Dashboard', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.is(Dashboard)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.find('#traffic').text()).toMatch('Traffic')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Dashboard)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should have methods', () => {
    expect(typeof Dashboard.methods.variant  ).toEqual('function')
    expect(Dashboard.methods.variant(25)).toBe('info')
    expect(Dashboard.methods.variant(50)).toBe('success')
    expect(Dashboard.methods.variant(75)).toBe('warning')
    expect(Dashboard.methods.variant(100)).toBe('danger')
    expect(typeof Dashboard.methods.flag ).toEqual('function')
    expect(Dashboard.methods.flag('us')).toBe('flag-icon flag-icon-us')
  })
})
