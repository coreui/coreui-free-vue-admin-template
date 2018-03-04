// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  'CoreUI Vue e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js

    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .pause(500)
      .expect.element('body').to.be.present;

    browser.waitForElementVisible('.app > .app', 3000)
      .assert.elementPresent('.app-header')
      .assert.elementPresent('.app-header > .navbar-brand')
      .assert.elementPresent('.app-body')
      .assert.elementPresent('.app-body > .main > .breadcrumb')
      .assert.elementPresent('.app-body > .main > .container-fluid > .animated')
      .assert.elementPresent('.app-body > .sidebar > .sidebar-nav')
      .assert.elementPresent('.app-body > .sidebar > .sidebar-minimizer')
      .assert.elementPresent('.app-footer')
      .assert.containsText('.app-footer > span', 'creativeLabs')
      .assert.containsText('.app-footer > span.ml-auto', 'Powered by')
      .assert.elementCount('button', 18)
      .resizeWindow(1024, 800)
      .pause(500);

    browser.click('body > div > header > button.navbar-toggler.aside-menu-toggler.d-md-down-none', function(response) {
      this.assert.ok(browser === this, 'Check if the context is right.');
      this.assert.cssClassNotPresent('body', 'aside-menu-hidden');
    });

    browser.pause(500);

    browser.click('body > div > header > button.navbar-toggler.aside-menu-toggler.d-md-down-none', function(response) {
      this.assert.cssClassPresent('body', 'aside-menu-hidden');
    });

    browser.pause(500);

    browser
      .useXpath()
      .click('/html/body/div/header/button[2]', function(response) {
        this.assert.cssClassPresent('/html/body', 'sidebar-hidden');
      });

    browser
      .pause(500)
      .click('/html/body/div/header/button[2]', function(response) {
        this.assert.cssClassNotPresent('/html/body', 'sidebar-hidden');
      });

    browser
      .pause(500)
      .click('/html/body/div/div/div/button', function(response) {
        this.assert.cssClassPresent('/html/body', 'sidebar-minimized');
        this.assert.cssClassPresent('/html/body', 'brand-minimized');
      })
      .pause(500)
      .click('/html/body/div/div/div/button', function(response) {
        this.assert.cssClassNotPresent('/html/body', 'sidebar-minimized');
        this.assert.cssClassNotPresent('/html/body', 'brand-minimized');
      });

    browser
      .pause(3000)
      .end();
  }
};
