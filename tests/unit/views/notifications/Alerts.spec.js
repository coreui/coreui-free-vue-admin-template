import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Alerts from '@/views/notifications/Alerts'

Vue.use(BootstrapVue)

describe('Alerts.vue', () => {
  it('has a name', () => {
    expect(Alerts.name).toMatch('alerts')
  })
  it('has a created hook', () => {
    expect(typeof Alerts.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Alerts.data).toMatch('function')
    const defaultData = Alerts.data()
    expect(defaultData.showDismissibleAlert).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Alerts)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Alerts', () => {
    const wrapper = shallowMount(Alerts)
    expect(wrapper.is(Alerts)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Alerts)
    expect(wrapper.find('header.card-header > div').text()).toMatch('Bootstrap Alert docs')
  })
  test('renders correctly', () => {
    const wrapper = mount(Alerts)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should have methods', () => {
    expect(typeof Alerts.methods.showAlert ).toEqual('function')
    expect(Alerts.methods.showAlert()).toBeUndefined()
    expect(typeof Alerts.methods.countDownChanged ).toEqual('function')
    expect(Alerts.methods.countDownChanged(10)).toBeUndefined()
  })
})
