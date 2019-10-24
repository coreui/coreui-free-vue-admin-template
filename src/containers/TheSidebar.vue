<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show.sync="show"
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
      class="d-md-down-none"
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
      show: 'responsive'
    }
  },
  mounted () {
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  }
}
</script>
