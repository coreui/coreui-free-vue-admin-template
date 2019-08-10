import Vue from 'vue'
import CoreuiVue from '@coreui/vue'
import TheHeader from '@/containers/TheHeader'
import { shallowMount } from '@vue/test-utils';

Vue.use(CoreuiVue)

describe('TheHeader.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(TheHeader)
    expect(wrapper.element).toMatchSnapshot()
  })
})