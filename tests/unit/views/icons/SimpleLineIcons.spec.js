import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

Vue.use(BootstrapVue)

describe('SimpleLineIcons.vue', () => {
  it('has a name', () => {
    expect(SimpleLineIcons.name).toMatch('simple-line-icons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(SimpleLineIcons)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is SimpleLineIcons', () => {
    const wrapper = shallowMount(SimpleLineIcons)
    expect(wrapper.is(SimpleLineIcons)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(SimpleLineIcons)
    expect(wrapper.find('div.card-header').text()).toMatch('Simple Line Icons')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(SimpleLineIcons)
    expect(wrapper.element).toMatchSnapshot()
  })
})
