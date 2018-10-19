import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Popovers from '@/views/base/Popovers'

Vue.use(BootstrapVue)

describe('Popovers.vue', () => {
  it('has a name', () => {
    expect(Popovers.name).toMatch('popovers')
  })
  it('has a created hook', () => {
    expect(typeof Popovers.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Popovers.data).toMatch('function')
    const defaultData = Popovers.data()
    expect(defaultData.show).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Popovers)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Popovers', () => {
    const wrapper = shallowMount(Popovers)
    expect(wrapper.is(Popovers)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Popovers)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Popovers')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Popovers)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should have methods', () => {
    const wrapper = mount(Popovers)
    expect(typeof Popovers.methods.onOpen).toEqual('function')
    expect(wrapper.vm.onOpen()).toBeUndefined()
    expect(typeof Popovers.methods.onClose).toEqual('function')
    expect(wrapper.vm.onClose()).toBeUndefined()
    expect(typeof Popovers.methods.onEnable).toEqual('function')
    expect(wrapper.vm.onEnable()).toBeUndefined()
    expect(typeof Popovers.methods.onDisable).toEqual('function')
    expect(wrapper.vm.onDisable()).toBeUndefined()
  })
})
