import Vue from 'vue'
import { shallowMount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue'
import Tooltips from '@/views/base/Tooltips'

Vue.use(CoreuiVue)

describe('Tooltips.vue', () => {
  it('has a name', () => {
    expect(Tooltips.name).toBe('Tooltips')
  })
  it('has a created hook', () => {
    expect(typeof Tooltips.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Tooltips)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Tooltips', () => {
    const wrapper = shallowMount(Tooltips)
    expect(wrapper.findComponent(Tooltips)).toBeTruthy()
  })
  // test('renders correctly', () => {
    // const wrapper = shallowMount(Tooltips)
    // expect(wrapper.element).toMatchSnapshot()
  // })
})

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}
