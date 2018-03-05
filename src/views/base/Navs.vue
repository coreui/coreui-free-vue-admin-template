<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong>
          <div class="card-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/nav" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </div>
        <div>
          <b-nav>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong> <small>tab style</small>
        </div>
        <div>
          <b-nav tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong> <small>pill style</small>
        </div>
        <div>
          <b-nav pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong> <small>fill tabs</small>
        </div>
        <div>
          <b-nav fill tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link with a long name </b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong> <small>justified tabs</small>
        </div>
        <div>
          <b-nav justified tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Link with a long name </b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong> <small>dropdown support</small>
        </div>
        <div>
          <b-nav pills>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" right>
              <b-dropdown-item>one</b-dropdown-item>
              <b-dropdown-item>two</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>three</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Navs</strong> <small>vertical variation</small>
        </div>
        <div>
          <b-nav vertical class="w-25">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navs'
  }
</script>

<style scoped>

</style>
