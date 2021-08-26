<template>
  <CSidebar position="fixed" selfHiding="md" :class="sidebarClass">
    <CSidebarBrand>
      <CIcon
        customClasses="sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134" />
      <CIcon
        customClasses="sidebar-brand-narrow"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
    /></CSidebarBrand>

    <AppSidebarNav />
  </CSidebar>
</template>

<script>
import { AppSidebarNav } from "./AppSidebarNav";
export default {
  name: "AppSidebar",
  components: {
    AppSidebarNav,
  },
  computed: {
    sidebarClass () {
      return this.$store.state.sidebarClass
    }
  }
};
</script>
