import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Dashboard from '@/views/Dashboard'

Vue.use(BootstrapVue)

describe('Dashboard', () => {
  it('has a created hook', () => {
    expect(typeof Dashboard.data).to.equal('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Dashboard.data).to.equal('function')
    const defaultData = Dashboard.data()
    expect(defaultData.selected).to.equal('Month')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#traffic').textContent)
      .to.equal('Traffic')
  })
})
