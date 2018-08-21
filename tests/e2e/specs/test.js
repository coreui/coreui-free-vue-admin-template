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

    browser.waitForElementVisible('.app', 10000)
      .assert.elementPresent('.app-header')
      .assert.elementPresent('.app-header > .navbar-brand')
      .assert.elementPresent('.app-body')
      .assert.elementPresent('.app-body > .main > .breadcrumb')
      .assert.elementPresent('.app-body > .main > .container-fluid > .animated')
      .assert.elementPresent('.app-body > .sidebar > .sidebar-nav')
      .assert.elementPresent('.app-body > .sidebar > .sidebar-minimizer')
      .assert.elementPresent('.app-footer')
      .assert.containsText('.app-footer > div > span', 'creativeLabs')
      .assert.containsText('.app-footer > div.ml-auto > span', 'Powered by')
      .assert.elementCount('button', 10)
      .resizeWindow(1024, 800)
      .pause(500)

    browser.click('body > div > header > button.d-none.d-lg-block.navbar-toggler', function (response) {
      console.log('response', typeof response)
      this.assert.ok(browser === this, 'Check if the context is right.')
      this.assert.cssClassPresent('body', 'aside-menu-show')
    })

    browser.pause(500)

    browser.click('body > div > header > button.d-none.d-lg-block.navbar-toggler', function (response) {
      console.log('response', typeof response)
      this.assert.cssClassNotPresent('body', 'aside-menu-show')
    })

    browser.pause(500)

    browser
      .useXpath()
      .click('/html/body/div/header/button[2]', function (response) {
        console.log('response', typeof response)
        this.assert.cssClassNotPresent('/html/body', 'sidebar-lg-show')
      })

    browser
      .pause(500)
      .click('/html/body/div/header/button[2]', function (response) {
        console.log('response', typeof response)
        this.assert.cssClassPresent('/html/body', 'sidebar-lg-show')
      })

    browser
      .pause(500)
      .click('/html/body/div/div/div/button', function (response) {
        console.log('response', typeof response)
        this.assert.cssClassPresent('/html/body', 'sidebar-minimized')
        this.assert.cssClassPresent('/html/body', 'brand-minimized')
      })
      .pause(500)
      .click('/html/body/div/div/div/button', function (response) {
        console.log('response', typeof response)
        this.assert.cssClassNotPresent('/html/body', 'sidebar-minimized')
        this.assert.cssClassNotPresent('/html/body', 'brand-minimized')
      })

    browser
    .resizeWindow(800, 600)
    .pause(500)

    browser
    .pause(500)
    .click('/html/body/div/header/button[1]', function (response) {
      console.log('response', typeof response)
      this.assert.cssClassPresent('/html/body', 'sidebar-show')
    })

    browser
    .pause(500)
    .click('/html/body/div/div/div/nav/section/ul/li[1]/div/a', function (response) {
      console.log('response', typeof response)
      this.assert.cssClassNotPresent('/html/body', 'sidebar-show')
    })

    browser
      .pause(5000)
      .end()
  }
}
