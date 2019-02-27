<template>
  <div class="app">
    <CHeader fixed>
      <CSidebarToggler class="d-lg-none" display="md" mobile />
      <CLink class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </CLink>
      <CSidebarToggler class="d-md-down-none" display="lg" />
      <CNavbarNav class="d-md-down-none">
        <CNavItem class="px-3" to="/dashboard">Dashboard</CNavItem>
        <CNavItem class="px-3" to="/users" exact>Users</CNavItem>
        <CNavItem class="px-3">Settings</CNavItem>
      </CNavbarNav>
      <CNavbarNav class="ml-auto">
        <CNavItem class="d-md-down-none">
          <i class="icon-bell"></i>
          <CBadge pill variant="danger">5</CBadge>
        </CNavItem>
        <CNavItem class="d-md-down-none">
          <i class="icon-list"></i>
        </CNavItem>
        <CNavItem class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </CNavItem>
        <DefaultHeaderDropdownAccnt/>
      </CNavbarNav>
      <CAsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </CHeader>
    <div class="app-body">
      <CSidebar fixed>
        <CSidebarHeader/>
        <CSidebarForm/>
        <!-- <CSidebarNav :navItems="computedNav"/> -->
        <nav class="sidebar-nav">
          <VuePerfectScrollbar class="scroll-area" :settings="psSettings"
                               @ps-scroll-y="scrollHandle">
              <CSidebarNavItems :items="computedNav"/>
          </VuePerfectScrollbar>
        </nav>
        <CSidebarFooter/>
        <CSidebarMinimizer/>
      </CSidebar>
      <main class="main">
        <CBreadcrumbRouter/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <CAside fixed>
        <!--aside-->
        <DefaultAside/>
      </CAside>
    </div>
    <CFooter>
      <!--footer-->
      <div>
        <a href="https://coreui.io">CoreUI</a>
        <span class="ml-1">&copy; 2018 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://coreui.io">CoreUI for Vue</a>
      </div>
    </CFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'full',
  components: {
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    VuePerfectScrollbar
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    computedNav () {
      return this.nav.filter((item) => item.name !== 'Dashboard')
    },
    psSettings: () => {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 })
      }
    }
  },
  methods: {
    /*eslint no-unused-vars: ["error", { "argsIgnorePattern": "evt" }]*/
    scrollHandle (evt) {
      // console.log(evt)
    }
  }
}
</script>

<style scoped lang="css">
  .scroll-area {
    position: absolute;
    height: 100%;
    margin: auto;
  }
</style>
