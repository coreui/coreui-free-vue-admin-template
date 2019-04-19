<template>
  <CHeader fixed>
    <CSidebarToggler class="d-lg-none"/>
    <CLink class="navbar-brand" to="#">
      <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
      <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
    </CLink>
    <CSidebarToggler class="d-md-down-none"/>
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
