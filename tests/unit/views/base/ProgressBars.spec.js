import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import ProgressBars from '@/views/base/ProgressBars'

Vue.use(CoreuiVue)

jest.useFakeTimers()

describe('ProgressBars.vue', () => {
  it('has a name', () => {
    expect(ProgressBars.name).toBe('ProgressBars')
  })
  it('has a created hook', () => {
    expect(typeof ProgressBars.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof ProgressBars.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = mount(ProgressBars)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is ProgressBars', () => {
    const wrapper = mount(ProgressBars)
    expect(wrapper.findComponent(ProgressBars)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(ProgressBars)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should be destroyed', () => {
    const wrapper = mount(ProgressBars)
    wrapper.destroy()
  })
  it('should have methods', () => {
    expect(typeof ProgressBars.methods.clicked  ).toEqual('function')
    expect(ProgressBars.methods.clicked()).toBeUndefined()
  })
})
