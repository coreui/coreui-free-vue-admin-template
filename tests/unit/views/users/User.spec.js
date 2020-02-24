import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CoreuiVue from '@coreui/vue'
import User from '@/views/users/User'
import appRouter from '@/router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = appRouter
router.push({path: '/users/1'})

localVue.use(CoreuiVue)

describe('User.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(User, {
      localVue,
      router
    })
  })
  it('has a name', () => {
    expect(User.name).toBe('User')
  })
  it('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is User', () => {
    expect(wrapper.is(User)).toBe(true)
  })
  it('should have methods', () => {
    expect(typeof User.methods.goBack).toEqual('function')
  })
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
