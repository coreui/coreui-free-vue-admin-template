import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import User from '@/views/users/User'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('User.vue', () => {
  it('has a name', () => {
    expect(User.name).toMatch('User')
  })
  it('has a created hook', () => {
    expect(typeof User.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof User.data).toMatch('function')
    const defaultData = User.data()
    expect(defaultData.fields).toEqual([{key: 'key'}, {key: 'value'}])
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(User, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is User', () => {
    const wrapper = shallowMount(User, {
      localVue,
      router
    })
    expect(wrapper.is(User)).toBe(true)
  })
  it('renders props.caption when passed', () => {
    const caption = 'User id:'
    const wrapper = mount(User, {
      propsData: { caption },
      localVue,
      router
    })
    expect(wrapper.find('div.card-header').text()).toMatch(caption)
  })
})
