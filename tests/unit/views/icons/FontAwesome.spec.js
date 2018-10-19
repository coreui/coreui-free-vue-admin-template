import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import FontAwesome from '@/views/icons/FontAwesome'

Vue.use(BootstrapVue)

describe('FontAwesome.vue', () => {
  it('has a name', () => {
    expect(FontAwesome.name).toMatch('font-awesome')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(FontAwesome)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is FontAwesome', () => {
    const wrapper = shallowMount(FontAwesome)
    expect(wrapper.is(FontAwesome)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(FontAwesome)
    expect(wrapper.find('div.card-header').text()).toMatch('50 New Icons in 4.7')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(FontAwesome)
    expect(wrapper.element).toMatchSnapshot()
  })
})
