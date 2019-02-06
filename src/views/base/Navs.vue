<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs</strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/nav" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </div>
        <div>
          <c-nav>
            <c-nav-item active>Active</c-nav-item>
            <c-nav-item>Link</c-nav-item>
            <c-nav-item>Another Link</c-nav-item>
            <c-nav-item disabled>Disabled</c-nav-item>
          </c-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>tab style</small>
        </div>
        <div>
            <c-nav tabs v-model="item" tab-content>
              <!-- <c-nav-item index="hehe2">Active</c-nav-item> -->
              <c-nav-item id="hehe">
                <i class="icon-basket-loaded"></i> Active
                <div slot="tab">hehe</div>
              </c-nav-item>
              <c-nav-item>
                Link

              </c-nav-item>
              <c-nav-item>
                Another Link
                <div slot="tab">hehe3</div>
              </c-nav-item>
              <c-nav-item disabled>Disabled</c-nav-item>

            </c-nav>
          <!-- <CTab fade :activeItem="item">
            <CTabItem id="hehe2">text1</CTabItem>
            <CTabItem>text1</CTabItem>
            <CTabItem>text2</CTabItem>
            <CTabItem @click="smh = 1">text3</CTabItem>
            <CTabItem>text4</CTabItem>
          </CTab> -->
        </div>


      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header" @click="item++">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>pill style</small>
        </div>
        <div @click="item--">
          <c-nav pills>
            <c-nav-item active>Active</c-nav-item>
            <c-nav-item>Link</c-nav-item>
            <c-nav-item>Another Link</c-nav-item>
            <c-nav-item disabled>Disabled</c-nav-item>
          </c-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>fill tabs</small>
        </div>
        <div>
          <c-nav fill tabs>
            <c-nav-item active>Active</c-nav-item>
            <c-nav-item>Link</c-nav-item>
            <c-nav-item>Link with a long name </c-nav-item>
            <c-nav-item disabled>Disabled</c-nav-item>
          </c-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>justified tabs</small>
        </div>
        <div>
          <c-nav justified tabs>
            <c-nav-item active>Active</c-nav-item>
            <c-nav-item>Link</c-nav-item>
            <c-nav-item>Link with a long name </c-nav-item>
            <c-nav-item disabled>Disabled</c-nav-item>
          </c-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>dropdown support</small>
        </div>
        <div>
          <c-nav pills>
            <c-nav-item active>Active</c-nav-item>
            <c-nav-item>Link</c-nav-item>
            <c-dropdown id="nav7_ddown" text="Dropdown" right>
              <a class="nav-link dropdown-toggle" slot="button">Dropdown</a>
              <c-dropdown-item>one</c-dropdown-item>
              <c-dropdown-item>two</c-dropdown-item>
              <c-dropdown-divider></c-dropdown-divider>
              <c-dropdown-item>three</c-dropdown-item>
            </c-dropdown>
          </c-nav>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>vertical variation</small>
        </div>
        <div>
          <c-nav vertical class="w-25">
            <c-nav-item active>Active</c-nav-item>
            <c-nav-item>Link</c-nav-item>
            <c-nav-item>Another Link</c-nav-item>
            <c-nav-item disabled>Disabled</c-nav-item>
          </c-nav>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
// import CNav from './CNav'
// import CNavItem from './CNavItem'
// import CTab from './CTab'
// import CTabItem from './CTabItem'


export default {
  name: 'navs',
  data () {
    return {
      item: 2
    }
  },
  // components: {
  //   CNav,
  //   CNavItem,
  //   CTab,
  //   CTabItem
  // }
}
</script>
