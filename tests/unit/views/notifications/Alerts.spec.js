import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Alerts from '@/views/notifications/Alerts'

Vue.use(CoreuiVue)

describe('Alerts.vue', () => {
  it('has a name', () => {
    expect(Alerts.name).toBe('Alerts')
  })
  it('has a created hook', () => {
    expect(typeof Alerts.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Alerts.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Alerts)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Alerts', () => {
    const wrapper = shallowMount(Alerts)
    expect(wrapper.findComponent(Alerts)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Alerts)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should have methods', () => {
    expect(typeof Alerts.methods.showAlert ).toEqual('function')
    expect(Alerts.methods.showAlert()).toBeUndefined()
    expect(typeof Alerts.methods.countDownChanged ).toEqual('function')
    expect(Alerts.methods.countDownChanged(10)).toBeUndefined()
    expect(typeof Alerts.methods.showDismissibleAlerts ).toEqual('function')
    expect(Alerts.methods.showDismissibleAlerts()).toBeUndefined()
  })
})
