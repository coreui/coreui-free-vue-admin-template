import Vue from 'vue'
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import ProgressBars from '@/views/base/ProgressBars'

Vue.use(CoreuiVue)

jest.useFakeTimers()

describe('ProgressBars.vue', () => {
  // mount it once, to make test efficient & faster
  const wrapper = shallowMount(ProgressBars)

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
    expect(wrapper.vm).toBeTruthy()
  })
  it('is ProgressBars', () => {
    expect(wrapper.findComponent(ProgressBars)).toBeTruthy()
  })
  test('renders correctly', () => {
    // mock Math.random() to always return 1
    jest.spyOn(global.Math, 'random').mockReturnValue(1)

    expect(wrapper.element).toMatchSnapshot()

    // restore Math.random()
    jest.spyOn(global.Math, 'random').mockRestore()
  })
  it('should have methods', () => {
    expect(typeof ProgressBars.methods.clicked  ).toEqual('function')
    expect(ProgressBars.methods.clicked()).toBeUndefined()
  })
  it('should execute mounted', () => {
    // mock interval 2000 ms
    jest.advanceTimersByTime(2000);

    expect(setInterval).toHaveBeenCalled();
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 2000)
  })

  // this test should be the last
  it('should be destroyed', () => {
    wrapper.destroy()
  })
})
