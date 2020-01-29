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
    expect(typeof User.methods.getUserData ).toEqual('function')
    expect(wrapper.vm.getUserData(1)).toStrictEqual([
      { key: 'username', value: 'Samppa Nori' },
      { key: 'registered', value: '2012/01/01' },
      { key: 'role', value: 'Member' },
      { key: 'status', value: 'Active' } ])
    expect(wrapper.vm.getUserData(30)).toStrictEqual([{"key": "id", "value": "Not found"}])
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(User, {
      localVue,
        router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
