<template>
  <CSidebar fixed :minimize="minimize">
    <CSidebarHeader/>
    <CSidebarForm/>
    <CSidebarNav :nav-items="computedNav"/>
    <CSidebarFooter/>
    <CSidebarMinimizer @click="minimize = !minimize"/>
  </CSidebar>
</template>

<script>
import nav from './_nav'
export default {
  name: 'TheSidebar',
  data () {
    return {
      minimize: false
    }
  },
  computed: {
    computedNav () {
      return nav.items.filter(item => item.name !== 'Dashboard')
    }
  }
}
</script>
