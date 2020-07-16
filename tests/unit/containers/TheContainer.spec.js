import CoreuiVue from '@coreui/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import TheContainer from '@/containers/TheContainer'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(CoreuiVue)
const store = new Vuex.Store({
  state: {
    darkMode: false,
    sidebarShow: 'responsive',
    sidebarMinimize: false,
    asideShow: false
  }
})

const router = new VueRouter()

describe('TheContainer.vue', () => {
  it('has a name', () => {
    expect(TheContainer.name).toBe('TheContainer')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(TheContainer, {
      store,
      localVue,
      router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(TheContainer, {
      store,
      localVue,
      router
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
