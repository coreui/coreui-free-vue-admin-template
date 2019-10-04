<template>
  <AppSidebar fixed>
    <SidebarHeader/>
    <SidebarForm/>
    <SidebarNav :navItems=navData.items></SidebarNav>
    <SidebarFooter/>
    <SidebarMinimizer/>
  </AppSidebar>
</template>

<script>
import nav from "@/_nav"
import { Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav } from '@coreui/vue'

export default {
  name: 'DefaultLeftSidebar',
  components: {
    AppSidebar,
    SidebarForm,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
  },
  data(){
    return{
      navData: nav,
    }
  },
}
</script>
