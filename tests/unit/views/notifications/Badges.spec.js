import Vue from 'vue'
import { mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Badges from '@/views/notifications/Badges'

Vue.use(CoreuiVue)

describe('Badges.vue', () => {
  it('has a name', () => {
    expect(Badges.name).toBe('Badges')
  })
  test('renders correctly', () => {
    const wrapper = mount(Badges)
    expect(wrapper.element).toMatchSnapshot()
  })
})
