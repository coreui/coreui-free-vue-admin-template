import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import Tables from '@/views/base/Tables'

Vue.use(CoreuiVue)

describe('Tables.vue', () => {
  it('has a name', () => {
    expect(Tables.name).toBe('Tables')
  })
  it('is Vue instance', () => {
    const wrapper = mount(Tables)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Tables', () => {
    const wrapper = mount(Tables)
    expect(wrapper.is(Tables)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Tables)
    expect(wrapper.element).toMatchSnapshot()
  })
})
