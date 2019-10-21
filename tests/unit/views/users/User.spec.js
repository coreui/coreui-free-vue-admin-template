import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CoreuiVue from '@coreui/vue'
import User from '@/views/users/User'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('User.vue', () => {
  it('has a name', () => {
    expect(User.name).toBe('User')
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
  it('should have methods', () => {
    const wrapper = shallowMount(User,{
      localVue,
      router
    })

    expect(typeof User.methods.goBack ).toEqual('function')
    expect(wrapper.vm.goBack()).toBeUndefined()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(User, {
      localVue,
        router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
