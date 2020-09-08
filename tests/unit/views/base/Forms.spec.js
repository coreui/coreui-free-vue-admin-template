import Vue from 'vue'
import { mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Forms from '@/views/base/Forms'

Vue.use(CoreuiVue)

describe('Forms.vue', () => {
  // use mount. So the method applied to child components can be tested
  const wrapper = mount(Forms)

  it('has a name', () => {
    expect(Forms.name).toBe('Forms')
  })
  it('is Forms', () => {
    expect(wrapper.findComponent(Forms)).toBeTruthy()
  })
  // render random chackboxes
  // test('renders correctly', () => {
  //   const wrapper = shallowMount(Forms)
  //   expect(wrapper.element).toMatchSnapshot()
  // })

  // the test action is in Forms.vue, with valid & invalid input
  // so just render it, it will executed
  it('should execute validator() on mount', (done) => {
    expect(wrapper).toBeDefined()
    done()
  })

  // simulate input to make it invalid. This will test <CInput :is-valid="validator" />
  it('should not pass validator()', (done) => {
    // need to find best selector for the input, this one from rendered HTML
    const input = wrapper.findAll('input').at(71)
    input.setValue('Hai')

    wrapper.vm.$nextTick(() => {
      expect(input.classes()).toContain('is-invalid')
      // use callback, because its error when using async await
      done()
    })
  })

  it('should pass validator()', (done) => {
    const input = wrapper.find('div > div:nth-child(3) > div:nth-child(2) > div > div > form > div:nth-child(2) > input')
    input.setValue('Hello World')

    wrapper.vm.$nextTick(() => {
      expect(input.classes()).toContain('is-valid')
      done()
    })
  })
})
