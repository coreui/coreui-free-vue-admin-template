<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="c-header-toggler ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="c-header-toggler ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <img
      class="c-header-brand mx-auto d-lg-none" 
      src="img/brand/coreui-base.svg" 
      width="97" 
      height="46" 
      alt="CoreUI Logo"
    />
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3" to="/dashboard">Dashboard</CHeaderNavItem>
      <CHeaderNavItem class="px-3" to="/users" exact>Users</CHeaderNavItem>
      <CHeaderNavItem class="px-3">Settings</CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
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
    </CHeaderNav>
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
