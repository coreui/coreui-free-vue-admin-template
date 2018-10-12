import Vue from 'vue'
import { mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Tables from '@/views/base/Tables'

Vue.use(BootstrapVue)

describe('Tables.vue', () => {
  it('has a name', () => {
    expect(Tables.name).toMatch('tables')
  })
  it('is Vue instance', () => {
    const wrapper = mount(Tables)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Tables', () => {
    const wrapper = mount(Tables)
    expect(wrapper.is(Tables)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Tables)
    expect(wrapper.find('div.card-header > div').text()).toMatch('Simple Table')
  })
})
