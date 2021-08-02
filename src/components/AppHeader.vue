<template>
  <CHeader position="sticky" class="mb-4">
    <CHeaderToggler class="ms-md-3" @click="$store.commit('toggleSidebar')">
      <CIcon name="cil-menu" size="lg" />
    </CHeaderToggler>
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none me-auto">
      <CNavItem>
        <CNavLink
          href="/dashboard"
        >
          Dashboard
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Users</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Settings</CNavLink>
      </CNavItem>
    </CHeaderNav>
    <CHeaderNav class="me-4">
      <CNavItem class="d-md-down-none mx-2">
        <CNavLink>
          <CIcon name="cil-bell" size="lg" />
        </CNavLink>
      </CNavItem>
      <CNavItem class="d-md-down-none mx-2">
        <CNavLink>
          <CIcon name="cil-list" />
        </CNavLink>
      </CNavItem>
      <CNavItem class="d-md-down-none mx-2">
        <CNavLink>
          <CIcon name="cil-envelope-open" />
        </CNavLink>
      </CNavItem>
      <!-- <TheHeaderDropdownAccnt/> -->
    </CHeaderNav>
  </CHeader>
</template>

<script>
// import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: "AppHeader",
  components: {},
};
</script>
