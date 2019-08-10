import CoreuiVue from '@coreui/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('DefaultContainer.vue', () => {
  it('has a name', () => {
    expect(DefaultContainer.name).toMatch('full')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(DefaultContainer, {
      localVue,
        router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(DefaultContainer, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
