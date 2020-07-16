import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import CoreUIIcons from '@/views/icons/CoreUIIcons'

Vue.use(CoreuiVue)

describe('CoreUIIcons.vue', () => {
  it('has a name', () => {
    expect(CoreUIIcons.name).toBe('CoreUIIcons')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(CoreUIIcons)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is CoreUIIcons', () => {
    const wrapper = shallowMount(CoreUIIcons)
    expect(wrapper.findComponent(CoreUIIcons)).toBeTruthy()
  })
})
