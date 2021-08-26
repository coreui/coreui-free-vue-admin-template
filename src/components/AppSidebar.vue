<template>
  <CSidebar position="fixed" selfHiding="md" :unfoldable="sidebarUnfoldable" :visible="sidebarVisible">
    <CSidebarBrand>
      <CIcon
        customClassName="sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        customClassName="sidebar-brand-narrow"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>
    <AppSidebarNav />
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    />
  </CSidebar>
</template>

<script>
import { AppSidebarNav } from './AppSidebarNav'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  computed: {
    sidebarUnfoldable() {
      return this.$store.state.sidebarUnfoldable
    },
    sidebarVisible() {
      return this.$store.state.sidebarVisible
    },
  },
}
</script>
