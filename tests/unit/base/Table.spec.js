import Vue from 'vue'
import { mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Table from '@/views/base/Table'

Vue.use(BootstrapVue)

describe('Table.vue', () => {
  it('has a name', () => {
    expect(Table.name).toMatch('c-table')
  })
  it('has a created hook', () => {
    expect(typeof Table.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Table.data).toMatch('function')
    const defaultData = Table.data()
    expect(defaultData.currentPage).toBe(1)
  })
  it('is Vue instance', () => {
    const wrapper = mount(Table)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Table', () => {
    const wrapper = mount(Table)
    expect(wrapper.is(Table)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Table)
    expect(wrapper.find('div.card-header > div').text()).toMatch('Table')
  })
})
