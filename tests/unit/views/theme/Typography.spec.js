import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Typography from '@/views/theme/Typography'

Vue.use(BootstrapVue)

describe('Typography.vue', () => {
  it('has a name', () => {
    expect(Typography.name).toMatch('typography')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Typography', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.is(Typography)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.find('.card-header').text()).toMatch('Headings')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Typography)
    expect(wrapper.element).toMatchSnapshot()
  })
})
