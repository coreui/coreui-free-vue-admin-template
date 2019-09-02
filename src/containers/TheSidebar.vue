<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
  >
    <CSidebarHeader/>
    <CSidebarForm/>
    <CRenderFunction :contentToRender="navItems"/>
    <CSidebarFooter/>
    <CSidebarMinimizer 
      class="c-d-md-down-none" 
      @click.native="minimize = !minimize"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
export default {
  name: 'TheSidebar',
  data () {
    return {
      minimize: false,
      icon: 'cui-speedometer',
      counter: 0
    }
  },
  computed: {
    navItems () {
      return nav.map(parentElement => {
        if (Array.isArray(parentElement)) {
          return parentElement.filter(item => {
            return !JSON.stringify(item).includes('Dashboard')
          })
        }
        return parentElement  
      })
    }
  }
}
</script>
