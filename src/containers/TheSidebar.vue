<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show.sync="show"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="d-block" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        :viewBox="`0 0 ${minimize ? 110 : 556} 134`"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="nav"/>
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
