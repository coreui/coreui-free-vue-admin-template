<script setup>
import { RouterLink } from 'vue-router'

import { logo } from '@/assets/brand/logo'
import { sygnet } from '@/assets/brand/sygnet'
import { AppSidebarNav } from '@/components/AppSidebarNav.js'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()
</script>

<template>
  <CSidebar
    class="border-end"
    colorScheme="dark"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
   <CSidebarHeader class="border-bottom d-flex justify-content-center align-items-center">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
        <img alt="AE logo" class="logo" src="@/assets/AElogo.svg" height="32" />
        <div class="sidebar-brand-full">AE PORTAL</div>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="sidebar.toggleVisible()" />
    </CSidebarHeader>
    <AppSidebarNav />
    <CSidebarFooter class="border-top d-none d-lg-flex">
      <CSidebarToggler @click="sidebar.toggleUnfoldable()" />
    </CSidebarFooter>
  </CSidebar>
</template>

<style scoped>
.sidebar-brand-full {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #3399FF;
  letter-spacing: 0.1rem; /* Slightly increased letter spacing */
}
</style>