import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Users from '@/views/users/Users'

Vue.use(BootstrapVue)

describe('Users.vue', () => {
  it('has a name', () => {
    expect(Users.name).toMatch('Users')
  })
  it('has a created hook', () => {
    expect(typeof Users.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Users.data).toMatch('function')
    const defaultData = Users.data()
    expect(defaultData.currentPage).toBe(1)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Users)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Users', () => {
    const wrapper = shallowMount(Users)
    expect(wrapper.is(Users)).toBe(true)
  })
  it('renders props.caption when passed', () => {
    const caption = 'Users List'
    const wrapper = mount(Users, {
      propsData: { caption }
    })
    expect(wrapper.find('div.card-header > div').text()).toMatch(caption)
  })
})
