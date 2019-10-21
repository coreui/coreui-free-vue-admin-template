import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import BrandButtons from '@/views/buttons/BrandButtons'
import { CIconPlugin } from '@coreui/icons/vue'
import { iconsSet } from '@/assets/icons/icons.js'


Vue.use(CIconPlugin, iconsSet)
Vue.use(CoreuiVue)

describe('BrandButtons.vue', () => {
  it('has a name', () => {
    expect(BrandButtons.name).toBe('BrandButtons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(BrandButtons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is BrandButtons', () => {
    const wrapper = shallowMount(BrandButtons)
    expect(wrapper.is(BrandButtons)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(BrandButtons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
