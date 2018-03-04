import Vue from 'vue'
import Dashboard from '@/views/Dashboard'

describe('Dashboard', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.text-info').textContent)
      .to.equal('Hello World')
  })
})
