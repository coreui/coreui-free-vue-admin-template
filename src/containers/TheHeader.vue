<template>
  <CHeader fixed with-subheader light>
    <CSidebarToggler 
      class="c-header-toggler ml-3"
      v-c-emit-root-event:c-sidebar-toggle
    />
    <img
      class="c-header-brand mx-auto d-lg-none" 
      src="img/brand/coreui-base.svg" 
      width="97" 
      height="46" 
      alt="CoreUI Logo"
    />
    <ul class="c-header-nav d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3" to="/dashboard">Dashboard</CHeaderNavItem>
      <CHeaderNavItem class="px-3" to="/users" exact>Users</CHeaderNavItem>
      <CHeaderNavItem class="px-3">Settings</CHeaderNavItem>
    </ul>
    <ul class="c-header-nav mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <i class="cui-bell"></i>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <i class="cui-list"></i>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <i class="cui-envelope-open"></i>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </ul>
    <div class="c-subheader px-3">
      <CBreadcrumbRouter class="border-0"/>
    </div>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
