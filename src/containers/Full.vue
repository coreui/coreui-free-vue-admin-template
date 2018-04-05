<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="static/img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="static/img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3">Dashboard</b-nav-item>
        <b-nav-item class="px-3">Users</b-nav-item>
        <b-nav-item class="px-3">Settings</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>
        <AppHeaderDropdown right no-caret>
          <div>
          <template slot="button-content">
            <img
              src="static/img/avatars/6.jpg"
              class="img-avatar"
              alt="admin@bootstrapmaster.com" />
          </template>
          <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
          <b-dropdown-item><i class="fa fa-bell-o" /> Updates
            <b-badge variant="info">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-item><i class="fa fa-envelope-o" /> Messages
            <b-badge variant="success">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-item><i class="fa fa-tasks" /> Tasks
            <b-badge variant="danger">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-item><i class="fa fa-comments" /> Comments
            <b-badge variant="warning">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-header
            tag="div"
            class="text-center">
            <strong>Settings</strong>
          </b-dropdown-header>
          <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
          <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
          <b-dropdown-item><i class="fa fa-usd" /> Payments
            <b-badge variant="secondary">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-item><i class="fa fa-file" /> Projects
            <b-badge variant="primary">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>
          <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>
          </div>
        </AppHeaderDropdown>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <FullAside/>
      </AppAside>
    </div>
    <AppFooter fixed>
      <!--footer-->
    </AppFooter>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, HeaderDropdown as AppHeaderDropdown, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as AppFooter, Breadcrumb } from '../components/'
import FullAside from './FullAside'

export default {
  name: 'full',
  components: {
    AsideToggler,
    AppHeader,
    AppHeaderDropdown,
    AppSidebar,
    AppAside,
    AppFooter,
    Breadcrumb,
    FullAside,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items,
      itemsCount: 42
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
