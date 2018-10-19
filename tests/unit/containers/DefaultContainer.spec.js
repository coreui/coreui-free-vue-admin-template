import BootstrapVue from 'bootstrap-vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import DefaultContainer from '@/containers/DefaultContainer'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(BootstrapVue)

describe('DefaultContainer.vue', () => {
  it('has a name', () => {
    expect(DefaultContainer.name).toMatch('DefaultContainer')
  })
  it('has a created hook', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(DefaultContainer, {
      localVue,
        router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('sets the correct default data', () => {
    expect(typeof DefaultContainer.data).toMatch('function')
    const defaultData = DefaultContainer.data()
    expect(typeof defaultData.nav).toMatch('object')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(DefaultContainer, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
