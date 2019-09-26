<template>
  <AppHeader fixed>
    <SidebarToggler class="d-lg-none" display="md" mobile />
    <b-link class="navbar-brand" to="#">
      <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
      <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
    </b-link>
    <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
    <LeftNavBarItem />
    <RightNavBarItem />
    <AsideToggler class="d-none d-lg-block" />
    <!--<AsideToggler class="d-lg-none" mobile />-->
  </AppHeader>
</template>
<script>
import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue'
import LeftNavBarItem from '../components/LeftNavBarItem'
import RightNavBarItem from '../components/RightNavBarItem'

export default {
  name: 'DefaultHeader',
  components: {
    AsideToggler,
    AppHeader,
    SidebarToggler,
    LeftNavBarItem,
    RightNavBarItem,
  },
}
</script>
