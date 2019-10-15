<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
  >
    <CSidebarBrand 
      fullSrc="img/brand/coreui-base-white.svg" 
      minimizedSrc="img/brand/coreui-signet-white.svg"
      :wrappedInLink="{ href: 'https://coreui.io/', target: '_blank'}"
    />
    <!-- <CSidebarHeader/> -->
    <!-- <CSidebarForm/> -->
    <CRenderFunction :contentToRender="nav"/>
    <!-- <CSidebarFooter/> -->
    <CSidebarMinimizer 
      class="d-md-down-none c-sidebar-minimized-unfoldable"
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
      nav,
      show: null
    }
  },
  mounted () {
    this.$root.$on('toggle-sidebar', () => this.show = !this.show)
  }
}
</script>
