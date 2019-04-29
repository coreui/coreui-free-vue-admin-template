<template>
  <CSidebar fixed>
    <CSidebarHeader/>
    <CSidebarForm/>
    <CSidebarNav :navItems="computedNav"/>
    <CSidebarFooter/>
    <CSidebarMinimizer/>
  </CSidebar>
</template>

<script>
import nav from '@/_nav'
export default {
  name: 'TheSidebar',
  computed: {
    computedNav () {
      return nav.items.filter(item => item.name !== 'Dashboard')
    }
  }
}
</script>
