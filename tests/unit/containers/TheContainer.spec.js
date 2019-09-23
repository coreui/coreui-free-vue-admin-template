import CoreuiVue from '@coreui/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import TheContainer from '@/containers/TheContainer'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('TheContainer.vue', () => {
  it('has a name', () => {
    expect(TheContainer.name).toBe('TheContainer')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(TheContainer, {
      localVue,
        router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(TheContainer, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
