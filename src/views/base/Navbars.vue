<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navbar </strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/navbar" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </div>
        <b-navbar toggleable="md" type="dark" variant="info">

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>brand</small>
        </div>
        <div>
          <!-- Image and text -->
          <b-navbar variant="faded" type="light">
            <b-navbar-brand tag="h1" href="#">
              <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
              BootstrapVue
            </b-navbar-brand>
          </b-navbar>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>text</small>
        </div>
        <div>
          <b-navbar toggleable type="light" variant="light">
            <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
            <b-navbar-brand>BootstrapVue</b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
              <b-navbar-nav>
                <b-nav-text>Navbar text</b-nav-text>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>dropdown</small>
        </div>
        <div>
          <b-navbar type="dark" variant="primary" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
              <b-navbar-nav>
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Link</b-nav-item>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="User" right>
                  <b-dropdown-item href="#">Account</b-dropdown-item>
                  <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>form</small>
        </div>
        <div>
          <b-navbar type="light" variant="light">
            <b-nav-form>
              <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
              <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>input group</small>
        </div>
        <div>
          <b-navbar type="light" variant="light">
            <b-nav-form>
              <b-input-group left="@">
                <b-form-input class="mr-sm-2" type="text" placeholder="Username"></b-form-input>
              </b-input-group>
            </b-nav-form>
          </b-navbar>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbars'
}
</script>

