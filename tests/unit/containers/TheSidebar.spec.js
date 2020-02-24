import { shallowMount, createLocalVue } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import Vuex from 'vuex'
import TheSidebar from '@/containers/TheSidebar'

const localVue = createLocalVue()
localVue.use(CoreuiVue)
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sidebarShow: 'responsive',
    sidebarMinimize: false
  }
})

describe('TheSidebar.vue', () => {
  it('has a name', () => {
    expect(TheSidebar.name).toBe('TheSidebar')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(TheSidebar, { store, localVue })
    expect(wrapper.element).toMatchSnapshot()
  })
})
