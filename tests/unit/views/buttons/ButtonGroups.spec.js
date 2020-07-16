import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import ButtonGroups from '@/views/buttons/ButtonGroups'

Vue.use(CoreuiVue)

describe('ButtonGroups.vue', () => {
  const wrapper = shallowMount(ButtonGroups)
  it('has a name', () => {
    expect(ButtonGroups.name).toBe('ButtonGroups')
  })
  it('is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('is ButtonGroups', () => {
    expect(wrapper.findComponent(ButtonGroups)).toBeTruthy()
  })
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
