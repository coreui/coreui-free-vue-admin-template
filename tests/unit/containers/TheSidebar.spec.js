import Vue from 'vue'
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import TheSidebar from '@/containers/TheSidebar'

Vue.use(CoreuiVue)

describe('TheSidebar.vue', () => {
  it('has a name', () => {
    expect(TheSidebar.name).toBe('TheSidebar')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(TheSidebar)
    expect(wrapper.element).toMatchSnapshot()
  })
})
