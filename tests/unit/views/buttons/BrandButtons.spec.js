import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import BrandButtons from '@/views/buttons/BrandButtons'

Vue.use(CoreuiVue)

describe('BrandButtons.vue', () => {
  it('has a name', () => {
    expect(BrandButtons.name).toBe('BrandButtons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(BrandButtons)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is BrandButtons', () => {
    const wrapper = shallowMount(BrandButtons)
    expect(wrapper.findComponent(BrandButtons)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = mount(BrandButtons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
