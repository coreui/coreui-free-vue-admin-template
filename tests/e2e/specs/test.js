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


    browser.url(devServer).pause(500).expect.element('body').to.be.present

    browser.waitForElementVisible('.c-app', 2000)
      .assert.elementPresent('.c-header')
      .assert.elementPresent('.c-sidebar')
      .assert.elementPresent('.c-footer')
      .assert.elementPresent('.c-sidebar')
      .assert.elementPresent('.c-body')
      
    // browser.resizeWindow(700, 800)
    // browser.expect.element('.c-sidebar').to.have.css('margin-left').which.equals('-256px')
    // browser.resizeWindow(1900, 800)
    // browser.expect.element('.c-sidebar').to.have.css('margin-left').which.equals('0px')
    // browser.pause(1500)
    // browser.click('.c-sidebar-minimizer')
    // browser.pause(1000)
    // browser.expect.element('.c-sidebar').to.have.css('width').which.equals('56px')
    // browser.click('button.c-header-toggler')
    // browser.pause(1000)
    // browser.expect.element('.c-sidebar').to.have.css('margin-left').which.equals('-256px')
    // browser.pause(1000)

    browser.end()
  }
}
