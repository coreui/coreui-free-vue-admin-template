<template>
  <AppHeader fixed>
    <SidebarToggler class="d-lg-none" display="md" mobile />
    <LogoNavBarItem />
    <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
    <LeftNavBarItem />
    <RightNavBarItem />
    <AsideToggler class="d-none d-lg-block" />
    <!--<AsideToggler class="d-lg-none" mobile />-->
  </AppHeader>
</template>
<script>
import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue'
import LogoNavBarItem from '../components/LogoNavBarItem'
import LeftNavBarItem from '../components/LeftNavBarItem'
import RightNavBarItem from '../components/RightNavBarItem'

export default {
  name: 'DefaultHeader',
  components: {
    AsideToggler,
    AppHeader,
    SidebarToggler,
    LogoNavBarItem,
    LeftNavBarItem,
    RightNavBarItem,
  },
}
</script>
