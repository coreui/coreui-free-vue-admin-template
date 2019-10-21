import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CoreuiVue from '@coreui/vue'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


localVue.use(CoreuiVue)

describe('App.vue', () => {
  it('has a name', () => {
    expect(App.name).toBe('App')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is App', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router
    })
    expect(wrapper.is(App)).toBe(true)
  })
})
