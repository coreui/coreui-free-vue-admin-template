<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="(event) => sidebarStore.updateSidebarVisible(event)"
  >
    <CSidebarBrand>
      <CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />
    </CSidebarBrand>
    <AppSidebarNav />
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="sidebarStore.toggleUnfoldable"
    />
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
import useSidebarStore from '@/stores/sidebar'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  setup() {
    const sidebarStore = useSidebarStore()
    return {
      logoNegative,
      sygnet,
      sidebarStore,
      sidebarUnfoldable: computed(() => sidebarStore.sidebarUnfoldable),
      sidebarVisible: computed(() => sidebarStore.sidebarVisible),
    }
  },
}
</script>
