import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import BrandButtons from '@/views/buttons/BrandButtons'

Vue.use(BootstrapVue)

describe('BrandButtons.vue', () => {
  it('has a name', () => {
    expect(BrandButtons.name).toMatch('brand-buttons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(BrandButtons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is BrandButtons', () => {
    const wrapper = shallowMount(BrandButtons)
    expect(wrapper.is(BrandButtons)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(BrandButtons)
    expect(wrapper.find('div.card-header > div > strong').text()).toMatch('Brand Button')
  })
  test('renders correctly', () => {
    const wrapper = mount(BrandButtons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
