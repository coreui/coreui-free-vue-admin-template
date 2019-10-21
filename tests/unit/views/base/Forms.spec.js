import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Forms from '@/views/base/Forms'

Vue.use(CoreuiVue)

describe('Forms.vue', () => {
  it('has a name', () => {
    expect(Forms.name).toBe('Forms')
  })
  it('is Forms', () => {
    const wrapper = shallowMount(Forms)
    expect(wrapper.is(Forms)).toBe(true)
  })
  // render random chackboxes
  // test('renders correctly', () => {
  //   const wrapper = shallowMount(Forms)
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})
