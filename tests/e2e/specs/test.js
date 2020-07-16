// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  before: function (browser) {
    console.log('Setting up... browser', typeof browser)
  },

  after: function (browser) {
    console.log('Closing down... browser', typeof browser)
  },

  'CoreUI Vue e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js

    // const devServer = browser.globals.devServerURL
    const devServer = process.env.VUE_DEV_SERVER_URL
    const toggle = (mobile = false) => {
      if (mobile) {
        browser.click('.c-header-toggler.d-lg-none')
      } else {
        browser.click('.c-header-toggler.d-md-down-none')
      }
    }
    const sidebarIsVisible = () => {
      browser.expect.element('.c-sidebar').to.have.css('margin-left').which.equals('0px')
    }

    const sidebarIsHidden = () => {
      browser.expect.element('.c-sidebar').to.have.css('margin-left').which.not.equals('0px')
    }


    browser.url(devServer).pause(500).expect.element('body').to.be.present

    browser.waitForElementVisible('.c-app', 1000)
      .assert.elementPresent('.c-header')
      .assert.elementPresent('.c-sidebar')
      .assert.elementPresent('.c-footer')
      .assert.elementPresent('.c-sidebar')
      .assert.elementPresent('.c-body')

    browser.resizeWindow(700, 800)
    sidebarIsHidden()
    toggle('mobile')
    browser.pause(500)
    sidebarIsVisible()
    browser.click('.c-sidebar-backdrop')
    browser.pause(500)
    sidebarIsHidden()
    toggle('mobile')
    browser.pause(500)
    browser.click('.c-sidebar-nav-dropdown-toggle')
    browser.pause(500)
    sidebarIsVisible()
    browser.click('.c-sidebar-nav-item')
    browser.pause(500)
    sidebarIsHidden()

    browser.resizeWindow(1900, 800)
    sidebarIsVisible()
    browser.pause(500)
    browser.click('.c-sidebar-minimizer')
    browser.click('.c-body')
    browser.pause(500)
    browser.expect.element('.c-sidebar').to.have.css('width').which.equals('56px')
    browser.click('.c-sidebar-minimizer')
    browser.click('.c-body')
    browser.pause(500)
    browser.expect.element('.c-sidebar').to.have.css('width').which.equals('256px')
    browser.click('.c-header-toggler.d-md-down-none')
    browser.pause(1000)
    sidebarIsHidden()
    browser.pause(1000)


    browser.end()
  }
}
