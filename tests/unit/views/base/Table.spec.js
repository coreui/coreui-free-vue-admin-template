import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import Table from '@/views/base/Table'

Vue.use(CoreuiVue)

describe('Table.vue', () => {
  it('has a name', () => {
    expect(Table.name).toBe('Table')
  })
  it('is Vue instance', () => {
    const wrapper = mount(Table)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Table', () => {
    const wrapper = mount(Table)
    expect(wrapper.findComponent(Table)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Table)
    expect(wrapper.element).toMatchSnapshot()
  })
})
