import { createLocalVue, shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Users from '@/views/users/Users'
import VueRouter from 'vue-router';

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('Users.vue', () => {
  it('has a name', () => {
    expect(Users.name).toBe('Users')
  })
  it('has a created hook', () => {
    expect(typeof Users.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Users,{
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Users', () => {
    const wrapper = shallowMount(Users,{
      localVue,
      router
    })
    expect(wrapper.is(Users)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Users, {
      localVue,
      router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
