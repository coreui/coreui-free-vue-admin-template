<template>
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
    <DefaultHeaderDropdownAccnt/>
  </b-navbar-nav>
</template>
<script>
import DefaultHeaderDropdownAccnt from '../containers/DefaultHeaderDropdownAccnt'

export default {
  name: 'RightNavBarItem',
  components: {
    DefaultHeaderDropdownAccnt,
  },
}
</script>
