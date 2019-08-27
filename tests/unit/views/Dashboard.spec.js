import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import { CIconPlugin } from '@coreui/icons/vue'
import Dashboard from '@/views/Dashboard'
import { iconsSet } from '@/assets/icons/icons.js'


Vue.use(CoreuiVue)
Vue.use(CIconPlugin, iconsSet)

describe('Dashboard.vue', () => {
  it('has a name', () => {
    expect(Dashboard.name).toMatch('Dashboard')
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
})
