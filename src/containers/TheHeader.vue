<template>
  <CHeader fixed>
    <CSidebarToggler class="c-header-toggler c-d-lg-none"/>
    <CLink class="c-header-brand" to="#">
      <img class="c-navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
      <!-- <img class="c-navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo"> -->
    </CLink>
    <CSidebarToggler class="c-header-toggler c-d-md-down-none"/>
    <ul class="c-header-nav c-d-md-down-none">
      <CNavItem class="c-px-3" to="/dashboard">Dashboard</CNavItem>
      <CNavItem class="c-px-3" to="/users" exact>Users</CNavItem>
      <CNavItem class="c-px-3">Settings</CNavItem>
    </ul>
    <CNav class="c-header-nav c-ml-auto">
      <CNavItem class="c-d-md-down-none">
        <i class="cui-bell"></i>
        <CBadge pill variant="danger">5</CBadge>
      </CNavItem>
      <CNavItem class="c-d-md-down-none">
        <i class="cui-list"></i>
      </CNavItem>
      <CNavItem class="d-md-down-none">
        <i class="cui-location-pin"></i>
      </CNavItem>
      <DefaultHeaderDropdownAccnt/>
    </CNav>
    <CSidebarToggler
      class="c-header-toggler c-d-md-down-none"
      aside
    />
  </CHeader>
</template>

<script>
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    DefaultHeaderDropdownAccnt
  }
}
</script>
